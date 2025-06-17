import { writable } from 'svelte/store';
import {profileChoices} from '../lib/models/profile.model'

const initialResults = {}
Object.keys(profileChoices).forEach(key => {
  const value = profileChoices[key]
  if (typeof value === 'string') {
     initialResults[key] = false
  } else if (typeof value === 'object') {
    initialResults[key] = null
  }
})
export const profile = writable(initialResults)
