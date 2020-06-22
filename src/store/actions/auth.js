import * as ActionType from './ActionTypes';
import HttpService from '../../API/HttpService';
import {API_NAME} from '../../API/ApiPaths';
import {ToastAndroid} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export const login = values => async dispatch => {
  try {
    const response = await HttpService.post(API_NAME.LOGIN, values);
    dispatch({
      type: ActionType.LOGIN,
      payload: response.data,
    });
    setLoginStatus(response.data.email);
  } catch (err) {
    ToastAndroid.show('Login Failed', ToastAndroid.SHORT);
  }
};

const setLoginStatus = async value => {
  try {
    await AsyncStorage.setItem('email', value);
  } catch (e) {
    ToastAndroid.show('Something went wrong', ToastAndroid.SHORT);
  }
};

