import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'; 
  
// Css
import './App.css'

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';


// Pages
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import Login from './pages/Login'
import Register from './pages/Register'
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
    }
})



function App() {

  return (
    <Provider store={ store }>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/" component={SaciDashboard}/>
            <Route path="/Register" component={Register}/>
            <Route path="/Login" component={Login}/>
            <Route path="/Pinina" component={PininaDashboard}/>
            {/* <PrivateRoute path="/menu-user" component={MenuUser} /> */}
            
          </Switch>
        </Router>
      </ThemeProvider>

    
    </Provider>
  );
}

export default App;
