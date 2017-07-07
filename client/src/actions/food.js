import axios from 'axios';
import { setFlash } from './flash';

export const addFood = ({ restaurant, type, location}) => {
  return(dispatch) => {
    axios.post('/api/food', { food: { restaurant, type, location } })
      .then( res => {
        const { data: food, headers } = res;
        dispatch({ type: 'ADD_FOOD', food, headers });
        dispatch(setFlash('Food Created!', 'success'));
      })
      .catch( res => {
        dispatch(setFlash('Food Failed To Create!', 'error'));
    });
  }
}

export const editFood = (id, food) => {
  return(dispatch) => {
    axios.put(`/api/foods/${id}`, { food } )
      .then( res => {
        const { data: food, headers } = res;
        dispatch({ type: 'EDIT_FOOD', food, headers });
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
        dispatch({ type: 'DELETE_FOOD', id, headers: res.headers });
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
        const { data: foods, headers } = res;
        dispatch({ type: 'SET_FOODS', languages, headers });
      })
      .catch( res => {
        dispatch(setFlash('Failed To Get Foods.', 'error'));
    });
  }
}
