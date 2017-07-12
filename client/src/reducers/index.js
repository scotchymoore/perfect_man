import { combineReducers } from 'redux'
import user from './user'
import flash from './flash'
import bucketLists from './bucketList'
import food from './food'
import relationships from './relationship';



import dateActivity from './dateActivity'


const rootReducer = combineReducers({
  user,
  flash,
  bucketLists,
  food,
  relationships,
  dateActivity
})

export default rootReducer

