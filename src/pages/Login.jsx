import React, { useEffect, useState, } from 'react';
import { Link, useHistory,  } from 'react-router-dom';
// Alerts
import swal from 'sweetalert2';
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
import iconEmail from '../assets/icons/email.svg';
import iconPassword from '../assets/icons/lock.svg';
import iconSend from '../assets/icons/send.svg';
// Styles
import loginStyles from './../assets/css/js/loginStyles';
// Tittle
import titlepinina from '../assets/images/titlepinina.png';
// Google Button
import GoogleLogin from 'react-google-login';
// Facebook Button
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
////////////////////////////////////////////////////////////////////////////////////
export default function Login() {
  // Styles
  const classes = loginStyles();
  // Validation Form Login
  const { register, errors, handleSubmit } = useForm();
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
  const { user, loader } = useSelector( state => state.login );
  const dispatch = useDispatch();
  const history = useHistory();
  // redux Actions
  const _handleSubmit = async(data) => {
    dispatch(loginNormalAction(data));
    //swal("Muy Bien!", "Inicio Sesión Exitoso!", "success");
  };
  const responseGoogle = (data) => {
    //console.log(data);
    dispatch(loginGoogleAction(data));
  };
  const responseFacebook = (data) => {
    dispatch(loginFacebookAction(data));
  };
  // Push to SaciDashboard
  useEffect(() => {
    if (user.length !== 0) {
        history.push('/');
    }
  }, [user]);


  return (
    // <ThemeProvider theme={pininaTheme}>
    <>
      { loader && (
        <Loader />
      ) }
      

      <div className={classes.containerLogin}>
        <Grid container alignItems="center" justify="center">
          <Grid item xs={12} sm={8} md={5} lg={4} xl={3} >
            <Card className={classes.containerForm}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Typography align="center" variant="h4" gutterBottom className={classes.titleForm}>
                  INICIAR SESIÓN
              </Typography>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs={1}>
                    <img src={iconEmail} alt="Email" className={classes.icons1} />
                  </Grid>
                  <Grid item xs={11}>
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
                  <Grid item xs={1}>
                    <img src={iconPassword} alt="Contraseña" className={classes.icons2} />
                  </Grid>
                  <Grid item xs={11}>
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
                    endIcon={<img src={iconSend} alt="LogIn" className={classes.icons2} />}
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
                        startIcon={<i className="fab fa-facebook-f"></i>}
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
                        startIcon={<i className="fab fa-google-plus-g"></i>}
                        onClick={renderProps.onClick}
                      >
                        <Grid container justify="center">Entrar con  Google</Grid>
                      </Button>
                    )}
                  />
                  <Link
                    to="/Register"
                    style={{ textDecoration: "none", filter: "contrast(1)" }}
                  >
                    <Button
                      variant="text"
                      size="small"
                      className={classes.buttonSecondary2}
                    >
                      ¿No tienes una cuenta? Regístrate
                </Button>
                  </Link>
                </Grid>
              </form>
            </Card>
          </Grid>
          <Grid item md={5} lg={6} xl={7}>
            <Grid container justify="flex-end">
              <Hidden smDown>
                <img src={titlepinina} alt="hola" className={classes.titlePinina} />
              </Hidden>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  )
};

