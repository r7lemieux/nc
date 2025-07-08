//https://www.forbes.com/advisor/taxes/taxes-federal-income-tax-bracket/
export interface Expense {
  date: string
  amount: number
}
export interface War {
  label: string
  cost: number
  usDeaths?: number
  directKills?: number
  totalDeaths?: number
  journalistsKilled?: number
  childrenKilled?: number
  childrenDeaths?: number
  humanitarianKilled?: number
  displaced?: number
  refugees?: number
  population?: number
  costLink?: number[]
  usDeathsLink?: number[]
  directKillsLink?: number[]
  totalDeathsLink?: number[]
  journalistsKilledLink?: number[]
  childrenKilledLink?: number[]
  childrenDeathsLink?: number[]
  humanitarianKilledLink?: number[]
  displacedLink?: number[]
  refugeesLink?: number[]
  populationLink?: number[]
  method?: string
  sourceIds?: number[]
  startDate: Date
  endDate?: Date
  note?: string
  calculationNote?: string
  breakdown?: any
  expenses?: Expense[]
  countries?: string[]
}

export const fieldsWithLink = [
  'cost',
  'usDeaths',
  'directKills',
  'totalDeaths',
  'journalistsKilled',
  'childrenDeaths',
  'humanitarianKilled',
  'displaced',
  'refugees'
]
