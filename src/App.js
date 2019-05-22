import React, {Component} from 'react';
import {Stack, Scene, Router} from 'react-native-router-flux';

import Login from './pages/Login';

export default class Bootime extends Component {
  render() {
    return (
    <Router>
      <Stack key="root">
        <Scene key="login" component={Login} hideNavBar={true}/>
      </Stack>
    </Router>
    );
  }
}


