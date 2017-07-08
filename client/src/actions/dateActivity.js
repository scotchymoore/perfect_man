import axios from 'axios';

export const getDateActivities = (id) => {
  return (dispatch) => {
    axios.get(`/api/relationships/${id}/date_activities`)
      .then( res => dispatch({ type: 'DATE_ACTIVITIES', dateActivities: res.data }) )
  
  }
}

export const addDateActivities = (dateActivities)