const foods = ( state = [], action ) => {
  switch(action.type) {
    case 'ADD_FOOD':
      return [action.food, ...state];
    case 'SET_FOODS':
      return action.foods;
    case 'EDIT_FOOD':
      return state.map(food => {
        if(food.id === action.food.id)
          return action.food
        else
          return food
      })
    case 'DELETE_FOOD':
      {debugger}
      return state.filter( food => food.id !== action.id)
    default:
      return state;
  }
}

export default foods;
