import {buildDbKeys} from '../services/db/db.formater'

export const taxDefaults = {
  taxPaid: 0,
  income: 0,
  married: false,
  fileJointly: false,
  headOfHouse: false,
}
export const taxDbKeys = buildDbKeys(taxDefaults)
