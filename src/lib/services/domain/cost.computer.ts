import  {type Contribution, wars} from '$services/domain/wars'
import {getTimeValue} from '$services/domain/timeFactor/timeValueService'

export const computeCost = (contributions: Contribution[]):number => {
  return contributions.reduce((total,c)=> total + getTimeValue(c.date, c.amount), 0)
}

export const computeWarCosts = () => {
  for (let war of wars) {
    if (!war.cost && war.contributions) {
      war.cost = computeCost(war.contributions)
      console.log(`${war.label} ${war.cost}`)
    }
  }
}

export const computeTotalWarCosts = ():number => {
  const total = wars.reduce((t:number,w)=> t+((w.label==='total')?0:w.cost), 0)
  console.log(`total ${total}`)
  return total || 0
}

export const computeOtherWarCosts = ():number => {
  wars.find(w=>w.label === 'total')?.cost
  const other = wars.find(w=>w.label === 'total')!.cost - computeTotalWarCosts()
  console.log(`other ${other}`)
  return other
}


computeWarCosts()
computeTotalWarCosts()
computeOtherWarCosts()