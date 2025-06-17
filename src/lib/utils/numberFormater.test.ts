import { expect, test } from 'vitest'
import {toMin3Digits, toStringInMillions} from '$utils/numberFormater'

test('toMin3Digits 1.123456', () => {
  expect(toMin3Digits(1.2345)).toBe(1.23)
})

test('toMin3Digits 12.3456', () => {
  expect(toMin3Digits(12.345)).toBe(12.3)
})

test('toMin3Digits 123.456', () => {
  expect(toMin3Digits(123.456)).toBe(123)
})

test('toMin3Digits 1234.56', () => {
  expect(toMin3Digits(1234.56)).toBe(1235)
})

test('toStringInMillions 1.234567e13', () => {
  expect(toStringInMillions(1.234567e13)).toBe('12.3 trillion')
})

test('toStringInMillions 1.234567e12', () => {
  expect(toStringInMillions(1.234567e12)).toBe('1.23 trillion')
})

test('toStringInMillions 1.234567e11', () => {
  expect(toStringInMillions(1.234567e11)).toBe('123 billion')
})

test('toStringInMillions 1.234567e10', () => {
  expect(toStringInMillions(1.234567e10)).toBe('12.3 billion')
})

test('toStringInMillions 1.234567e9', () => {
  expect(toStringInMillions(1.234567e9)).toBe('1.23 billion')
})

test('toStringInMillions 1.234567e8', () => {
  expect(toStringInMillions(1.234567e8)).toBe('123 million')
})

test('toStringInMillions 1.234567e7', () => {
  expect(toStringInMillions(1.234567e7)).toBe('12.3 million')
})

test('toStringInMillions 1.234567e6', () => {
  expect(toStringInMillions(1.234567e6)).toBe('1.23 million')
})

test('toStringInMillions 1.234567e5', () => {
  expect(toStringInMillions(1.234567e5)).toBe('123 thousand')
})

test('toStringInMillions 1.234567e4', () => {
  expect(toStringInMillions(1.234567e4)).toBe('12.3 thousand')
})

test('toStringInMillions 1.234567e3', () => {
  expect(toStringInMillions(1.234567e3)).toBe('1.23 thousand')
})

test('toStringInMillions 1.234567e2', () => {
  expect(toStringInMillions(1.234567e2)).toBe('123')
})

test('toStringInMillions 1.234567e1', () => {
  expect(toStringInMillions(1.234567e1)).toBe('12.3')
})

test('toStringInMillions 1.234567', () => {
  expect(toStringInMillions(1.234567)).toBe('1.23')
})