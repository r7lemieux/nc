import {computeMonthIndex} from '$services/domain/timeFactor/index.computer'
import {timeFactors} from '$services/domain/timeFactor/timeValueFactors'

export const getTimeValueFactor = (date:string):number => {
  const index = computeMonthIndex(date)
  const factor = timeFactors[index] || 1
  return factor
}

export const getTimeValue= (date:string, value:number)=> getTimeValueFactor(date) * value
