const activeRelationship = ( state = {}, action ) => {
  switch(action.type) {
    case 'SET_ACTIVE_RELATIONSHIP':
      return action.relationship;
    default:
      return state;
  }
}

export default activeRelationship;