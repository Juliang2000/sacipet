import { makeStyles } from '@material-ui/core/styles';

const loginStyles = makeStyles((theme) => ({

  containerForm: {
    padding: theme.spacing(0, 5, 2, 5),
    [theme.breakpoints.only('xs')]: {
      padding: theme.spacing(1, 1, 1, 1),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    },
    // backdropFilter: 'blur(10px)',
    // backgroundColor: 'rgba(255, 255, 255, 0.5)',
    // boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
    // borderRadius: '20px',
  },

  titleForm: {
    color: '#1E3F20',
    fontWeight: 'bold',
    marginBottom: theme.spacing(5),
  },

  buttonPrimary: {
    backgroundColor: '#63C132',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#63C132',
    },
    textTransform: 'none',
    fontSize: '18px',
    margin: theme.spacing(0, 0, 2, 0)
  },

  buttonSecondary1: {
    color: '#707070',
    textTransform: 'none',
    margin: theme.spacing(0, 0, 2, 0),
  },

  buttonSecondary2: {
    color: '#707070',
    textTransform: 'none',
    margin: theme.spacing(1, 0, 1, 0),
    [theme.breakpoints.only('xs')]: {
      margin: theme.spacing(1, 0, 3, 0),
    },
  },

  buttonFacebook: {
    backgroundColor: '#3B5998',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#3B5998',
    },
    textTransform: 'none',
    fontSize: '18px',
    margin: theme.spacing(2, 0, 1, 0)
  },

  buttonGmail: {
    backgroundColor: '#DB4A39',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#DB4A39',
    },
    textTransform: 'none',
    fontSize: '18px',
    margin: theme.spacing(0, 0, 2, 0)
  },

  icons1: {
    width: '35px',
  },

  icons2: {
    width: '30px',
  },

  iconsCenter: {
    display: 'flex',
    justifyContent: 'center'
  },

  containerLine: {
    color: 'rgb(112,112,112, 0.5)',
    fontWeight: '900'
  }

}));

export default loginStyles;