//https://www.forbes.com/advisor/taxes/taxes-federal-income-tax-bracket/
import {wars} from '$services/domain/wars'

const taxRevenues = 3.71e12
const budget = {
  'Social Security': 1275.7,
  Health: 1051.8,
  Military: 609.3,
  'Interest on Debt': 229.2,
  Veteran: 160.6,
  'Food and Agriculture': 135.7,
  Education: 102.3,
  Transportation: 85,
  Housing: 61.5,
  'International Affairs': 50.2,
  'Energy and Environment': 44.8,
  Science: 29.8
}

// contribution to budget items
export interface Expense {
  name: string
  amount: number
}

// Single taxpayer contribution to budget items
export let computeContributions = (taxPaid: number) => {
  const contributions: Expense[] = []
  for (let item of wars) {
    const cost = item.cost || 0
    const amount = Math.round((cost * taxPaid) / taxRevenues)
    contributions.push({
      name: item.label || '',
      amount
    })
  }
  return contributions
}

const computeLastYearToCurrentYearValue= (val0: number, cpi0: number, cpi1: number ) =>
  val0 * cpi1 / cpi0

