import React, {Component, Fragment} from 'react';
import {ToastAndroid, Button} from 'react-native';
import Explore from './Explore/Explore';
import Recommended from './Recommended/Recommended';
import Swiper from './Swiper';
import Header from '../Shared/Header';
import AsyncStorage from '@react-native-community/async-storage';
// import DeviceData from './DeviceInfo';
class Dashboard extends Component {
  state = {
    isIntroShown: false,
  };

  componentDidMount() {
    this.getData();
  }

  renderIntro = async () => {
    try {
      if (!this.state.isIntroShown) {
        this.setState({
          isIntroShown: true,
        });
        await AsyncStorage.setItem('isIntroShown', 'true');
      }
    } catch (err) {
      ToastAndroid.show('Something went wrong');
    }
  };

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('isIntroShown');
      if (value !== null) {
        this.setState({isIntroShown: value});
      }
    } catch (e) {
      ToastAndroid.show('Something went wrong');
    }
  };

  render() {
    if (this.state.isIntroShown) {
      return (
        <Fragment>
          {/* <Header {...this.props} /> */}
          {/* <DeviceData /> */}
          <Explore />
          <Recommended />
        </Fragment>
      );
    } else return <Swiper introShown={this.renderIntro} />;
  }
}

export default Dashboard;
