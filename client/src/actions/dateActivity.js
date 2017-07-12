import axios from 'axios';
import { setFlash } from './flash';

// export const getDateActivities = (id) => {
//   return (dispatch) => {
//     axios.get(`/api/relationships/${id}/date_activities`)
//       .then( res => dispatch({ type: 'DATE_ACTIVITIES', dateActivities: res.data }) )

//   }
// }
// me and spence
export const addDateActivities = (dateActivities) => {
  return(dispatch) => {
    axios.post(`/api/dateActivities`, { dateActivities })
      .then( res => {
        dispatch({ type: 'ADD_DATEACTIVITY', dateActivity: res.data})
        dispatch(setFlash('Date Activity Item Created!', 'success'));
      })
      .catch( res => {
        dispatch(setFlash('Date Activity Item Failed to Create!', 'error'));
    });
  }
}
// state never changes and you can never change state in component
// action object
// reducer puts in function to make a change in AudioContextState
// prop comes down

export const editDateActivity = ( dateActivity ) => {
  return(dispatch) => {
    axios.put(`/api/dateActivities/${dateActivity.id}`, { dateActivity } )
                                // interpolation
      .then( res => {
        dispatch({ type: 'EDIT_DATEACTIVITY', dateActivity: res.data });
        dispatch(setFlash('Date Activity List Item Edited!', 'success'));
      })
      .catch( res => {
        dispatch(setFlash('Date Activity Item Failed To Update!', 'error'));
    });
  }
}
// run action has to have a type
// when it finds a reducer it wants it makes those changes in state
// get type from reducers

export const deleteDateActivity = (id) => {
  return(dispatch) => {
    axios.delete(`/api/dateActivities/${id}`)
      .then( res => {
        dispatch({ type: 'DELETE_DATEACTIVITY', id });
        dispatch(setFlash('Date Activity List Item Deleted!', 'success'));
      })
      .catch( res => {
        dispatch(setFlash('Date List Item Failed to Delete!', 'error'));
    });
  }
}

export const setDateActivities = (relationship_id) => {
  return(dispatch) => {
    axios.get(`/api/relationships/${relationship_id}/dateActivities`)
      .then( res => {
        dispatch({ type: 'SET_DATEACTIVITY', dateActivities: res.data });
      })
      .catch( res => {
        dispatch(setFlash('Failed To Get Date Activity Items.', 'error'));
    });
  }
}
