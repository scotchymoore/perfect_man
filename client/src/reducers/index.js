import { combineReducers } from 'redux'
import user from './user'
import flash from './flash'
import bucketLists from './bucketList'
import food from './food'

const rootReducer = combineReducers({
  user,
  flash,
  bucketLists,
  food,
})

export default rootReducer
