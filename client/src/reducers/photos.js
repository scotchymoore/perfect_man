const photos = ( state = [], action ) => {
  switch(action.type) {
    case 'ADD_PHOTO':
      return [action.photo, ...state];
    case 'SET_PHOTOS':
      return action.photos;
    default:
      return state;
  }
}

export default photos;
