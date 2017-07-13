import { combineReducers } from 'redux'
import user from './user'
import flash from './flash'
import bucketLists from './bucketList'
import food from './food'
import relationships from './relationship';
import activeRelationship from './activeRelationship';



import dateActivity from './dateActivity'


const rootReducer = combineReducers({
  user,
  flash,
  bucketLists,
  food,
  relationships,
  dateActivity,
  activeRelationship,
})

export default rootReducer

