import React, { useEffect, useState, } from 'react';
import { Link, useHistory, } from 'react-router-dom';
// Alerts
import Swal from 'sweetalert2';
// Form Validation
import { useForm } from "react-hook-form";
// Dispach Redux
import { useDispatch, useSelector } from 'react-redux';
// redux Actions
import { loginNormalAction } from '../redux/actions/loginAction';
import { loginGoogleAction } from '../redux/actions/googleAction';
import { loginFacebookAction } from '../redux/actions/facebookAction';
import Loader from './Loader';
// Material UI
import { TextField, Grid, Button, Typography, Card, Hidden } from '@material-ui/core';
// Icons
import iconEmail from '../assets/icons/email-final.svg';
import iconPassword from '../assets/icons/lock-final.svg';
import iconSend from '../assets/icons/send-final.svg';
import iconFacebook from '../assets/icons/facebook-final.svg';
import iconGoogle from '../assets/icons/google-final.svg';
// Styles
import loginStyles from './../assets/css/js/loginStyles';
// Tittle
import titlepinina from '../assets/images/titulo.png';
// Google Button
import GoogleLogin from 'react-google-login';
// Facebook Button
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
// useMediaQuery
import { useTheme } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';


// import { HandleClickOpenRegister } from '../components/SaciComponents/SectionDesktop'
////////////////////////////////////////////////////////////////////////////////////
export default function Login() {

  // Styles
  const classes = loginStyles();

  // Validation Form Login
  const { register, errors, handleSubmit } = useForm({
    mode: "onChange",
  });

  // Field Validation
  const [newUser, setnewUser] = useState({
    password: '',
    correo: '',
    origen_cuenta: 'Registro_normal'
  });

  const handleChange = (event) => {
    const { name, value } = event.target
    setnewUser({ ...newUser, [name]: value })
  };

  const onSubmit = (data, e) => {
    _handleSubmit({ ...newUser })
    console.log(newUser)
    e.target.reset();
  };

  // redux implementation
  const { user, loader } = useSelector(state => state.login);
  // const { correo } = useSelector( state => state.login)
  const dispatch = useDispatch();
  const history = useHistory();

  // redux Actions
  const _handleSubmit = async (data) => {
    dispatch(loginNormalAction(data));
    // const errorCorreo = data.correo
    // swal.fire('Error', `El correo ${errorCorreo} no está registrado`, 'error')
  };

  const responseGoogle = (data) => {
    dispatch(loginGoogleAction(data));
  };

  const responseFacebook = (data) => {
    dispatch(loginFacebookAction(data));
  };

  // Push to SaciDashboard
  useEffect(() => {
    if (user.length !== 0) {
      history.push('/');
      Swal.fire({
        icon: 'success',
        title: `Bienvenid@ ${user.nombres}`,
        text: 'Sesión Iniciada',
        showClass: {
          popup: 'animate__animated animate__fadeInDown',
          icon: 'swal2-icon-show'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    }
  });




  // Container Justify Responsive
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'), {
    defaultMatches: true
  });

  return (
    // <ThemeProvider theme={pininaTheme}>
    <>
      { loader && (
        <Loader />
      )}

      {/* <div className={classes.containerLogin}> */}
      {/* <Grid container alignItems="center" justify={isMobile ? 'center' : 'flex-end'}>
          <Grid item xs={12} sm={8} md={5} lg={4} xl={3} > */}
      <Card className={classes.containerForm}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography align="center" variant="h4" gutterBottom className={classes.titleForm}>
            INICIAR SESIÓN
              </Typography>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={2} className={classes.iconsCenter}>
              <img src={iconEmail} alt="Contraseña" className={classes.icons1} />
            </Grid>
            <Grid item xs={10}>
              <TextField
                label="Email"
                type="email"
                name="correo"
                variant="outlined"
                fullWidth
                inputRef={
                  register({
                    required: { value: true, message: 'Completa este dato' },
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: 'Digite un correo electronico valido'
                    }
                  })
                }
                helperText={errors?.correo?.message}
                error={errors?.correo?.message ? true : false}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={2} className={classes.iconsCenter} >
              <img src={iconPassword} alt="Contraseña" className={classes.icons2} />
            </Grid>
            <Grid item xs={10} >
              <TextField
                label="Contraseña"
                type="password"
                name="password"
                variant="outlined"
                fullWidth
                inputRef={
                  register({
                    required: { value: true, message: 'Completa este dato' },
                    pattern: {
                      value: /^.{4,12}$/,
                      message: 'Digite una contraseña de 4 a 12 digitos'
                    }
                  })
                }
                helperText={errors?.password?.message}
                error={errors?.password?.message ? true : false}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid container justify="flex-end">
            <Link
              to="/RecuperarContraseña"
              style={{ textDecoration: "none", filter: "contrast(1)" }}
            >
              <Button
                variant="text"
                size="small"
                className={classes.buttonSecondary1}
              >
                ¿Olvidaste tu contraseña?
                </Button>
            </Link>
          </Grid>
          <Grid container justify="center">
            <Button
              className={classes.buttonPrimary}
              variant="contained"
              size="large"
              endIcon={<img src={iconSend} alt="LogIn" className={classes.icons1} />}
              fullWidth
              type="submit"
            >
              Entrar
               </Button>
            <span > --------------- O ---------------</span>
            <FacebookLogin
              appId="398513521394376"
              autoLoad={false}
              fields="name,email,picture"
              callback={responseFacebook}
              render={renderProps => (
                <Button
                  className={classes.buttonFacebook}
                  variant="contained"
                  size="large"
                  fullWidth
                  startIcon={<img src={iconFacebook} alt="Facebook" className={classes.icons2} />}
                  onClick={renderProps.onClick}
                >
                  <Grid container justify="center">Entrar con Facebook</Grid>
                </Button>
              )}
            />
            <GoogleLogin
              clientId="455409927963-pjq50ke82as4i9mv4163pimvcj5889r6.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
              render={renderProps => (
                <Button
                  className={classes.buttonGmail}
                  variant="contained"
                  size="large"
                  fullWidth
                  startIcon={<img src={iconGoogle} alt="Google" className={classes.icons1} />}
                  onClick={renderProps.onClick}
                >
                  <Grid container justify="center">Entrar con  Google</Grid>
                </Button>
              )}
            />
            {/* <Link
                    to="/Register"
                    style={{ textDecoration: "none", filter: "contrast(1)" }}
                  > */}
            <Button
              variant="text"
              size="small"
              className={classes.buttonSecondary2}
            // onClick={HandleClickOpenRegister}
            >
              ¿No tienes una cuenta? Regístrate
                </Button>
            {/* </Link> */}
          </Grid>
          {/* <HandleClickOpenRegister/> */}
        </form>

      </Card>
      {/* </Grid>
          <Grid item md={5} lg={6} xl={8}>
            <Grid container justify="flex-start">
              <Hidden smDown>
                <img src={titlepinina} alt="hola" className={classes.titlePinina} />
              </Hidden>
            </Grid>
          </Grid>
        </Grid> */}
      {/* </div> */}
    </>
  )
};

