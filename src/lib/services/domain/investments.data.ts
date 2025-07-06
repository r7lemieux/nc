//https://www.forbes.com/advisor/taxes/taxes-federal-income-tax-bracket/

export interface Investment {
  label: string,
  cost?: number,
  sourceIds?: number[],
  startDate?: Date,
  endDate?: Date,
}
export const investmentsData: Investment[] = [
  {
    label: 'total',
    cost: 1.5e12,
  },
  {
    label: 'Silk Road',
    cost: 1e12,
    startDate: new Date(2013, 1, 1),
  },
  ]