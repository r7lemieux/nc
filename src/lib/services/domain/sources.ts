export interface Source {
  id: number
  name: string,
  author?: string,
  org?: string,
  url: string,
  date?: Date,
  scoop?: string,
}

export const sources: Source[] = [
  {
    id: 1,
    name: 'A brief history of wars launched by U.S. after World War II',
    org: 'Xinhua',
    author: 'huaxia',
    url: 'https://english.news.cn/20220902/735703a45cfd458791179d4c0a80e727/c.html',
    date: new Date(Date.parse('2022-09-02 15:20:15'))
  }, {
    id: 2,
    name: 'Costs of Major US Wars',
    org: 'Congressional Research Service Report for Congress',
    author: 'Stephen Daggett',
    url: 'https://www.history.navy.mil/research/library/online-reading-room/title-list-alphabetically/c/costs-major-us-wars.html',
    date: new Date(Date.parse('2008-07-24'))
  }, {
    id: 3,
    name: 'Foreign interventions by the United States',
    org: 'Wikipedia',
    author: 'Wikipedia',
    url: 'https://en.wikipedia.org/wiki/Foreign_interventions_by_the_United_States',
    date: new Date(Date.parse('2025-05-30'))
  }, {
    id: 4,
    name: '8 Deadliest Wars of the 21st Century',
    org: 'Britannica',
    author: 'Michael Ray',
    url: 'https://www.britannica.com/list/8-deadliest-wars-of-the-21st-century',
    date: new Date(Date.parse('2023-04-18'))
  }, {
    id: 5,
    name: 'The US is presently involved in 15 ‘shadow wars’: Here’s where and why',
    org: 'KX News',
    author: 'Stacker',
    url: 'https://www.kxnet.com/news/top-stories/the-us-is-presently-involved-in-15-shadow-wars-heres-where-and-why/',
    date: new Date(Date.parse('2023-07-30'))
  }, {
    id: 6,
    name: 'The Cost of U.S. Wars Then and Now',
    org: 'Norwich University',
    url: 'https://online.norwich.edu/online/about/resource-library/cost-us-wars-then-and-now',
    date: new Date(Date.parse('2014'))
  }, {
    id: 7,
    name: 'Dates and Names of Conflicts',
    org: 'US Department of Veterans Affairs',
    url: 'https://www.va.gov/vetsinworkplace/docs/em_datesnames.asp',
    date: new Date(Date.parse('2024-07-07'))
  }, {
    id: 8,
    name: 'Number of military fatalities in all major wars involving the United States from 1775 to 2024',
    org: 'Statista',
    url: 'https://www.statista.com/statistics/1009819/total-us-military-fatalities-in-american-wars-1775-present/',
    date: new Date(Date.parse('2024'))
  }, {
    id: 9,
    name: 'History of American Wars',
    org: 'Gettysburg Flag Works',
    url: 'https://www.gettysburgflag.com/history-of-american-wars',
    date: new Date(Date.parse('2021'))
  }, {
    id: 10,
    name: 'U.S. Launched 251 Military Interventions Since 1991, and 469 Since 1798',
    org: 'Toward Freedom',
    author: 'Benjamin Norton',
    url: 'https://towardfreedom.org/story/archives/americas/u-s-launched-251-military-interventions-since-1991-and-469-since-1798/',
    date: new Date(Date.parse('2022-09-14'))
  }, {
    id: 11,
    name: 'U.S. Launched 251 Military Interventions Since 1991, and 469 Since 1798',
    org: 'Toward Freedom',
    author: 'Benjamin Norton',
    url: 'https://towardfreedom.org/story/archives/americas/u-s-launched-251-military-interventions-since-1991-and-469-since-1798/',
    date: new Date(Date.parse('2022-09-14'))
  }, {
    id: 12,
    name: 'List of wars involving the United States',
    org: 'Wikipedia',
    author: 'Wikipedia',
    url: 'https://en.wikipedia.org/w/index.php?title=List_of_wars_involving_the_United_States&action=history',
    date: new Date(Date.parse('2025-05-30'))
  }, {
    id: 13,
    name: 'Human and Budgetary Costs to Date of the U.S. War in Afghanistan, 2001-2022',
    org: 'Watson Institute for International & Public Affairs',
    author: 'Watson Institute for International & Public Affairs',
    url: 'https://watson.brown.edu/costsofwar/figures/2021/human-and-budgetary-costs-date-us-war-afghanistan-2001-2022',
    date: new Date(Date.parse('2021-08'))
  }, {
    id: 14,
    name: 'List of wars involving the United States',
    org: 'Wikipedia',
    author: 'Wikipedia',
    url: 'https://en.wikipedia.org/w/index.php?title=List_of_wars_involving_the_United_States&action=history',
    date: new Date(Date.parse('2025-05-30'))
  }, {
    id: 15,
    name: 'Afghanistan Papers',
    org: 'Wikipedia',
    author: 'Wikipedia',
    url: 'https://en.wikipedia.org/wiki/Afghanistan_Papers',
    date: new Date(Date.parse('2019-12-09')),
    scoop: 'Military officials hide that the war was unwinnable'
  }, {
    id: 16,
    name: 'Consumer Price Index',
    org: 'Federal Government, Bureau of Labor Statistics',
    author: 'Federal Government, Bureau of Labor Statistics',
    url: 'https://www.bls.gov/cpi/',
    date: new Date(Date.parse('2025-06')),
    scoop: 'CPI Consumer Price Index to adjust past costs to today\'s Dollars'
  }, {
  id: 17,
    name: 'US Debt',
    org: 'Federal Government, Treasury',
    author: 'Federal Government',
    url: 'https://fiscaldata.treasury.gov/datasets/interest-rates-treasury-securities/interest-rates-treasury-securities',
    date: new Date(Date.parse('2025-06')),
    scoop: 'Interest on past debt'
  }, {
    id: 17,
    name: 'National debt of the United States',
    org: 'Wikipedia',
    author: 'Wikipedia',
    url: 'https://en.wikipedia.org/wiki/National_debt_of_the_United_States?utm_source=chatgpt.com#Interest_paid',
    date: new Date(Date.parse('2025-06')),
    scoop: 'Interest on past debt'
  },
  {
    id: 18,
    name: 'Defund war, invest in our communities',
    org: 'Code Pink',
    author: 'Code Pink',
    url: 'https://www.codepink.org/defundwar'
  },
  {
    id: 19,
    name: 'Estimate of the U.S. War on Terror Spending, 2001-2020',
    org: 'Watson Institute for International & Public Affairs',
    author: 'Watson Institute for International & Public Affairs',
    url: 'https://watson.brown.edu/costsofwar/figures/2019/budgetary-costs-post-911-wars-through-fy2020-64-trillion',
    date: new Date(Date.parse('2019-11'))
  },
{
  id: 19,
  name: 'War is a waste',
  org: 'CodePink',
  author: 'Sharon Miller',
  url: 'https://www.codepink.org/war_is_a_waste',
  date: new Date(Date.parse('2011-09-06'))
},
  {
    id:20,
    name: 'Interest Expense on the Public Debt Outstanding',
    org: 'US Treasury',
    author: 'US Treasury',
    url: 'https://fiscaldata.treasury.gov/datasets/interest-expense-debt-outstanding/interest-expense-on-the-public-debt-outstanding',
    date: new Date(Date.parse('2025-05-31'))
  },
  {
    id:21,
    name: 'Debt to the Penny',
    org: 'US Treasury',
    author: 'US Treasury',
    url: 'https://fiscaldata.treasury.gov/datasets/debt-to-the-penny/debt-to-the-penny',
    date: new Date(Date.parse('2025-05-31'))
  },
  {
    id:22,
    name: 'Interest Expense and Average Interest Rates on the National Debt FY 2010 – FYTD 2025',
    org: 'US Treasury',
    author: 'US Treasury',
    url: ' https://fiscaldata.treasury.gov/interest-expense-avg-interest-rates',
    date: new Date(Date.parse('2025-05-31'))
  },

  // UN

  // report released in March 2021 by Code Pink, a U.S. anti-war group, the United States and its allies have consistently bombed other countries over the past 20 years, dropping an average of more than 40 bombs a day.

]
