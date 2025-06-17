//https://www.forbes.com/advisor/taxes/taxes-federal-income-tax-bracket/
export const computeTax = (
	income: number,
	married: boolean,
	fileJointly: boolean,
	headOfHouse: boolean
): number => {
	const bracketName = deriveBracketName(married, fileJointly, headOfHouse)
	return computeForBrackets(income, Brackets[bracketName])
}
const Brackets: { [bracket: string]: number[][] } = {
	unmarried: [
		[9875, 0.1],
		[40125, 0.12],
		[85525, 0.22],
		[163300, 0.24],
		[207350, 0.32],
		[518400, 0.35],
		[Number.MAX_SAFE_INTEGER, 0.37]
	],
	marriedJoint: [
		[19750, 0.1],
		[80250, 0.12],
		[171050, 0.22],
		[326600, 0.24],
		[414701, 0.32],
		[622050, 0.35],
		[Number.MAX_SAFE_INTEGER, 0.37]
	],
	marriedSeparate: [
		[9875, 0.1],
		[40125, 0.12],
		[85525, 0.22],
		[163300, 0.24],
		[207350, 0.32],
		[311025, 0.35],
		[Number.MAX_SAFE_INTEGER, 0.37]
	],
	headOfHouse: [
		[14100, 0.1],
		[53700, 0.12],
		[85500, 0.22],
		[163300, 0.24],
		[207350, 0.32],
		[518400, 0.35],
		[Number.MAX_SAFE_INTEGER, 0.37]
	]
}

export let userInfo : {salary: number} = { salary: 0 }

const computeBracketSalary = (salary: number, lowBracket: number, topBracket: number): number => {
	if (salary > topBracket) {
		return topBracket - lowBracket
	} else if (salary > lowBracket) {
		return salary - lowBracket
	}
	console.log(`==>tax.computer.ts:51 salary`, salary)
	return 0
}

const computeBracket = (
	salary: number,
	lowBracket: number,
	topBracket: number,
	bracketRate: number
): number => {
	return computeBracketSalary(salary, lowBracket, topBracket) * bracketRate
}

const computeForBrackets = (salary: number, brackets: number[][]): number => {
	let i = 0
	if (!salary) return 0
	let tax = computeBracket(salary, 0, brackets[0][0], brackets[0][1])
	while (salary > brackets[i][0]) {
		i++
		tax += computeBracket(salary, brackets[i - 1][0], brackets[i][0], brackets[i][1])
	}
	return Math.round(tax)
}

const deriveBracketName = (married: boolean, fileJointly: boolean, headOfHouse: boolean) => {
	if (married && !fileJointly) return 'marriedSeparate'
	if (married && fileJointly) return 'marriedJoint'
	if (headOfHouse) return 'headOfHouse'
	return 'unmarried'

}

const computeSocialSecurity= (salary:number) => Math.min(salary, 168000) * 0.062
const computeMedicare= (salary:number) => salary * 1.45
const computeUnemployment= (salary:number) => Math.min(salary, 7000) * 0.06

const totalFedIncomeTaxes = 2.4e12
const totalFedSalesTaxes = 263
const totalFedSalesTaxesSrc = 'https://usafacts.org/articles/how-much-money-does-the-government-collect-per-person/'
export const a = 541
const computeSalesTax = (salary: number) => {
  const spendingRate = (salary<2e4)?0.7:(salary<5e4)?0.5:(salary<1e5)?0.35:(salary<2.5e5)?.25:(salary<5e5)?.20:.16
	const averageSalesTax = 0.08
	return salary + spendingRate + averageSalesTax
}
