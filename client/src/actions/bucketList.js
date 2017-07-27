import axios from 'axios';
import { setFlash } from './flash';

export const addBucketList = (bucket_list, id) => {
  return(dispatch) => {
    axios.post(`/api/relationships/${id}/bucket_lists`, { bucket_list })
      .then( res => {
       dispatch({ type: 'ADD_BUCKETLIST', bucketList: res.data, headers: res.headers });
      })
      .catch( () => {
        dispatch(setFlash('Bucket List Item Failed To Create!', 'error'));
    });
  }
}

// export const editBucketList = ( bucketList) => {
//   return(dispatch) => {
//     axios.put(`/api/bucketLists/${bucketList.id}`, { bucketList } )
//       .then( res => {
//         dispatch({ type: 'EDIT_BUCKETLIST', bucketList: res.data });
//         dispatch(setFlash('Bucket List Item Edited!', 'success'));
//       })
//       .catch( res => {
//         dispatch(setFlash('Bucket List Item Failed To Update!', 'error'));
//     });
//   }
// }

export const deleteBucketList = (relationship_id, id) => {
  return(dispatch) => {
    axios.delete(`/api/relationships/${relationship_id}/bucket_lists/${id}`)
      .then( res => {
        dispatch({ type: 'DELETE_BUCKETLIST', id, headers: res.headers});
      })
      .catch( res => {
        dispatch(setFlash('Failed To Delete Bucket List Items.', 'error'))
      });
  }
}

export const getBucketList = (relationship_id) => {
  // console.log(relationship_id)
  return(dispatch) => {
    axios.get(`/api/relationships/${relationship_id}/bucket_lists`)
      .then( res => {
        dispatch({ type: 'SET_BUCKETLIST', bucketLists: res.data, headers: res.headers});
      })
      .catch( res => {
        dispatch(setFlash('Failed To Get Bucket List Items.', 'error'));
    });
  }
}
