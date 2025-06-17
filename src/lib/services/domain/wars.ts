//https://www.forbes.com/advisor/taxes/taxes-federal-income-tax-bracket/
export interface Contribution {
  date: string,
  amount: number
}
export interface War {
  label: string,
  cost?: number,
  usDeaths?: number,
  usWounded?: number,
  directKills?: number
  foreignDeaths?: number,
  refugies: number,
  method?: string,
  sourceIds?: number[],
  startDate?: Date,
  endDate?: Date,
  note: string,
  calculNote: string
  contributions: Contribution[]
}
export const wars = [
  {
    label: 'total',
    cost: 9.120e12,
    usDeaths: 7000,
    usWounded: 52e3,
    sourceIds: [19],
    contributions: [
     {date: "2019-10-30", amount: 6.409e12},
    ]
  },
  {
    label: 'Irak War',
    cost: 4.014e12,
    usDeaths: 4400,
    directKills: 16e3, // src 1
    foreignDeaths: 250e3, // src 1
    startDate: new Date('2003-03-20'),
    endDate: new Date('2011-12-14'),
    sourceIds: [19],
    note: '25 million mines remain',
    contributions: [
      {date: '2011-12-14', amount: 2.12e12}
    ]
  },
  {
    label: 'Afghan War',
    cost: 3.001e12,
    debit: {
      date: '2022-08',
      cost: 2.3e12
    },
    contributions: [
      {date: '2021-07-30', amount: 2.3e12 },
    ],
    breakdown: {
      "DOD OCO - Department of Defence Overseas Contingency Operations":1055e9,
      "State Department OCO - Overseas Contingency Operations":60e9,
      "vetaran care": 233e9,
      "increase to base": 433e9,
      "interest": 532e9
    },
    method: "2.313 total in 2022. NPR is ",
    sourceIds: [13],
    usDeaths: 2400,
    usWounded: 20e3,
    foreighDeaths: 100e3, // src 1,
    foreighDisplaced: 10e6,
    refugies: 10e6, // src 1
    startDate: new Date('2005-10'),
    endDate: new Date('2021-08-30'),
    note: 'Longest war in American history'
  },
  {
    label: 'Ukraine War',
    cost: 671.2e9,
    cost0: 113e9,
    usDeaths: 0,
    usWounded: 0,
    contributions: [
      {"date": "2022-02-24", "amount": 12.4e9},
      {"date": "2022-12-31", "amount": 113e9},
      {"date": "2023-08-14", "amount": 135e9},
      {"date": "2024-04-30", "amount": 175e9},
      {"date": "2024-12-31", "amount": 182.8e9}
    ],
  },
  {
    label: 'war on Terror',
    cost: 0.8e12,
    usDeaths: 80
  },
  {
    label: 'Yemeni Civil War',
    cost: 5.4e9,
    usDeaths: 2400,
    usWounded: 20000,
    foreighKidsDeaths: 11000,
    foreighDisplaced: 10e6
  },
  {
    label: 'Others',
    cost: 628.4e9,
  },
  {
    label: 'Iran',
    cost: 0,
  },
  // {
  //   name: 'Syrian Civil War',
  //   startDate: new Date('2012'),
  //
  //   foreignDeaths: 350e3,
  //   refugies: 12e6
  // }
]
