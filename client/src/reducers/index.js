import { combineReducers } from 'redux'
import user from './user'
import flash from './flash'
import food from './food'

const rootReducer = combineReducers({
  user,
  flash,
  food,
})

export default rootReducer
