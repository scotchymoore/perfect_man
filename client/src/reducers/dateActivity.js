const dateActivities = (state = [], action ) => {
  switch(action.type) {
    case 'DATE_ACTIVITIES':
      return action.dateActivities
    default:
      return state;
  }
}

export default dateActivities;