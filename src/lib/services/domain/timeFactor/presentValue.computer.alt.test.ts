import { expect, test } from 'vitest'
import { computePresentValueFactor, getDebtAtDate} from '$services/domain/timeFactor/presentValue.alt.computer'

test('presentValueFactor 2025-01-01', () => {
  const date = new Date('2025-01-01')
  expect(computePresentValueFactor(date)).approximately(1.0250, 0.0001)
})
test('presentValueFactor 2010-10-01', () => {
  const date = new Date('2010-01-01')
  expect(computePresentValueFactor(date)).approximately(2.0775, 0.0001)
})
test('presentValueFactor 2000-01-01', () => {
  const date = new Date('2000-01-01')
  expect(computePresentValueFactor(date)).approximately(4.1903, 0.0001)
})
test('presentValueFactor 2020-01-01', () => {
  const date = new Date('2020-01-01')
  expect(computePresentValueFactor(date)).approximately(1.4058, 0.0001)
})

test('getDebtAtDate 2024-10-04', () => {
  expect(getDebtAtDate('2024-10-04')).toBe(28323365082799.83)
})

test('getDebtAtDate 2000-01-01', () => {
  expect(getDebtAtDate('2000-01-01')).toBe(3450000000000)
})

test('getDebtAtDate 2025-05-30', () => {
  expect(getDebtAtDate('2025-05-30')).toBe(28952461153000.13)
})

test('getDebtAtDate 2002-04-24', () => {
  expect(getDebtAtDate('2002-04-24')).approximately(3436299501613.02, 0.01)
})

test('getDebtAtDate 2007-04-31', () => {
  expect(getDebtAtDate('2007-04-31')).approximately((5007058051986.64+5004399622497.17)/2, 0.01)
})
