const relationships = ( state = [], action ) => {
  switch(action.type) {
    case 'ADD_RELATIONSHIP':
      return [action.relationship, ...state];
    case 'SET_RELATIONSHIPS':
      return action.relationships;
    case 'EDIT_RELATIONSHIP':
      return state.map(relationship => {
        if(relationship.id === action.relationship.id)
          return action.relationship
        else
          return relationship
      })
    case 'DELETE_RELATIONSHIP':
      return state.filter( relationship => relationship.id !== action.id)
    default:
      return state;
  }
}

export default relationships;
