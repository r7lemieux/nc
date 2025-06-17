// filename: DebtPenny_20000101_20250605
import {debtRecords} from './debt.raw'
import {computeDayIndex} from '$services/domain/timeFactor/index.computer'

const byDate = Array(26 * 12 * 31)
debtRecords.forEach((rec) => {
  if (rec.debt_held_public_amt !== 'null') {
    // const date = rec.record_date
    // const year = parseInt(date.substring(0, 4)) - 2000
    // const month = parseInt(date.substring(5, 7))
    // const day = parseInt(date.substring(8, 10))
    //const index = year * 12 * 31 + (month - 1) * 31 + (day - 1)
    const index = computeDayIndex(rec.record_date)
    if (rec.debt_held_public_amt === '3402336886067.70') {
      // console.log(`==>DebtPenny_20000101_20250605.ts:38312 year`, year)
      // console.log(`==>DebtPenny_20000101_20250605.ts:38313 month`, month)
      // console.log(`==>DebtPenny_20000101_20250605.ts:38313 day`, day)
      // console.log(`==>DebtPenny_20000101_20250605.ts:38312 index`, index)
    }
    byDate[index] = parseFloat(rec.debt_held_public_amt)
    // if (!byDate[year]) byDate[year] = Array(12)
    // if (!byDate[year][month]) byDate[year][month] = Array(31)
    // byDate[year][month][day] = parseFloat(rec.debt_held_public_amt)
  }
})
// if (0)
const rec=byDate.map(r=>r)
for (let index = 0; index < rec.length; index++) {
  if (!byDate[index]) {
    let highIndex = index
    let lowIndex = index

    while (!byDate[++highIndex]) if (highIndex >= byDate.length - 1) break
    while (!byDate[--lowIndex]) if (lowIndex <= 0) break
    // console.log(`==>presentValue.computer.ts:70 highIndex`, highIndex)
    // console.log(`==>presentValue.computer.ts:71 lowIndex`, lowIndex)

    rec[index] =
      byDate[lowIndex] +
      ((byDate[highIndex] - byDate[lowIndex]) * (highIndex - index)) / (highIndex - lowIndex)
    if (rec[index] === 3404026838038.17) {
      const year =  Math.floor(index/31/12)
      const month = Math.floor((index-year*12*31)/12)
      const day = Math.floor(index-year*12*31-month*12+1)
      console.log(`==>DebtPenny_20000101_20250605.ts:38341 index`, index, `20${year<10?'0':''}${year}-${month}-${day}`)
      console.log(`==>DebtPenny_20000101_20250605.ts:38342 lowIndex`, lowIndex)
      console.log(`==>DebtPenny_20000101_20250605.ts:38343 highIndex`, highIndex)
      console.log(`==>DebtPenny_20000101_20250605.ts:38345 rec[lowIndex]`, rec[lowIndex])
      console.log(`==>DebtPenny_20000101_20250605.ts:38344 rec[highIndex]`, rec[highIndex])
    }
  }
}
console.log(`export const byDate = [`)
for (let r of rec) console.log(r.toFixed(2) + ',')
console.log(`]`)
