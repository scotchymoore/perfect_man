import { combineReducers } from 'redux'
import user from './user'
import flash from './flash'
import bucketLists from './bucketList'

const rootReducer = combineReducers({
  user,
  flash,
  bucketLists,
})

export default rootReducer
