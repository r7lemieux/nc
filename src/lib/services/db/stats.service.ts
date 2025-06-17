import {config} from '../../../config/config'

export const fetchStats = async () => {
  return fetch(config.statsFunctionUrl, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(results => {
      console.log(`==>stats.service.ts:24 res.body `, results)
      return results
    })
}

