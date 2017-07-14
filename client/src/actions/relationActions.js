import axios from 'axios';
import { setFlash } from './flash';

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
}

export const addRelationship = (relationship) => {
  return(dispatch) => {
    axios.post(`/api/relationships`, { relationship })
    .then( res => {
      dispatch({ type: 'ADD_RELATIONSHIP', relationships: res.data });
      dispatch(setFlash('Relationship Created!', 'success'));
    })
    .catch( res => {
      dispatch(setFlash('Relationship Failed To Create!', 'error'));
    });
   }
 }

 export const deleteRelationship = (id) => {
   return(dispatch) => {
     axios.delete(`/api/relationships/${id}`)
     .then( res => {
       dispatch({ type: 'DELETE_RELATIONSHIP', id });
       dispatch(setFlash('Relationship Deleted!', 'success'));
     })
     .catch( res => {
       dispatch(setFlash('Relationship Failed To Delete!', 'error'));
   });
  }
 }

 export const editRelationship = (relationship, id) => {
   return(dispatch) => {
     axios.put(`/api/relationships/${id}`)
     .then( res => {
       dispatch({type: 'EDIT_RELATIONSHIP', relationships: res.data})
       dispatch(setFlash('Relationship Edited!', 'success'));
     })
     .catch( res => {
       dispatch(setFlash('Relationship Failed To Update!', 'error'));
     })
   }
 }
