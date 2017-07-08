import { combineReducers } from 'redux'
import user from './user'
import flash from './flash'
import food from './food'
import photos from './photos'

const rootReducer = combineReducers({
  user,
  flash,
  food,
  photos,
})

export default rootReducer
