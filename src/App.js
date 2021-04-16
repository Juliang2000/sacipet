import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// Css
import './App.css'

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';


// Pages

import PininaDashboard from './pages/PininaDashboard'
import SaciDashboard from './pages/SaciDashboard'


// import classes from '*.module.css';


const theme = createMuiTheme({
  palette: {
    primary: {

      main: '#63c132',
      // main: '#432918'
      // main: '#E4DAD8',

    },
    secondary: {
      main: '#1E3F20'

    },
  },
  typography: {
    fontFamily: `'Poppins', 'sans-serif'`,
  }
})



function App() {

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/" component={SaciDashboard} />
            <Route path="/Pinina" component={PininaDashboard} />
          </Switch>
        </Router>
      </ThemeProvider>


    </Provider>
  );
}

export default App;
