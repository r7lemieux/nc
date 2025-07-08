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
  },
  {
    id: 2,
    name: 'Human Toll Including Indirect Deaths of Post-9/11 Wars: 4.5-4.7 Million',
    org: 'Watson Institute for International & Public Affairs',
    author: 'Watson Institute for International & Public Affairs',
    url: 'https://watson.brown.edu/costsofwar/papers/2023/IndirectDeaths',
    date: new Date(Date.parse('2025'))
  },
  {
    id: 3,
    name: 'Human Cost of Post-9/11 Wars: Direct War Deaths in Major War Zones, Afghanistan & Pakistan (Oct. 2001 – Aug. 2021); Iraq (March 2003 – March 2023); Syria (Sept. 2014 – March 2023); Yemen (Oct. 2002-Aug. 2021) and Other Post-9/11 War Zones',
    org: 'Watson Institute for International & Public Affairs',
    author: 'Watson Institute for International & Public Affairs',
    url: 'https://watson.brown.edu/costsofwar/figures/2021/WarDeathToll',
    date: new Date(Date.parse('2023-10-12'))
  },
  {
    id: 4,
    name: '8 Deadliest Wars of the 21st Century',
    org: 'Britannica',
    author: 'Michael Ray',
    url: 'https://www.britannica.com/list/8-deadliest-wars-of-the-21st-century',
    date: new Date(Date.parse('2023-04-18'))
  },
  {
    id: 5,
    name: 'The US is presently involved in 15 ‘shadow wars’: Here’s where and why',
    org: 'KX News',
    author: 'Stacker',
    url: 'https://www.kxnet.com/news/top-stories/the-us-is-presently-involved-in-15-shadow-wars-heres-where-and-why/',
    date: new Date(Date.parse('2023-07-30'))
  },
  {
    id: 6, // too high level
    name: 'The Cost of U.S. Wars Then and Now',
    org: 'Norwich University',
    url: 'https://online.norwich.edu/online/about/resource-library/cost-us-wars-then-and-now',
    date: new Date(Date.parse('2014'))
  },
  {
    id: 7,
    name: 'War is a waste',
    org: 'CodePink',
    author: 'Sharon Miller',
    url: 'https://www.codepink.org/war_is_a_waste',
    date: new Date(Date.parse('2011-09-06'))
  },
  // { // Nothing at all
  //   id: 7,
  //   name: 'Dates and Names of Conflicts',
  //   org: 'US Department of Veterans Affairs',
  //   url: 'https://www.va.gov/vetsinworkplace/docs/em_datesnames.asp',
  //   date: new Date(Date.parse('2024-07-07'))
  // },
  {
    // prior to 2000
    id: 8,
    name: 'Number of military fatalities in all major wars involving the United States from 1775 to 2024',
    org: 'Statista',
    url: 'https://www.statista.com/statistics/1009819/total-us-military-fatalities-in-american-wars-1775-present/',
    date: new Date(Date.parse('2024'))
  },
  {
    id: 9, // focused on military. not used
    name: 'History of American Wars',
    org: 'Gettysburg Flag Works',
    url: 'https://www.gettysburgflag.com/history-of-american-wars',
    date: new Date(Date.parse('2021'))
  },
  {
    id: 10, // not usefull
    name: 'U.S. Launched 251 Military Interventions Since 1991, and 469 Since 1798',
    org: 'Toward Freedom',
    author: 'Benjamin Norton',
    url: 'https://towardfreedom.org/story/archives/americas/u-s-launched-251-military-interventions-since-1991-and-469-since-1798/',
    date: new Date(Date.parse('2022-09-14'))
  },
  {
    id: 11,
    name: 'Civilian casualties in the war in Afghanistan (2001–2021)',
    org: 'Wikipedia',
    author: 'Wikipedia',
    url: 'https://en.wikipedia.org/wiki/Civilian_casualties_in_the_war_in_Afghanistan_(2001%E2%80%932021)',
    date: new Date(Date.parse('2025'))
  },
  {
    id: 12,
    name: 'List of wars involving the United States',
    org: 'Wikipedia',
    author: 'Wikipedia',
    url: 'https://en.wikipedia.org/wiki/List_of_wars_involving_the_United_States_in_the_21st_century',
    date: new Date(Date.parse('2025-05-30'))
  },
  {
    id: 13,
    name: 'Human and Budgetary Costs to Date of the U.S. War in Afghanistan, 2001-2022',
    org: 'Watson Institute for International & Public Affairs',
    author: 'Watson Institute for International & Public Affairs',
    url: 'https://watson.brown.edu/costsofwar/figures/2021/human-and-budgetary-costs-date-us-war-afghanistan-2001-2022',
    date: new Date(Date.parse('2021-08'))
  },
  {
    id: 14,
    name: 'List of wars involving the United States',
    org: 'Wikipedia',
    author: 'Wikipedia',
    url: 'https://en.wikipedia.org/w/index.php?title=List_of_wars_involving_the_United_States&action=history',
    date: new Date(Date.parse('2025-05-30'))
  },
  {
    id: 15, // corruption
    name: 'Afghanistan Papers',
    org: 'Wikipedia',
    author: 'Wikipedia',
    url: 'https://en.wikipedia.org/wiki/Afghanistan_Papers',
    date: new Date(Date.parse('2019-12-09')),
    scoop: 'Military officials hide that the war was unwinnable'
  },
  {
    id: 16,
    name: 'Consumer Price Index',
    org: 'Federal Government, Bureau of Labor Statistics',
    author: 'Federal Government, Bureau of Labor Statistics',
    url: 'https://www.bls.gov/cpi/',
    date: new Date(Date.parse('2025-06')),
    scoop: "CPI Consumer Price Index to adjust past costs to today's Dollars"
  },
  {
    id: 17, // interest rates on debt
    name: 'Average Interest Rates on U.S. Treasury Securities',
    org: 'Federal Government, Treasury',
    author: 'Federal Government',
    url: 'https://fiscaldata.treasury.gov/datasets/average-interest-rates-treasury-securities/average-interest-rates-on-u-s-treasury-securities',
    date: new Date(Date.parse('2025-06')),
    scoop: 'Interest on past debt'
  },
  {
    id: 18, // interest rates on debt
    name: 'National debt of the United States',
    org: 'Wikipedia',
    author: 'Wikipedia',
    url: 'https://en.wikipedia.org/wiki/National_debt_of_the_United_States?utm_source=chatgpt.com#Interest_paid',
    date: new Date(Date.parse('2025-06')),
    scoop: 'Interest on past debt'
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
    id: 20,
    name: 'Interest Expense on the Public Debt Outstanding',
    org: 'US Treasury',
    author: 'US Treasury',
    url: 'https://fiscaldata.treasury.gov/datasets/interest-expense-debt-outstanding/interest-expense-on-the-public-debt-outstanding',
    date: new Date(Date.parse('2025-05-31'))
  },
  {
    id: 21,
    name: 'Debt to the Penny',
    org: 'US Treasury',
    author: 'US Treasury',
    url: 'https://fiscaldata.treasury.gov/datasets/debt-to-the-penny/debt-to-the-penny',
    date: new Date(Date.parse('2025-05-31'))
  },
  {
    id: 22,
    name: 'Interest Expense and Average Interest Rates on the National Debt FY 2010 – FYTD 2025',
    org: 'US Treasury',
    author: 'US Treasury',
    url: 'https://fiscaldata.treasury.gov/interest-expense-avg-interest-rates',
    date: new Date(Date.parse('2025-05-31'))
  },
  {
    id: 23,
    name: 'How China’s Belt and Road Initiative is faring',
    org: 'GIS Reports',
    author: 'Frank Umbach',
    url: 'https://www.gisreportsonline.com/r/belt-road-initiative/',
    date: new Date(Date.parse('2022-04-08'))
  },
  {
    id: 24,
    name: 'History & Overview of U.S. Foreign Aid to Israel',
    org: 'Jewish Virtual Library',
    author: 'Jewish Virtual Library',
    url: 'https://www.jewishvirtuallibrary.org/history-and-overview-of-u-s-foreign-aid-to-israel',
    date: new Date(Date.parse('2023'))
  },
  {
    id: 25,
    name: 'U.S. Foreign Aid to Israel: Total Aid',
    org: 'Jewish Virtual Library',
    author: 'Jewish Virtual Library',
    url: 'https://www.jewishvirtuallibrary.org/total-u-s-foreign-aid-to-israel-1949-present',
    date: new Date(Date.parse('2023'))
  },
  {
    id: 26,
    name: 'U.S. Security Cooperation with Israel',
    org: 'U.S. Department of State',
    author: 'U.S. Department of State',
    url: 'https://www.state.gov/u-s-security-cooperation-with-israel/',
    date: new Date(Date.parse('2025-04-25'))
  },
  {
    id: 27,
    name: 'How Much Aid Does the U.S. Give to Israel?',
    org: 'US News',
    author: 'Julia Nikhinson',
    url: 'https://www.usnews.com/news/best-countries/articles/2023-10-10/how-much-aid-does-the-u-s-give-to-israel',
    date: new Date(Date.parse('2023-10-10'))
  },
  {
    id: 28,
    name: 'U.S. Aid to Israel in Four Charts',
    org: 'Council on Foreign Relations',
    author: 'Johnathan Master and Will Merrow',
    url: 'https://www.cfr.org/article/us-aid-israel-four-charts',
    date: new Date(Date.parse('2024-11-13'))
  },
  {
    id: 29,
    name: 'US spends a record $17.9 billion on military aid to Israel since last Oct. 7',
    org: 'AP',
    author: 'Ellen Knickmeyer',
    url: 'https://apnews.com/article/israel-hamas-war-us-military-spending-8e6e5033f7a1334bf6e35f86e7040e14',
    date: new Date(Date.parse('2024-10-07'))
  },
  {
    id: 30,
    name: 'United States Spending on Israel’s Military Operations and Related U.S. Operations in the Region, October 7, 2023-September 30, 2024',
    org: 'William Hartung',
    author: 'Watson Institute for International & Public Affairs',
    url: 'https://watson.brown.edu/costsofwar/papers/2024/USspendingIsrael',
    date: new Date(Date.parse('2024-10-07'))
  },
  {
    id: 31,
    name: 'Syria Refugee Crisis Explained',
    org: 'UNHCR, The United Nation Refugee Agency',
    author: 'UNHCR, The United Nation Refugee Agency',
    url: 'https://www.unrefugees.org/news/syria-refugee-crisis-explained/',
    date: new Date(Date.parse('2025-03-13'))
  },
  {
    id: 32,
    name: 'More than 9,000 children have been killed or maimed in Iraq since 2008',
    org: 'UNICEF',
    author: 'UNICEF',
    url: 'https://www.unicef.org/iraq/press-releases/more-9000-children-have-been-killed-or-maimed-%E2%80%AFiraq-2008',
    date: new Date(Date.parse('2023-06-06'))
  },
  // {
  //   id: 32,
  //   name: 'Ukraine: Over 6 Million Refugees Spread Across Europe',
  //   org: 'United Nations',
  //   author: 'United Nations',
  //   url: 'https://unric.org/en/ukraine-over-6-million-refugees-spread-across-europe/',
  //   date: new Date(Date.parse('2024-11-09'))
  // },
  {
    id: 33,
    name: 'Refugees in Iraq: An Overview',
    org: 'Impact International',
    author: 'Impact International',
    url: 'https://impactpolicies.org/news/267/refugees-in-iraq-an-overview',
    date: new Date(Date.parse('2022-04-29'))
  },
  {
    id: 34,
    name: 'Syrian Revolution 13 years on',
    org: 'Syrian Observatory for Human Rights',
    author: 'Syrian Observatory for Human Rights',
    url: 'https://www.syriahr.com/en/328044/',
    date: new Date(Date.parse('2024-03-15'))
  },
  {
    id: 35,
    name: 'UN humanitarian office puts Yemen war dead at 233,000',
    org: 'United Nation, Department of Operational Support',
    author: 'United Nation, Department of Operational Support',
    url: 'https://operationalsupport.un.org/en/un-humanitarian-office-puts-yemen-war-dead-233000-mostly-indirect-causes',
    date: new Date(Date.parse('2020-12-10'))
  },
  {
    id: 36,
    name: 'Study: Nearly 500,000 perished in Iraq war',
    org: 'University of Washington',
    author: 'UW Health Sciences and UW Medicine',
    url: 'https://www.washington.edu/news/2013/10/15/study-nearly-500000-perished-in-iraq-war/#:~:text=The%20researchers%20found%2C%20with%2095,clean%20water%2C%20nutrition%20and%20transportation.',
    date: new Date(Date.parse('2013-10-15'))
  },
  {
    id: 37,
    name: 'Assessing the impact of war in Yemen',
    org: 'United Nation Development Program',
    author: 'UNDP',
    url: 'https://www.undp.org/sites/g/files/zskgke326/files/migration/ye/Impact-of-War-Report-3---QR.pdf',
    date: new Date(Date.parse('2023-11-23'))
  },
  {
    id: 38,
    name: 'Statistics on Displaced Iraqis around the World',
    org: 'UNHCR, The United Nation Development Program',
    author: 'UNHCR, The United Nation Development Program',
    url: 'https://web.archive.org/web/20130602155933/http://www.unhcr.org/461f7cb92.pdf',
    date: new Date(Date.parse('2007-04'))
  },
  {
    id: 39,
    name: "'We are still displaced,' 20 years after the Iraq war'",
    org: 'The Nahrein Network',
    author: 'The Nahrein Network',
    url: 'https://www.ucl.ac.uk/nahrein/news/2023/apr/we-are-still-displaced-20-years-after-iraq-war',
    date: new Date(Date.parse('2023-5-03'))
  },
  {
    id: 40,
    name: 'Civilians Killed & Displaced',
    org: 'Watson Institute for International & Public Affairs',
    author: 'Watson Institute for International & Public Affairs',
    url: 'https://watson.brown.edu/costsofwar/costs/human/civilians',
    date: new Date(Date.parse('2025-06'))
  },
  {
    id: 49,
    name: 'Casualties of the Syrian civil war',
    org: 'Wikipedia',
    author: 'Wikipedia',
    url: 'https://en.wikipedia.org/wiki/Casualties_of_the_Syrian_civil_war',
    date: new Date(Date.parse('2025-03'))
  },
  {
    id: 50,
    name: 'Ukraine: Over 6 Million Refugees Spread Across Europe',
    org: 'United Nations',
    author: 'United Nations',
    url: 'https://unric.org/en/ukraine-over-6-million-refugees-spread-across-europe/',
    date: new Date(Date.parse('2024-11-09'))
  },
  {
    id: 51,
    name: 'Troop Casualties in Ukraine War Near 1.4 Million, Study Finds',
    org: 'The NY times',
    author: 'Helene Cooper',
    url: 'https://www.nytimes.com/2025/06/03/us/politics/russia-ukraine-troop-casualties.html',
    date: new Date(Date.parse('2025-06-04'))
  },
  {
    id: 52,
    name: '20 Journalists Killed in Ukraine War - Union',
    org: 'The Moscow Times',
    author: 'The Moscow Times',
    url: 'https://www.themoscowtimes.com/2022/04/13/20-journalists-killed-in-ukraine-war-union-a77336',
    date: new Date(Date.parse('2022-04-13'))
  },
  {
    id: 53,
    name: 'Amid Record High Killing of Humanitarian Workers, Speakers Implore Security Council to Ensure Accountability for Attacks on Personnel in Conflict Zones',
    org: 'United Nations, Security Council',
    author: 'United Nations, Security Council',
    url: 'https://press.un.org/en/2025/sc16035.doc.htm',
    date: new Date(Date.parse('2025-04-02'))
  },
  {
    id: 54,
    name: "Number of civilian casualties in Ukraine during Russia's invasion verified by OHCHR from February 24, 2022 to May 31, 2025",
    org: 'Statista',
    author: 'Statista',
    url: 'https://www.statista.com/statistics/1293492/ukraine-war-casualties/',
    date: new Date(Date.parse('2025-06-16'))
  },
  {
    id: 55,
    name: 'More than 9,000 children have been killed or maimed in Iraq since 2008',
    org: 'UNICEF',
    author: 'UNICEF',
    url: 'https://www.unicef.org/iraq/press-releases/more-9000-children-have-been-killed-or-maimed-%E2%80%AFiraq-2008',
    date: new Date(Date.parse('2023-06-06'))
  },
  {
    id: 56,
    name: '‘Disturbing spike’ in Afghan civilian casualties after peace talks began: UN report',
    org: 'United Nation',
    author: 'Fraidoon Poya',
    url: 'https://news.un.org/en/story/2021/02/1085442',
    date: new Date(Date.parse('2021-02-21'))
  },
  {
    id: 57,
    name: 'Assessing the Impact of War in Yemen: Pathways for Recovery',
    org: 'United Nations Development Program',
    author: 'United Nations Development Program',
    url: 'https://www.undp.org/publications/assessing-impact-war-yemen-pathways-recovery',
    date: new Date(Date.parse('2021-11-23'))
  },
  {
    id: 58,
    name: '2.3 Million Children Are on the Brink of Starvation in Yemen ',
    org: 'Save the Children',
    author: 'AUTHOR',
    url: 'https://www.savethechildren.org/us/charity-stories/yemen-severe-acute-malnutrition',
    date: new Date(Date.parse('2021'))
  },
  {
    id: 59,
    name: 'Country Profiles, Yemen',
    org: 'Integral Human Development',
    author: 'Integral Human Development',
    url: 'https://migrants-refugees.va/country-profile/yemen/',
    date: new Date(Date.parse('2023-04'))
  },
  {
    id: 60,
    name: 'The True Cost of the Iraq War: $3 Trillion and Beyond',
    org: 'Harvard Kennedy School',
    author: 'Linda Bilmes',
    url: 'https://www.hks.harvard.edu/publications/true-cost-iraq-war-3-trillion-and-beyond',
    date: new Date(Date.parse('2010-09-05'))
  },
  {
    id: 61,
    name: 'The Financial Legacy of Iraq and Afghanistan: How Wartime Spending Decisions Will Constrain Future National Security Budgets',
    org: 'Harvard Kennedy School',
    author: 'Linda Bilmes',
    url: 'https://www.hks.harvard.edu/publications/financial-legacy-iraq-and-afghanistan-how-wartime-spending-decisions-will-constrain',
    date: new Date(Date.parse('2013,03'))
  },
  {
    id: 62,
    name: 'Israel-Gaza war in maps and charts: Live tracker',
    org: 'Aljazeera',
    author: 'AJLabs',
    url: 'https://www.aljazeera.com/news/longform/2023/10/9/israel-hamas-war-in-maps-and-charts-live-tracker',
    date: new Date(Date.parse('2025-04-17'))
  },
  {
    id: 63,
    name: 'The 7 October Atrocities and the Annihilation of Gaza: Causes and Responsibilities',
    org: 'Journal of Genocide Research',
    author: 'Donald Bloxham',
    url: 'https://www.tandfonline.com/doi/full/10.1080/14623528.2025.2483546#d1e123',
    date: new Date(Date.parse('2025-04-03'))
  },
  {
    id: 64,
    name: 'The human toll of Israel’s war on Gaza – by the numbers',
    org: 'Aljazeera',
    author: 'AJLabs',
    url: 'https://www.aljazeera.com/news/2025/1/15/the-human-toll-of-israels-war-on-gaza-by-the-numbers',
    date: new Date(Date.parse('2025-01-15'))
  },
  {
    id: 65,
    name: 'Israel’s war on Gaza has killed 50,000 Palestinians since October 2023',
    org: 'Aljazeera',
    author: 'AJLabs',
    url: 'https://www.aljazeera.com/news/2025/3/23/israeli-offensive-in-gaza-has-killed-50000-palestinians-since-october-2023',
    date: new Date(Date.parse('2025-03-23'))
  },
  {
    id: 66,
    name: 'The Jerusalem Post',
    org: 'The Jerusalem Post',
    author: 'JPost.com staff',
    url: 'https://www.jpost.com/israel/btselem-since-2000-7454-israelis-palestinians-killed',
    date: new Date(Date.parse('2010-08-27'))
  },
  {
    id: 67,
    name: 'Journalist casualties in the Israel-Gaza war',
    org: 'Committee to Protect Journalists',
    author: 'Committee to Protect Journalists',
    url: 'https://cpj.org/2023/10/journalist-casualties-in-the-israel-gaza-conflict/',
    date: new Date(Date.parse('2025-06-16'))
  },
  {
    id: 68,
    name: 'Counting the dead in Gaza: difficult but essential',
    org: 'The Lancet',
    author: 'The Lancet',
    url: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(24)01169-3/fulltext',
    date: new Date(Date.parse('2024-07-10'))
  },
  {
    id: 69,
    name: 'Israeli Intelligence Has Deemed Hamas-Run Health Ministry’s Death Toll Figures Generally Accurate',
    org: 'Vice',
    author: 'Mitchell Prothero',
    url: 'https://www.vice.com/en/article/israeli-intelligence-health-ministry-death-toll/',
    date: new Date(Date.parse('2025-01-25'))
  },
  {
    id: 70,
    name: 'IRC calls for the protection of aid workers in Gaza, following the killings of three partner staff in just 24 hours',
    org: 'IRC International Rescue Committee',
    author: 'IRC International Rescue Committee',
    url: 'https://www.rescue.org/press-release/irc-calls-protection-aid-workers-gaza-following-killings-three-partner-staff-just-24',
    date: new Date(Date.parse('2024-10-15'))
  },
  {
    id: 71,
    name: 'Deaths',
    org: 'Israel-Palestine Timeline',
    author: 'Israel-Palestine Timeline',
    url: 'https://israelpalestinetimeline.org/charts/',
    date: new Date(Date.parse('2025'))
  },
  {
    id: 73,
    name: 'Conditions of Palestinian Populations',
    org: 'Palestinian Central Bureau of Statistics (PCBS)',
    author: 'Palestinian Central Bureau of Statistics (PCBS)',
    url: 'https://www.pcbs.gov.ps/portals/_pcbs/PressRelease/Press_En_InterPopDay2022E.pdf',
    date: new Date(Date.parse('2022-07-11'))
  },
  {
    id: 74,
    name: 'Has Israel-Hamas war displaced Palestinian refugees forever?',
    org: 'DW, Deutsche Welle',
    author: 'Astrid Prange de Oliveira, Jennifer Holleis',
    url: 'https://www.dw.com/en/the-plight-of-displaced-palestinian-refugees/a-70353072',
    date: new Date(Date.parse('2023-10-07'))
  },
  // {
  //   id: 75,
  //   name: 'NAME',
  //   org: 'ORG',
  //   author: 'AUTHOR',
  //   url: 'URL',
  //   date: new Date(Date.parse('2025'))
  // },
  // {
  //   id: 76,
  //   name: 'NAME',
  //   org: 'ORG',
  //   author: 'AUTHOR',
  //   url: 'URL',
  //   date: new Date(Date.parse('2025'))
  // },
  // {
  //   id: 77,
  //   name: 'NAME',
  //   org: 'ORG',
  //   author: 'AUTHOR',
  //   url: 'URL',
  //   date: new Date(Date.parse('2025'))
  // },
  // {
  //   id: 75,
  //   name: 'NAME',
  //   org: 'ORG',
  //   author: 'AUTHOR',
  //   url: 'URL',
  //   date: new Date(Date.parse('2025'))
  // },
  // {
  //   id: 76,
  //   name: 'NAME',
  //   org: 'ORG',
  //   author: 'AUTHOR',
  //   url: 'URL',
  //   date: new Date(Date.parse('2025'))
  // },
  // {
  //   id: 77,
  //   name: 'NAME',
  //   org: 'ORG',
  //   author: 'AUTHOR',
  //   url: 'URL',
  //   date: new Date(Date.parse('2025'))
  // },
  // {
  //   id: 75,
  //   name: 'NAME',
  //   org: 'ORG',
  //   author: 'AUTHOR',
  //   url: 'URL',
  //   date: new Date(Date.parse('2025'))
  // },
  // {
  //   id: 76,
  //   name: 'NAME',
  //   org: 'ORG',
  //   author: 'AUTHOR',
  //   url: 'URL',
  //   date: new Date(Date.parse('2025'))
  // },
  // {
  //   id: 77,
  //   name: 'NAME',
  //   org: 'ORG',
  //   author: 'AUTHOR',
  //   url: 'URL',
  //   date: new Date(Date.parse('2025'))
  // },
  // {
  //   id: 75,
  //   name: 'NAME',
  //   org: 'ORG',
  //   author: 'AUTHOR',
  //   url: 'URL',
  //   date: new Date(Date.parse('2025'))
  // },
  // {
  //   id: 76,
  //   name: 'NAME',
  //   org: 'ORG',
  //   author: 'AUTHOR',
  //   url: 'URL',
  //   date: new Date(Date.parse('2025'))
  // },
  // {
  //   id: 77,
  //   name: 'NAME',
  //   org: 'ORG',
  //   author: 'AUTHOR',
  //   url: 'URL',
  //   date: new Date(Date.parse('2025'))
  // },
  // {
  //   id: 75,
  //   name: 'NAME',
  //   org: 'ORG',
  //   author: 'AUTHOR',
  //   url: 'URL',
  //   date: new Date(Date.parse('2025'))
  // },
  // {
  //   id: 76,
  //   name: 'NAME',
  //   org: 'ORG',
  //   author: 'AUTHOR',
  //   url: 'URL',
  //   date: new Date(Date.parse('2025'))
  // },
  // {
  //   id: 77,
  //   name: 'NAME',
  //   org: 'ORG',
  //   author: 'AUTHOR',
  //   url: 'URL',
  //   date: new Date(Date.parse('2025'))
  // },
  // {
  //   id: 75,
  //   name: 'NAME',
  //   org: 'ORG',
  //   author: 'AUTHOR',
  //   url: 'URL',
  //   date: new Date(Date.parse('2025'))
  // },
  // {
  //   id: 76,
  //   name: 'NAME',
  //   org: 'ORG',
  //   author: 'AUTHOR',
  //   url: 'URL',
  //   date: new Date(Date.parse('2025'))
  // },
  // {
  //   id: 77,
  //   name: 'NAME',
  //   org: 'ORG',
  //   author: 'AUTHOR',
  //   url: 'URL',
  //   date: new Date(Date.parse('2025'))
  // },
  // {
  //   id: 75,
  //   name: 'NAME',
  //   org: 'ORG',
  //   author: 'AUTHOR',
  //   url: 'URL',
  //   date: new Date(Date.parse('2025'))
  // },
  // {
  //   id: 76,
  //   name: 'NAME',
  //   org: 'ORG',
  //   author: 'AUTHOR',
  //   url: 'URL',
  //   date: new Date(Date.parse('2025'))
  // },
  // {
  //   id: 77,
  //   name: 'NAME',
  //   org: 'ORG',
  //   author: 'AUTHOR',
  //   url: 'URL',
  //   date: new Date(Date.parse('2025'))
  // },
  // {
  //   id: 75,
  //   name: 'NAME',
  //   org: 'ORG',
  //   author: 'AUTHOR',
  //   url: 'URL',
  //   date: new Date(Date.parse('2025'))
  // },
  // {
  //   id: 76,
  //   name: 'NAME',
  //   org: 'ORG',
  //   author: 'AUTHOR',
  //   url: 'URL',
  //   date: new Date(Date.parse('2025'))
  // },
  // {
  //   id: 77,
  //   name: 'NAME',
  //   org: 'ORG',
  //   author: 'AUTHOR',
  //   url: 'URL',
  //   date: new Date(Date.parse('2025'))
  // },

  // UN

  // report released in March 2021 by Code Pink, a U.S. anti-war group, the United States and its allies have consistently bombed other countries over the past 20 years, dropping an average of more than 40 bombs a day.
]
