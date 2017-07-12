import axios from 'axios';

export const getRelationships = () => {
  return(dispatch) => {
    axios.get(`/api/relationships`)
      .then( res => {
        dispatch({ type: 'SET_RELATIONSHIPS', relationships: res.data });
      })
      .catch( error => {
        dispatch(setFlash('Failed To Get Relationships.', 'error'));
    });
  }