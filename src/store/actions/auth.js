import * as ActionType from './ActionTypes';
import HttpService from '../../API/HttpService';
import {API_NAME} from '../../API/ApiPaths';
import {ToastAndroid} from 'react-native';
// import {AsyncStorage} from '@react-native-community/async-storage';

export const login = values => async dispatch => {
  try {
    const response = await HttpService.post(API_NAME.LOGIN, values);
    dispatch({
      type: ActionType.LOGIN,
      payload: response.data,
    });
    // AsyncStorage.setItem('email', response.data.email);
  } catch (err) {
    ToastAndroid.show('Login Failed', ToastAndroid.SHORT);
  }
};
// export const fetchContent = postId => async dispatch => {
//   const response = await HttpService.get(
//     `${API_NAME.FETCH_POSTS}/${postId}?key=${API_KEY}`,
//   );

//   dispatch({
//     type: ActionType.FETCH_POST,
//     payload: response.data,
//   });
// };
