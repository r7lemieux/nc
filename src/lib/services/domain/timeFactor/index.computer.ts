export const computeDayIndex = (date: string): number => {
  const year = parseInt(date.substring(0, 4)) - 2000
  const month = parseInt(date.substring(5, 7))
  const day = parseInt(date.substring(8, 10))
  return year * 12 * 31 + (month - 1) * 31 + (day - 1)
}
export const computeMonthIndex = (date: string): number => {
  const year = parseInt(date.substring(0, 4)) - 2000
  const month = parseInt(date.substring(5, 7))
  return year * 12 + month - 1
}
