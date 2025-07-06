import  {type Expense} from '$services/domain/wars/war'
import  {warData} from '$services/domain/wars/war.data'
import {getTimeValue} from '$services/domain/timeFactor/timeValueService'

export const computeCost = (expenses: Expense[]):number => {
  return expenses.reduce((total,c)=> total + getTimeValue(c.date, c.amount), 0)
}

export const computeWarCosts = () => {
  for (let war of warData) {
    if (!war.cost && war.expenses) {
      war.cost = computeCost(war.expenses)
      console.log(`${war.label} ${war.cost}`)
    }
  }
}

export const computeTotalWarCosts = ():number => {
  const total = warData.reduce((t:number, w)=> t + ((w.label === 'total') ? 0 : w.cost), 0)
  console.log(`total ${total}`)
  return total || 0
}

export const computeOtherWarCosts = ():number => {
  warData.find(w=> w.label === 'total')?.cost
  const other = warData.find(w=> w.label === 'total')!.cost - computeTotalWarCosts()
  console.log(`other ${other}`)
  return other
}

computeWarCosts()
computeTotalWarCosts()
computeOtherWarCosts()