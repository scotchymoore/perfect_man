import { setFlash } from './flash';
import axios from 'axios';

export const handleUpload = (photo) => {
  return(dispatch) => {
    let data = new FormData();
    data.append(photo.name, photo)
    axios.post('/api/photos', data)
      .then( res => {
        dispatch({ type: 'ADD_PHOTO', photo: res.data, headers: res.headers });
        dispatch(setFlash('Image Uploaded!', 'success'));
      })
      .catch( res => {
        dispatch(setFlash('Error Uploading Photo', 'error'));
    });
  }
}
