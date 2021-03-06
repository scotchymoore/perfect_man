import axios from 'axios';
import { setFlash } from './flash';

export const addFood = (food, id) => {
  return(dispatch) => {
    axios.post(`/api/relationships/${id}/foods`, { food })
      .then( res => {
        dispatch({ type: 'ADD_FOOD', food: res.data, headers: res.headers});
      })
      .catch( res => {
        dispatch(setFlash('Food Failed To Create!', 'error'));
    });
  }
}

export const editFood = (food) => {
  return(dispatch) => {
    axios.put(`/api//foods/${food.id}`, { food } )
      .then( res => {
        dispatch({ type: 'EDIT_FOOD', food: res.data, headers: res.headers });
      })
      .catch( res => {
        dispatch(setFlash('Food Failed To Update!', 'error'));
    });
  }
}

export const deleteFood = (relationship_id, id) => {
  return(dispatch) => {
    axios.delete(`/api/relationships/${relationship_id}/foods/${id}`)
      .then( res => {
        dispatch({ type: 'DELETE_FOOD', id,  headers: res.headers });
      })
      .catch( res => {
        dispatch(setFlash('Food Failed To Delete!', 'error'));
    });
  }
}


export const getFood = (relationship_id) => {
  return(dispatch) => {
    axios.get(`/api/relationships/${relationship_id}/foods`)
      .then( res => {
        dispatch({ type: 'SET_FOODS', foods: res.data,  headers: res.headers });
      })
      .catch( res => {
        dispatch(setFlash('Failed To Get Foods.', 'error'));
    });
  }
}
