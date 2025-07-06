//https://www.forbes.com/advisor/taxes/taxes-federal-income-tax-bracket/
import { warData } from '$services/domain/wars/war.data'
import {costPerYear} from '$services/domain/cost/costPerYear.data'
import {taxRevenues} from '$services/domain/usBudget.data'
// contribution to budget items
export interface Expense {
  name: string
  amount: number
}

// Single taxpayer contribution to budget items
export let computeContributions = (taxPaid: number, since: number = 2000) => {
  const contributions: Expense[] = []
  for (let war of warData) {
    const costs = costPerYear[war.label]
    if (!costPerYear[war.label]) console.log(`==>contribution.computer.ts:16 war with no cost`, war.label)
    const cost2 = costPerYear[war.label][since - 2000]
    const cost = costPerYear[war.label][since - 2000] || 0
    const amount = Math.round((cost * taxPaid) / taxRevenues)
    contributions.push({
      name: war.label || '',
      amount
    })
  }
  return contributions
}

const computeLastYearToCurrentYearValue= (val0: number, cpi0: number, cpi1: number ) =>
  val0 * cpi1 / cpi0

