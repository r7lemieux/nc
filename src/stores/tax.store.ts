import {derived, type Readable, writable} from 'svelte/store'
import { computeTax } from '$services/domain/tax.computer'
import { computeContributions, type Expense } from '$services/domain/contribution/contribution.computer'

// export const salary = writable(0)
export const income = writable(0)
export const married = writable(false)
export const fileJointly = writable(false)
export const headOfHouse = writable(false)
export const since = writable(2000)

// @ts-ignore
export const tax: Readable<number> = derived(
  [income, married, fileJointly, headOfHouse],
  (
    [$income, $married, $fileJointly, $headOfHouse],
    set: (value: number) => void
  ): void => {
      const tax = computeTax($income, $married, $fileJointly, $headOfHouse)
      set(tax)
  }
)
export const expenses: Readable<Expense[]> = derived(
  [tax, since], ([$tax, $since], set: (value: Expense[]) => void): void => {
    const expenses: Expense[] =  computeContributions($tax || 0, $since)
    set(expenses)
  }
)