import {buildDbKeyMap, buildDbKeys, buildDbChoiceMaps} from '../../lib/services/db/db.formater'

export const profileChoices = {
  Service: 'I_served_in_Afghanistan',
  Military: 'Military',
  Age: ['under_25', '25-39', '40-55', 'over_55'],
  Education: ['No_High_School', 'High_School', 'Some_College', 'Bachelor', 'Graduate_School'],
  Origin: ['USA', 'Afghanistan', 'Other'],
}

export const profileDbKeys = buildDbKeys(profileChoices)
export const profileDbKeyMap = buildDbKeyMap(profileChoices)
export const profileDbChoiceMaps = buildDbChoiceMaps(profileChoices)
