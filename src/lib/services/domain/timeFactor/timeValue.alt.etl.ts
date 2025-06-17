import { cpis } from '$services/domain/timeFactor/cpis'
import { debtByDate } from '$services/domain/timeFactor/debtByDate'
import {interestByMonth} from '$services/domain/timeFactor/interestByMonth'
const dirs = interestByMonth

// DIR : Debt bearing Interest Rates
// Granular to days
const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
export const computePresentValueFactor = (date0: Date): number => {
  const year = date0.getUTCFullYear()
  const month = date0.getUTCMonth()
  const dayOfMonth = date0.getUTCDate()
  const daysInMonth = daysInMonths[month]
  const proratedMonth = (daysInMonth + 1 - dayOfMonth) / daysInMonth
  const proratedYear = (12 - month) / 12
  const yearIndex = year - 2000
  const monthIndex = yearIndex * 12 + month

  // Consumer Price Index Factor
  const cpif = (index) => 1 + cpis[monthIndex] / 100
  // Debt Interest Rate Factor
  const dirf = (index) => 1 + dirs[monthIndex] / 100

  let cpiFactor =
    cpif(monthIndex) *
    proratedMonth *
    cpis.slice(monthIndex + 1).reduce((total, monthValue) => total * (1 + monthValue / 100), 1)

  let dirFactor =
    dirf(monthIndex) *
    proratedMonth *
    dirs.slice(monthIndex + 1).reduce((total, monthValue) => total * (1 + monthValue / 100), 1)

  // console.log(`==>presentValue.computer.ts:18 year`, year)
  // console.log(`==>presentValue.computer.ts:19 month`, month)
  // console.log(`==>presentValue.computer.ts:20 dayOfMonth`, dayOfMonth)
  // console.log(`==>presentValue.computer.ts:21 proratedMonth`, proratedMonth)
  // console.log(`==>presentValue.computer.ts:23 yearIndex`, yearIndex)
  // console.log(`==>presentValue.computer.ts:24 monthIndex`, monthIndex)
  //
  // console.log(`==>presentValue.computer.ts:23 cp`, cpis[monthIndex])
  // console.log(`==>presentValue.computer.ts:23 cpiFactor 0`, cpif(monthIndex) * proratedMonth)
  // console.log(`==>presentValue.computer.ts:23 dirFactor 0`, dirf(monthIndex) * proratedMonth)
  //
  // console.log(`==>presentValue.computer.ts:23 cpiFactor 1`, cpis.slice(monthIndex + 1))
  // console.log(`==>presentValue.computer.ts:23 cpiFactor 1`, cpis.slice(monthIndex + 1).reduce((total, monthValue) => total * (1+monthValue/100), 1))
  // console.log(`==>presentValue.computer.ts:23 dirFactor 1`, dirs.slice(monthIndex + 1).reduce((total, monthValue) => total * (1+monthValue/100), 1))
  //
  // console.log(`==>presentValue.computer.ts:42 presentValueFactor`, cpiFactor * dirFactor)
  return cpiFactor * dirFactor
}

// util
const indexForDate = (year: number, month: number, day: number): number =>
  year * 12 * 31 + (month - 1) * 31 + day - 1

export const getDebtAtDate = (date: string) => {
  const year = parseInt(date.substring(0, 4)) - 2000
  const month = parseInt(date.substring(5, 7))
  const day = parseInt(date.substring(8, 10))
  // console.log(`==>presentValue.computer.ts:54 year`, year)
  // console.log(`==>presentValue.computer.ts:55 month`, month)
  // console.log(`==>presentValue.computer.ts:56 day`, day)
  const index = indexForDate(year, month, day)
  // console.log(`==>presentValue.computer.ts:60 index`, index)
  let debt = debtByDate[index]
  if (debt) return debt
  const lowestIndex = indexForDate(0, 9, 29)
  // console.log(`==>presentValue.computer.ts:64 lowestIndex`, lowestIndex)
  if (index < lowestIndex) return debtByDate[lowestIndex]
  let highIndex = index
  let lowIndex = index
  let highValue = 0
  let lowValue = 0

  while (!debtByDate[++highIndex]) if (highIndex >= debtByDate.length - 1) break
  while (!debtByDate[--lowIndex]) if (lowIndex <= lowestIndex) break
  // console.log(`==>presentValue.computer.ts:70 highIndex`, highIndex)
  // console.log(`==>presentValue.computer.ts:71 lowIndex`, lowIndex)
  debt =
    debtByDate[lowIndex] +
    ((debtByDate[highIndex] - debtByDate[lowIndex]) * (highIndex - index)) / (highIndex - lowIndex)
  return debt
}

export const produceInterestFactors = (interestPayments) => {

}
