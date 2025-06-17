import {derived} from 'svelte/store'
import {tax} from './tax.store'
import {survey} from './survey.store'
import {profile} from './profile.store'
import {choicesToDb, primitivesToDb} from '../lib/services/db/db.formater'

// const profileKeyMap = buildDbKeyMap(profileChoices)
// const profileValueMaps = buildDbChoiceMaps(profileChoices)
// const taxKeyMap = buildDbKeyMap(Object.keys(tax))
// const taxStores = Object.keys(tax).map(key => tax[key])
export const persistable = derived([
  tax,
  survey,
  profile], ([tax, survey, profile]) => {
  // console.log(`==>persistable.store.ts:16 tax `, {tax, survey, profile})
  return {
    tax: primitivesToDb(tax),
    survey,
    profile: choicesToDb(profile)
  }
})


