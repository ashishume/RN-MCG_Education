import React, {Component} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Dashboard from '../components/screens/Dashboard';
// import PrivacyPolicy from '../components/UI/PrivacyPolicy';

class DrawerNavigation extends Component {
  render() {
    const Drawer = createDrawerNavigator();
    return (
      <Drawer.Navigator initialRouteName="Dashboard">
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        {/* <Drawer.Screen name="Privacy Policy" component={PrivacyPolicy} /> */}
      </Drawer.Navigator>
    );
  }
}

export default DrawerNavigation;
