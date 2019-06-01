import React, {Component} from 'react';
import {Stack, Scene, Router} from 'react-native-router-flux';

import Login from './pages/Login';
import BookAdd from './pages/BookAdd';
import ConfigurationCarnet from './pages/ConfigurationCarnet';
import Main from './pages/Main';
import UserInfo from './pages/UserInfo';
import AllBooks from "./pages/AllBooks";

export default class Bootime extends Component {
  render() {
    return (
    <Router>
      <Stack key="root" hideNavBar={true} >
        <Scene key="Login" component={Login} />
        <Scene key="BookAdd" component={BookAdd} />
        <Scene key="ConfigurationCarnet" component={ConfigurationCarnet} />
        <Scene key="Main" component={Main} />
        <Scene key="UserInfo" component={UserInfo}/>
        <Scene key="AllBooks" component={AllBooks}/>
      </Stack>
    </Router>
    );
  }
}


