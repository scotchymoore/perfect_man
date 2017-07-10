const activeRelationship = ( state = {}, action ) {
  switch(action.type) {
    case 'SET_ACTIVE_RELATIONSHIP':
      return action.relationship;
  }
}

export default activeRelationship;
