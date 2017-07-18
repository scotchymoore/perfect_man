import axios from 'axios';
import { setFlash } from './flash';

export const addDateActivities = (date_activity, id) => {
  return(dispatch) => {
    axios.post(`/api/relationships/${id}/date_activities`, { date_activity })
      .then( res => {
        dispatch({ type: 'ADD_DATEACTIVITY', dateActivity: res.data, headers: res.headers})
        dispatch(setFlash('Date Activity Item Created!', 'success'));
      })
      .catch( res => {
        dispatch(setFlash('Date Activity Item Failed to Create!', 'error'));
    });
  }
}

export const editDateActivity = ( dateActivity ) => {
  return(dispatch) => {
    axios.put(`/api/date_activities/${dateActivity.id}`, { dateActivity } )
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

export const deleteDateActivity = (relationship_id, id) => {
  return(dispatch) => {
    axios.delete(`/api/relationships/${relationship_id}/date_activities/${id}`)
      .then( res => {
        dispatch({ type: 'DELETE_DATEACTIVITY', id,  headers: res.headers });
      })
      .catch( res => {
        dispatch(setFlash('Date List Item Failed to Delete!', 'error'));
    });
  }
}

export const getDateActivities = (relationship_id) => {
  return(dispatch) => {
    axios.get(`/api/relationships/${relationship_id}/date_activities`)
      .then( res => {
        dispatch({ type: 'SET_DATEACTIVITIES', dateActivities: res.data,  headers: res.headers});
      })
      .catch( res => {
        dispatch(setFlash('Failed To Get Date Activity Items.', 'error'));
    });
  }
}
