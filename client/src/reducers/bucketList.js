const bucketLists = ( state = [], action ) => {
  switch(action.type) {
    case 'ADD_BUCKETLIST':
      return [action.bucketList, ...state];
      // setting the state. same as this.setState
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

// dispatch the action. It has a type and data(information)
// type is mandatory.
// second parameter is more information and it's optional.

