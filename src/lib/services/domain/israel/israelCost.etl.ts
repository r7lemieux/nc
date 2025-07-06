import { israelCost } from '$services/domain/israel/israelCost.data'
import fs from 'fs'
import type {Expense} from '$services/domain/wars/war'

const computeIsrael = () => {
  const costs: Expense[] = []
  for (let year=2000; year<2026; year++) {
    const yearData = israelCost[year]
    costs.push({
      date: `${year}`,
      amount: yearData.FMF
    })
  }
  return costs
}

const produceIsraelContent = () => `const israel = { \n costs: ${JSON.stringify(computeIsrael())}\n}`

const produceIsraelFile = () => fs.writeFileSync('expenseToIsrael.ts', produceIsraelContent())

produceIsraelFile()