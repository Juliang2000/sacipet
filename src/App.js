import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';   

import './App.css'

// Redux
// import { Provider } from 'react-redux';
// import store from './redux/store';
// Css

// Pages
import Login from './pages/Login'
import Register from './pages/Register'
import PininaDashboard from './pages/PininaDashboard'
import SaciDashboard from './pages/SaciDashboard'


// import classes from '*.module.css';


const theme = createMuiTheme({
    palette: {
        primary: {

            main: '#63c132'

        },
        secondary: {
            main: '#1E3F20'

        },
    }
})



function App() {

  return (
    // <Provider store={ store }>


    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/Register">
            <Register/>
          </Route>
          <Route path="/Login">
            <Login/>
          </Route>
          <Route path="/Pinina">
            <PininaDashboard />
          </Route>
          <Route exact path="/">
            <SaciDashboard/>
          </Route>
        </Switch>
      </Router>
      </ThemeProvider>

    
    // </Provider>
  );
}

export default App;
