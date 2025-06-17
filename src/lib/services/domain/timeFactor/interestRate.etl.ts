// https://fiscaldata.treasury.gov/datasets/average-interest-rates-treasury-securities/average-interest-rates-on-u-s-treasury-securities
// filename: AvgInterestRate_20010131_20250531.json

import {avgInterestRate} from '$services/domain/timeFactor/interestRate.raw'
import fs from 'fs'

const transformInterestRates = () => {
  const rates = Array((12 * 25) + 6)
  for (let index = 0; index < 12; index++) {
    rates[index] = 6.5
  }
  for (let record of avgInterestRate) {
    if (record.security_desc === 'Total Marketable') {
      const date = record.record_date
      const year = parseInt(date.substring(0, 4)) - 2000
      const month = parseInt(date.substring(5, 7))
      const index = year * 12 + (month - 1)
      // console.log(`==>interestRate.etl.ts:15 year`, year)
      // console.log(`==>interestRate.etl.ts:16 month`, month)
      // console.log(`==>interestRate.etl.ts:17 index`, index)
      rates[index] = record.avg_interest_rate_amt
    }
  }
  return rates.map(str => parseFloat(str))
}

const produceInterestRatesContent = ():string => {
  const rates = transformInterestRates()
  const lines = ['export const interestRate = [']
  let rate = 0
  for (let index = 0; index<rates.length; index++) {
    let lastRate = rate
    rate = rates[index] || lastRate
    lines.push(rate.toFixed(4) + ',')
  }
  lines.push(']')
  return lines.join('\n')
}

const produceInterestRateFile = () => fs.writeFileSync('interestRates.ts', produceInterestRatesContent())

produceInterestRateFile()


