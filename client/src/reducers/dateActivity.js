const dateActivities = ( state = [], action ) => {
  switch(action.type) {
    case 'ADD_DATEACTIVITY':
      return [action.dateActivity, ...state];
    case 'SET_DATEACTIVITIES':
      return action.dateActivities;
    case 'EDIT_DATEACTIVITY':
      return state.map(dateActivity => {
        if(dateActivity.id === action.dateActivity.id)
          return action.dateActivity
        else
          return dateActivity
      })
    case 'DELETE_DATEACTIVITY':
      return state.filter( dateActivity => dateActivity.id !== action.id)
    default:
      return state;
  }
}

export default dateActivities;
