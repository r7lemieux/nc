import type { War } from '$services/domain/wars/war'

export const warData: War[] = [
  {
    label: 'total',
    cost: 9.12e12,
    usDeaths: 15263,  // src 3
    journalistsKilled: 680, //src 3
    startDate: new Date('2000-01-02'),
    costLink: [19],
    // expenses: [{ date: '2019-10-30', amount: 6.409e12 }]
  },
  // IRAQ
  {
    label: 'Iraq War',
    cost: 4.014e12,
    usDeaths: 8264, // 4599 military,
    directKills: 298e3, // src 1 Iraq Body Count Project 190-210
    journalistsKilled: 282,
    humanitarianKilled: 64,
    totalDeaths: 461e3, // src 36
    displaced: 4.4e6, // 9.2e6,
    refugees: 2.3e6, // only neighboring countries
    childrenDeaths: 3119,
    usDeathsLink: [3],
    directKillsLink: [3],
    totalDeathsLink: [36, 4],
    journalistsKilledLink: [3],
    childrenDeathsLink: [32],
    humanitarianKilledLink: [3],
    displacedLink: [39],
    refugeesLink: [39],
    startDate: new Date('2003-03-20'),
    endDate: new Date('2011-12-14'),
    sourceIds: [19],
    note: '25 million mines remain',
    expenses: [{ date: '2011-12-14', amount: 2.12e12 }]
  },
  // AFGHAN
  {
    label: 'Afghan War', // Afghan + Pakistan
    cost: 3.001e12,
    expenses: [{ date: '2021-07-30', amount: 2.3e12 }],
    breakdown: {
      'DOD OCO - Department of Defence Overseas Contingency Operations': 1055e9,
      'State Department OCO - Overseas Contingency Operations': 60e9,
      'vetaran care': 233e9,
      'increase to base': 433e9,
      interest: 532e9
    },
    method: '2.313 total in 2021. ',
    sourceIds: [13],
    usDeaths: 6337, // 2324 military
    directKills: 243e3,
    childrenDeaths: 21e3,  // 3k * 7 years
    journalistsKilled: 161, // Afghan + Pakistan
    humanitarianKilled: 551, // Afghan + Pakistan
    totalDeaths: 360e3,
    displaced: 5.9e6,
    refugees: 10e6,
    costLink:[13, ],
    usDeathsLink: [3],
    directKillsLink: [3],
    totalDeathsLink: [11, 13],
    journalistsKilledLink: [3],
    childrenDeathsLink: [56],
    humanitarianKilledLink: [3],
    displacedLink: [40],
    refugeesLink: [1],
    startDate: new Date('2005-10'),
    endDate: new Date('2021-08-30'),
    note: 'Longest war in American history'
  },
  // SYRIA
  {
    label: 'Syrian Civil War',
    cost: 22e9,
    startDate: new Date('2014-08-24'),
    endDate: new Date('2024-12-08'),
    directKills: 580e3,
    usDeaths: 19,
    totalDeaths: 656493,
    journalistsKilled: 75,
    humanitarianKilled: 227,
    childrenDeaths: 26282,
    displaced: 13e6,
    refugees: 6.7e6, // 5.6 https://watson.brown.edu/costsofwar/files/cow/imce/papers/2023/Indirect%20Deaths.pdf
    usDeathsLink: [3],
    directKillsLink: [49, 3],
    totalDeathsLink: [49],
    journalistsKilledLink: [3],
    childrenDeathsLink: [3, 49],
    humanitarianKilledLink: [3],
    displacedLink: [31, 49, 1],
    refugeesLink: [31, 49],
  },
  // UKRAINE
  {
    label: 'Ukraine War',
    cost: 671.2e9,
    usDeaths: 0,
    directKills: 330e3,// 60-100 Ukrainians + 250k Russians
    journalistsKilled: 20,
    childrenDeaths: 587,
    humanitarianKilled: 23,
    totalDeaths: 363e3, // 330k + 33k
    displaced: 11e6,
    refugees: 6.74e6,
    usDeathsLink: [ ],
    directKillsLink: [51],
    totalDeathsLink: [54, 51],
    journalistsKilledLink: [52],
    childrenDeathsLink: [2076],  // ony the invasion https://www.statista.com/statistics/1293492/ukraine-war-casualties/
    humanitarianKilledLink: [53],
    displacedLink: [50],
    refugeesLink: [50],
    startDate: new Date('2014-10'),
    expenses: [
      { date: '2022-02-24', amount: 12.4e9 },
      { date: '2022-12-31', amount: 113e9 },
      { date: '2023-08-14', amount: 135e9 },
      { date: '2024-04-30', amount: 175e9 },
      { date: '2024-12-31', amount: 182.8e9 }
    ]
  },
  // OTHER
  {
    label: 'Other wars on terror',
    cost: 0.8e12,
    usDeaths: 641,
    directKills: 778,
    journalistsKilled: 129,
    humanitarianKilled: 8,
    usDeathsLink: [3],
    directKillsLink: [3],
    journalistsKilledLink: [3],
    humanitarianKilledLink: [3],
    startDate: new Date('2001-09-11')
  },
  {
    label: 'Yemeni Civil War',
    cost: 5.4e9,
    usDeaths: 2,
    directKills: 112e3,
    journalistsKilled: 33,
    humanitarianKilled: 46,
    totalDeaths: 377e3, // src 37
    childrenDeaths: 85e3,
    displaced: 7.4e6, // [31] 3.6 https://watson.brown.edu/costsofwar/files/cow/imce/papers/2023/Indirect%20Deaths.pdf
    refugees: 6e6, // [31]
    costLink: [5],
    usDeathsLink: [3],
    directKillsLink: [3],
    totalDeathsLink: [],
    journalistsKilledLink: [3],
    childrenDeathsLink: [],
    humanitarianKilledLink: [3],
    displacedLink: [],
    refugeesLink: [],
    startDate: new Date('2009-12')
  },
  {
    label: 'Israel',
    startDate: new Date('1948-05-14'),
    cost: 91.69e9,
    expenses: [
      { date: '2000', amount: 3120000000 },
      { date: '2001', amount: 2880000000 },
      { date: '2002', amount: 2850000000 },
      { date: '2003', amount: 3860000000 },
      { date: '2004', amount: 2690000000 },
      { date: '2005', amount: 2630000000 },
      { date: '2006', amount: 2560000000 },
      { date: '2007', amount: 2500000000 },
      { date: '2008', amount: 2550000000 },
      { date: '2009', amount: 2550000000 },
      { date: '2010', amount: 2770000000 },
      { date: '2011', amount: 3000000000 },
      { date: '2012', amount: 3090000000 },
      { date: '2013', amount: 3090000000 },
      { date: '2014', amount: 3090000000 },
      { date: '2015', amount: 3090000000 },
      { date: '2016', amount: 3090000000 },
      { date: '2017', amount: 3180000000 },
      { date: '2018', amount: 3180000000 },
      { date: '2019', amount: 3300000000 },
      { date: '2020', amount: 3300000000 },
      { date: '2021', amount: 3310000000 },
      { date: '2022', amount: 4310000000 },
      { date: '2023', amount: 3800000000 },
      { date: '2024', amount: 17900000000 },
      { date: '2025', amount: 0 }
    ],
    usDeaths: 3 + 0 + 8 + 54,
    directKills: 0,
    totalDeaths: 0,
    journalistsKilled: 0,
    humanitarianKilled: 0,
    childrenDeaths: 0,
    displaced: 0,
    refugees: 0,// + Israel killed 11, 3 single citizenship, Palestine kiiled 54 all Israel-US citizens
    costLink: [27, 28, 29, 30],
    usDeathsLink: [ ],
    directKillsLink: [ ],
    totalDeathsLink: [ ],
    journalistsKilledLink: [ ],
    childrenDeathsLink: [ ],
    humanitarianKilledLink: [ ],
    displacedLink: [ ],
    refugeesLink: [ ],
  },
  // LIBYA
  // {
  //   label: 'Libya Regiame Changer',
  //   cost: 0,
  //   usDeaths: 0,
  //   directKills: 0,
  //   journalistsKilled: 0,
  //   childrenDeaths: 0,
  //   humanitarianKilled: 0,
  //   totalDeaths: 0, // estimate
  //   displaced: 1e6,
  //   refugees: 0,
  //   usDeathsLink: [ ],
  //   directKillsLink: [],
  //   totalDeathsLink: [],
  //   journalistsKilledLink: [],
  //   childrenDeathsLink: [ ],
  //   humanitarianKilledLink: [],
  //   displacedLink: [], // https://watson.brown.edu/costsofwar/files/cow/imce/papers/2023/Indirect%20Deaths.pdf
  //   refugeesLink: [ ],
  //   startDate: new Date('2014-10'),
  // },
  // {
  //   label: 'Iran',
  //   startDate: new Date('2025-06-30'),
  //   cost: 0
  // }
]
