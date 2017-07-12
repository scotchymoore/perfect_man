import axios from 'axios';
import { setFlash } from './flash';

export const addBucketList = (bucketActivity) => {
  return(dispatch) => {
    axios.post('/api/relationships/Rel ID ?/bucketList', { bucketActivity })
      .then( res => {
        // an ajax call to serverside
        dispatch({ type: 'ADD_BUCKETLIST', bucketList: res.data });
        // dispatch(action) the action is an object. redux function
        dispatch(setFlash('Bucket List Item Created!', 'success'));
      })
      .catch( res => {
        dispatch(setFlash('Bucket List Item Failed To Create!', 'error'));
    });
  }
}

export const editBucketList = ( bucketList) => {
  return(dispatch) => {
    axios.put(`/api/bucketLists/${bucketList.id}`, { bucketList } )
      .then( res => {
        dispatch({ type: 'EDIT_BUCKETLIST', bucketList: res.data });
        dispatch(setFlash('Bucket List Item Edited!', 'success'));
      })
      .catch( res => {
        dispatch(setFlash('Bucket List Item Failed To Update!', 'error'));
    });
  }
}

export const deleteBucketList = (id) => {
  return(dispatch) => {
    axios.delete(`/api/bucketLists/${id}`)
      .then( res => {
        dispatch({ type: 'DELETE_BUCKETLIST', id });
        dispatch(setFlash('Bucket List Item Deleted!', 'success'));
      })
      .catch( res => {
        dispatch(setFlash('Bucket List Item Failed To Delete!', 'error'));
    });
  }
}

export const getBucketList = (relationship_id) => {
  // console.log(relationship_id)
  return(dispatch) => {
    axios.get(`/api/relationships/${relationship_id}/bucket_lists`)
      .then( res => {
        console.log(res.data)
        dispatch({ type: 'SET_BUCKETLIST', bucketLists: res.data });
      })
      .catch( res => {
        dispatch(setFlash('Failed To Get Bucket List Items.', 'error'));
    });
  }
}
