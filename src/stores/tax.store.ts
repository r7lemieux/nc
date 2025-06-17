import {derived, type Readable, writable} from 'svelte/store'
import { computeTax } from '$services/domain/tax.computer'
import {computeContributions, type Contribution} from '$services/domain/contribution.computer'

// export const salary = writable(0)
export const income = writable(0)
export const married = writable(false)
export const fileJointly = writable(false)
export const headOfHouse = writable(false)

// @ts-ignore
export const tax: Readable<number> = derived(
  [income, married, fileJointly, headOfHouse],
  (
    [$income, $married, $fileJointly, $headOfHouse],
    set: (value: number) => void
  ): void => {
      const tax = computeTax($income, $married, $fileJointly, $headOfHouse)
      console.log(`==>tax.store.ts:23 tax`, tax)
      set(tax)
  }
)
export const contributions: Readable<Contribution[]> = derived(
  tax, ($tax: number, set: (value: Contribution[]) => void): void => {
    const contribs: Contribution[] =  computeContributions($tax || 0)
    set(contribs)
  }
)