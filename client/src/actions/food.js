import axios from 'axios';
import { setFlash } from './flash';

export const addFood = ({ restaurant, type, location}) => {
  return(dispatch) => {
    axios.post('/api/food', { food: { restaurant, type, location } })
      .then( res => {
        dispatch({ type: 'ADD_FOOD', food: res.data});
        dispatch(setFlash('Food Created!', 'success'));
      })
      .catch( res => {
        dispatch(setFlash('Food Failed To Create!', 'error'));
    });
  }
}

export const editFood = (food) => {
  return(dispatch) => {
    axios.put(`/api/foods/${id}`, { food } )
      .then( res => {
        dispatch({ type: 'EDIT_FOOD', food: res.data });
        dispatch(setFlash('Food Edited!', 'success'));
      })
      .catch( res => {
        dispatch(setFlash('Food Failed To Update!', 'error'));
    });
  }
}

export const deleteFood = (id) => {
  return(dispatch) => {
    axios.delete(`/api/foods/${id}`)
      .then( res => {
        dispatch({ type: 'DELETE_FOOD', id });
        dispatch(setFlash('Food Deleted!', 'success'));
      })
      .catch( res => {
        dispatch(setFlash('Food Failed To Delete!', 'error'));
    });
  }
}

export const getFood = () => {
  return(dispatch) => {
    axios.get('/api/foods')
      .then( res => {
        dispatch({ type: 'SET_FOODS', languages: res.data });
      })
      .catch( res => {
        dispatch(setFlash('Failed To Get Foods.', 'error'));
    });
  }
}
