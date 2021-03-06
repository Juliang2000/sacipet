import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
// Css
import './App.css'
// Redux
import { Provider } from 'react-redux';
import store from './redux/store';
// Pages
import PininaDashboard from './pages/PininaDashboard'
import SaciDashboard from './pages/SaciDashboard'
import Profile from './pages/Profile'
//theme
import mainTheme from './assets/css/js/mainTheme';
import MyAdoptRequest from './pages/MyAdoptRequest';

function App() {
  const theme = mainTheme;
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/" component={SaciDashboard} />
            <Route path="/Pinina" component={PininaDashboard} />
            <Route path="/Profile" component={Profile} />
            <Route path="/adopt-request" component={MyAdoptRequest} />
            {/* <PrivateRoute path="/menu-user" component={MenuUser} /> */}
          </Switch>
        </Router>
      </ThemeProvider>


    </Provider>
  );
}

export default App;
