import React, {Component, Fragment} from 'react';
import Explore from './Explore/Explore';
import Recommended from './Recommended/Recommended';
import Header from '../Shared/Header';
class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        {/* <Header {...this.props} /> */}
        {/* <DeviceData /> */}
        <Explore />
        <Recommended />
      </Fragment>
    );
  }
}

export default Dashboard;
