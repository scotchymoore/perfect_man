const bucketLists = ( state = [], action ) => {
  switch(action.type) {
    case 'ADD_BUCKETLIST':
      return [action.bucketList, ...state];
    case 'SET_BUCKETLIST':
      return action.bucketLists;
    case 'EDIT_BUCKETLIST':
      return state.map(bucketList => {
        if(bucketList.id === action.bucketList.id)
          return action.bucketList
        else
          return bucketList
      })
    case 'DELETE_BUCKETLIST':
      return state.filter( bucketList => bucketList.id !== action.id)
    default:
      return state;
  }
}

export default bucketLists;
