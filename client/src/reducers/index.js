import { combineReducers } from 'redux'
import user from './user'
import flash from './flash'
import bucketLists from './bucketList'
import food from './food'
import activeRelationship from './activeRelationship';
import relationship from './relationship';



import dateActivity from './dateActivity'


const rootReducer = combineReducers({
  user,
  flash,
  bucketLists,
  food,
  activeRelationship,
  relationship,

  dateActivity
})

export default rootReducer
