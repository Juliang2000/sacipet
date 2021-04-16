import { createMuiTheme } from '@material-ui/core/styles';

const mainTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#63c132',
    },
    secondary: {
      main: '#1E3F20'
    },
  },
  typography: {
    fontFamily: `'Poppins', 'sans-serif'`,
  }
});

export default mainTheme;