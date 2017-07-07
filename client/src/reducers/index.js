import { combineReducers } from 'redux'
import user from './user'
import flash from './flash'
import bucketLists from './bucketList'
import food from './food'
import photos from './photos'
import dateActivity from './dateActivity'

const rootReducer = combineReducers({
  user,
  flash,
  bucketLists,
  food,
  photos,
  dateActivity
})

export default rootReducer
