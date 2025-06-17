import {cpis} from '$services/domain/timeFactor/cpis'
import {expect, test} from 'vitest'
import {computePresentValueFactor} from '$services/domain/timeFactor/presentValue.alt.computer'

test('compute yearly cpis', () => {
  const yearlyCpis: number[] = []
  const monthlyCpis: number[] = []
  for(let y = 0; y < 25; y++) {
    let yearCpi = 1
    let yearCpiP = 1
    for (let m = 0; m < 12; m++) {
      yearCpi *= 1 + cpis[12 * y + m]
      let monthCpi = 1 + cpis[12 * y + m]/100
      yearCpiP *= monthCpi
      monthlyCpis.push(monthCpi)
    }
    yearlyCpis.push(yearCpiP)
  }
  expect (yearlyCpis.length).toBe(25)
  expect (monthlyCpis.length).toBe(300)
})


