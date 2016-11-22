import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {orange100, orange500, orange700} from 'material-ui/styles/colors';

import Layout from './pages/Layout';
import Settings from './pages/Settings';
import Home from './pages/Home';
import Register from './pages/Register';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: orange500,
    primary2Color: orange700,
    primary3Color: orange100
  }
})

const app = document.getElementById('main');

ReactDOM.render(
  // <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="settings" name="settings" component={Settings}></Route>
        <Route path="register" name="register" component={Register}></Route>
      </Route>
    </Router>
  </MuiThemeProvider>
, app
)
