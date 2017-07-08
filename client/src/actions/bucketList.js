import axios from 'axios';
import { setFlash } from './flash';

export const addBucketList = ({ bucket_list_item, location}) => {
  return(dispatch) => {
    axios.post('/api/bucketList', { bucketList: { bucket_list_item, location } })
      .then( res => {
        dispatch({ type: 'ADD_BUCKETLIST', bucketList: res.data });
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

export const getBucketList = () => {
  return(dispatch) => {
    axios.get('/api/bucketLists')
      .then( res => {
        dispatch({ type: 'SET_BUCKETLIST', bucketLists: res.data });
      })
      .catch( res => {
        dispatch(setFlash('Failed To Get Bucket List Items.', 'error'));
    });
  }
}
