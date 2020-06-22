import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Style from '../components/Styles';
import DrawerNavigation from './DrawerNavigation';
import Login from '../components/screens/login';

const Stack = createStackNavigator();
const MainRouting = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          component={DrawerNavigation}
          options={{
            headerShown: false,
          }}
          name="Dashboard"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const headerStyles = {
  headerTitleStyle: {
    ...Style.fontFamily,
    marginLeft: -15,
    paddingLeft: 0,
  },
  headerStyle: {
    shadowOpacity: 1,
    shadowOffset: {
      height: 10,
    },
    elevation: 10,
    shadowRadius: 5,
  },
  headerRight: () => (
    <Image
      style={{height: 50, width: 50}}
      source={require('../assets/logo.jpg')}
    />
  ),
};

export default MainRouting;
