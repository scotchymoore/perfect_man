import { combineReducers } from 'redux'
import user from './user'
import flash from './flash'
import bucketLists from './bucketList'
import foods from './food'
import relationships from './relationship';
import activeRelationship from './activeRelationship';
import dateActivities from './dateActivity'


const rootReducer = combineReducers({
  user,
  flash,
  bucketLists,
  foods,
  relationships,
  dateActivities,
  activeRelationship,
})

export default rootReducer

