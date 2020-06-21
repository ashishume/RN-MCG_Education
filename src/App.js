import React, {useState, Fragment} from 'react';
import MainRouting from './Routes/MainRouting';
import LoaderComponent from './components/LoaderComponent';

const App = () => {
  return (
    <Fragment>
      <LoaderComponent />
      <MainRouting />
    </Fragment>
  );
};
export default App;
