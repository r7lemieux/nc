import {persistable} from '$stores/persistable.store'
//todo use $stores, remove all relative paths
// import {addDoc, collection, db} from './dbService'
import {getFp} from '$services/sec/id.service'
import {setDate} from '$utils/numberFormater'
import {config} from '$config/config'

let storedData
persistable.subscribe(data => storedData = data)
export const persist = async () => {
  try {
    const dbData = {
      fp: getFp(),
      ...storedData,
    }
    setDate(dbData)
    return fetch(config.contributeFunctionUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(dbData),
    })
  } catch (ex) {
    console.error("persist:27 Error adding document: ", ex)
  }
}

