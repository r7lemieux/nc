import { warData } from '$services/domain/wars/war.data'
import fs from 'fs'
import { getTimeValue, getTimeValueForYear } from '$services/domain/timeFactor/timeValueService'

const computeCostPerYear = () => {
  const costs = {}
  for (let war of warData) {
    if (!war.startDate) console.log(`==>contribution.computer.ts:30 war without a start date`, war)
    const startYear = war.startDate.getFullYear() - 2000
    const endYear = war.endDate ? war.endDate.getFullYear() - 2000 : 25
    const duration = endYear - startYear
    costs[war.label] = Array(26).fill(0)
    if (war.expenses) {
      for (let expense of war.expenses) {
        const expenseYear = parseInt(expense.date.substring(0, 4))
        for (let yyyy = 0; yyyy <= expenseYear; yyyy++) {
          costs[war.label][yyyy-2000] += Math.floor(getTimeValueForYear(expenseYear, expense.amount))
        }
      }
    } else {
      for (let yy1 = startYear; yy1 <= endYear; yy1++) {
        for (let yy2 = 0; yy2 < 26; yy2++) {
          costs[war.label][yy2] += Math.floor((yy2 > yy1)? 0 : war.cost / duration)
        }
      }
    }
    // console.log(`==>contribution.etl.ts:17 war`, war.label)
    // console.log(`==>contribution.etl.ts:17 startYear`, startYear)
    // console.log(`==>contribution.etl.ts:18 endYear`, endYear)
    // console.log(`==>contribution.etl.ts:19 duration`, duration)
    // console.log(`==>contribution.etl.ts:19 war.cost`, war.cost)
    // console.log(`==>contribution.etl.ts:22 war.cost / duration`, war.cost / duration)
  }
  return costs
}

const produceCostPerYearContent = () =>
  `export const costPerYear = ${JSON.stringify(computeCostPerYear())}`

const produceCostPerYearFile = () =>
  fs.writeFileSync('costPerYear.data.ts', produceCostPerYearContent())

produceCostPerYearFile()
