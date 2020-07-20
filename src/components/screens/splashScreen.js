import React, {Fragment, useEffect} from 'react';
import {View, ImageBackground, ActivityIndicator, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const SplashScreen = props => {
  useEffect(() => {
    setTimeout(() => {
      loginStatusHandler(props);
    }, 2000);
  }, []);

  const loginStatusHandler = async props => {
    try {
      const email = await AsyncStorage.getItem('email');
      const introValue = await AsyncStorage.getItem('isIntroShown');
      if (email !== null && introValue !== null) {
        props.navigation.navigate('Dashboard');
      } else if (email !== null && introValue === null) {
        props.navigation.navigate('Swiper');
      } else {
        props.navigation.navigate('Login');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Fragment>
      <ImageBackground
        style={{flex: 1, resizeMode: 'cover'}}
        source={require('../../assets/splash.jpg')}>
        <View style={{marginTop: '50%'}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              color: '#fff',
              fontWeight: 'bold',
            }}>
            Welcome to MCG Academy
          </Text>
        </View>
        <ActivityIndicator size={'large'} color={'#fff'} style={{flex: 1}} />
      </ImageBackground>
    </Fragment>
  );
};

export default SplashScreen;
