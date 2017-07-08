const foods = ( state = [], action ) => {
  switch(action.type) {
    case 'ADD_FOOD':
      return [action.food, ...state];
    case 'SET_FOOD':
      return action.foods;
    case 'EDIT_FOOD':
      return state.map(food => {
        if(food.id === action.food.id)
          return action.food
        else
          return food
      })
    case 'DELETE_FOOD':
<<<<<<< HEAD
      return state.filter( language => language.id !== action.id)
=======
      return state.filter( food => food.id !== action.id)
>>>>>>> actions and reducers
    default:
      return state;
  }
}

export default foods;
