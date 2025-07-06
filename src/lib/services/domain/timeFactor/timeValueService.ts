import { computeMonthIndex, computeYearIndex } from '$services/domain/timeFactor/index.computer'
import { timeFactors } from '$services/domain/timeFactor/timeValueFactors.data'

export const getTimeValueFactor = (date: string): number => {
  const index = computeMonthIndex(date)
  const factor = timeFactors[index] || 1
  return factor
}

export const getTimeValue = (date: string, value: number) => getTimeValueFactor(date) * value
export const getTimeValueForYear = (year: number, value: number) => {
  const yearIndex = computeYearIndex(year)
  const timeFactor = (timeFactors[computeYearIndex(year)] || 0) * value
  return timeFactor
}
