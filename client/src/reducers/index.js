import { combineReducers } from 'redux'
import user from './user'
import flash from './flash'
import bucketLists from './bucketList'
import food from './food'
import activeRelationship from './activeRelationship';
import relationship from './relationship';


const rootReducer = combineReducers({
  user,
  flash,
  bucketLists,
  food,
  activeRelationship,
  relationship,

})

export default rootReducer
