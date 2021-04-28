import React, { useState } from 'react';

import { Link } from 'react-router-dom';

// Form Validation
import { useForm } from 'react-hook-form';

// Dispach Redux
import { useDispatch, useSelector } from 'react-redux';

// redux Actions
import {
  loginNormalAction,
  login_dialog_close_action
} from '../redux/actions/loginAction';
import { loginGoogleAction } from '../redux/actions/googleAction';
import { loginFacebookAction } from '../redux/actions/facebookAction';
import Loader from './Loader';

// Material UI
import { TextField, Grid, Button, Typography } from '@material-ui/core';

// Icons
import iconEmail from '../assets/icons/email-final.svg';
import iconPassword from '../assets/icons/lock-final.svg';
import iconSend from '../assets/icons/send-final.svg';
import iconFacebook from '../assets/icons/facebook-final.svg';
import iconGoogle from '../assets/icons/google-final.svg';

// Styles
import loginStyles from './../assets/css/js/loginStyles';

// Google Button
import GoogleLogin from 'react-google-login';

// Facebook Button
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

// Redux Dialog Rwegister Open
import { register_dialog_open_action } from '../redux/actions/registerAction';

////////////////////////////////////////////////////////////////////////////////////
export default function Login() {
  // Styles
  const classes = loginStyles();

  // Validation Form Login
  const { register, errors, handleSubmit } = useForm({
    mode: 'onChange'
  });

  // Field Validation
  const [newUser, setnewUser] = useState({
    password: '',
    correo: '',
    origen_cuenta: 'Registro_normal'
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setnewUser({ ...newUser, [name]: value });
  };

  const onSubmit = (data, e) => {
    _handleSubmit({ ...newUser });
    console.log(newUser);
    e.target.reset();
  };

  // redux implementation
  const { loader } = useSelector((state) => state.login);

  // const { correo } = useSelector( state => state.login)
  const dispatch = useDispatch();

  // redux Actions
  const _handleSubmit = async (data) => {
    dispatch(loginNormalAction(data));
  };

  const responseGoogle = (data) => {
    dispatch(loginGoogleAction(data));
  };

  const responseFacebook = (data) => {
    dispatch(loginFacebookAction(data));
  };

  const openRegister = () => {
    dispatch(login_dialog_close_action());
    dispatch(register_dialog_open_action());
  };

  return (
    <>
      {loader && <Loader />}
      <Grid container className={classes.containerForm}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography
            align="center"
            variant="h4"
            gutterBottom
            className={classes.titleForm}
          >
            INICIAR SESIÓN
          </Typography>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={2} className={classes.iconsCenter}>
              <img
                src={iconEmail}
                alt="Contraseña"
                className={classes.icons1}
              />
            </Grid>
            <Grid item xs={10}>
              <TextField
                label="Email"
                type="email"
                name="correo"
                variant="outlined"
                fullWidth
                inputRef={register({
                  required: { value: true, message: 'Completa este dato' },
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: 'Digite un correo electronico valido'
                  }
                })}
                helperText={errors?.correo?.message}
                error={errors?.correo?.message ? true : false}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={2} className={classes.iconsCenter}>
              <img
                src={iconPassword}
                alt="Contraseña"
                className={classes.icons2}
              />
            </Grid>
            <Grid item xs={10}>
              <TextField
                label="Contraseña"
                type="password"
                name="password"
                variant="outlined"
                fullWidth
                inputRef={register({
                  required: { value: true, message: 'Completa este dato' },
                  pattern: {
                    value: /^.{4,12}$/,
                    message: 'Digite una contraseña de 4 a 12 digitos'
                  }
                })}
                helperText={errors?.password?.message}
                error={errors?.password?.message ? true : false}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid container justify="flex-end">
            <Link
              to="/RecuperarContraseña"
              style={{ textDecoration: 'none', filter: 'contrast(1)' }}
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
              endIcon={
                <img src={iconSend} alt="LogIn" className={classes.icons1} />
              }
              fullWidth
              type="submit"
            >
              Entrar
            </Button>
            <span className={classes.containerLine}>
              ──────────── O ────────────
            </span>
            <FacebookLogin
              appId="398513521394376"
              autoLoad={false}
              fields="name,email,picture"
              callback={responseFacebook}
              render={(renderProps) => (
                <Button
                  className={classes.buttonFacebook}
                  variant="contained"
                  size="large"
                  fullWidth
                  startIcon={
                    <img
                      src={iconFacebook}
                      alt="Facebook"
                      className={classes.icons2}
                    />
                  }
                  onClick={renderProps.onClick}
                >
                  <Grid container justify="center">
                    Entrar con Facebook
                  </Grid>
                </Button>
              )}
            />
            <GoogleLogin
              clientId="455409927963-pjq50ke82as4i9mv4163pimvcj5889r6.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
              render={(renderProps) => (
                <Button
                  className={classes.buttonGmail}
                  variant="contained"
                  size="large"
                  fullWidth
                  startIcon={
                    <img
                      src={iconGoogle}
                      alt="Google"
                      className={classes.icons1}
                    />
                  }
                  onClick={renderProps.onClick}
                >
                  <Grid container justify="center">
                    Entrar con Google
                  </Grid>
                </Button>
              )}
            />
            <Button
              variant="text"
              size="small"
              className={classes.buttonSecondary2}
              onClick={openRegister}
            >
              ¿No tienes una cuenta? Regístrate
            </Button>
          </Grid>
        </form>
      </Grid>
    </>
  );
}
