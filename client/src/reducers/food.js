const foods = ( state = [], action ) => {
  switch(action.type) {
    case 'ADD_FOOD':
      return [action.photo, ...state];
    case 'SET_FOOD':
      return action.photos;
    case 'EDIT_FOOD':
      return state.map(food => {
        if(food.id === action.food.id)
          return action.food
        else
          return language
      })
    case 'DELETE_FOOD':
      return state.filter( language => language.id !== action.id)
    default:
      return state;
  }
}

export default foods;
