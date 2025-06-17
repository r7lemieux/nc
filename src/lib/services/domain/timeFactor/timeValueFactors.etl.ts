import { cpis } from '$services/domain/timeFactor/cpis'
import { interestRates } from '$services/domain/timeFactor/interestRates'
import * as fs from 'fs';

// DIR : Debt bearing Interest Rates
// Granular to month
export const computeTimeValueFactors = (): number[] => {
  let factor = 1
  let factors: number[] = []
  const len = Math.min(cpis.length, interestRates.length)
  for (let index= len - 1; index>0; index--) {
    factor = factor * (1 + cpis[index]/100) * (1 + interestRates[index] / 1200)
    factors[index] = factor
  }
  return factors
}
const produceFactorsContent = ():string => {
  const factors = computeTimeValueFactors()
  const lines = ['export const timeFactors = [']
  for (let index = 0; index < factors.length; index++) {
    console.log(`==>timeValueFactors.etl.ts:20 factors[${index}]`, factors[index])

    lines.push(factors[index]?.toFixed(4) + ',')
  }
  lines.push(']')
  return lines.join('\n')
}

const produceTimeValueFactorsFile = () => fs.writeFileSync('timeValueFactors.ts', produceFactorsContent())

produceTimeValueFactorsFile()
