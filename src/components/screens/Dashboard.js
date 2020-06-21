import React, {Component, Fragment} from 'react';
import Explore from './Explore/Explore';
import Recommended from './Recommended/Recommended';
import Swiper from './Swiper';
import Header from '../Shared/Header';
class Dashboard extends Component {
  state = {
    isIntroShown: false,
  };

  renderIntro = () => {
    this.setState({
      isIntroShown: true,
    });
  };
  render() {
    if (this.state.isIntroShown) {
      return (
        <Fragment>
          <Header {...this.props} />
          <Explore />
          <Recommended />
        </Fragment>
      );
    } else return <Swiper introShown={this.renderIntro} />;
  }
}

export default Dashboard;
