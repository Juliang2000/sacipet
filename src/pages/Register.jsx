// Hooks
import React, { useState, useRef } from 'react';

// Clsx
import clsx from 'clsx';

// Form Validation
import { useForm } from "react-hook-form";

// Dispach Redux
import { useDispatch, useSelector } from 'react-redux';

// redux Actions
import { registerAction, register_dialog_close_action, save_register_to_login } from '../redux/actions/registerAction';
import { loginGoogleAction } from '../redux/actions/googleAction';
import { loginFacebookAction } from '../redux/actions/facebookAction';
import Loader from './Loader';

// Material UI
import {
  FormControlLabel,
  TextField,
  Grid,
  Checkbox,
  Button,
  Typography,
  Toolbar,
  IconButton
} from '@material-ui/core';

//Styles
import registerStyles from './../assets/css/js/registerStyles';

// Icons
import iconName from '../assets/icons/pet-final.svg';
import iconPhone from '../assets/icons/phone-final.svg';
import iconEmail from '../assets/icons/email-final.svg';
import iconPassword from '../assets/icons/lock-final.svg';
import iconPassword2 from '../assets/icons/lock-2-final.svg';
import logoSend from '../assets/icons/registration.svg';
import iconFacebook from '../assets/icons/facebook-final.svg';
import iconGoogle from '../assets/icons/google-final.svg';
import CloseIcon from '@material-ui/icons/Close';

// Google Button
import GoogleLogin from 'react-google-login';

// Facebook Button
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

// reduc login
import { login_dialog_open_action } from '../redux/actions/loginAction';

////////////////////////////////////////////////////////////////////////////////////

export default function Register() {

  const { loader } = useSelector(state => state.register);
  const dispatch = useDispatch();

  // Styles
  const classes = registerStyles();

  // Field Validation
  const [newUser, setnewUser] = useState({
    nombres: '',
    apellidos: 'test',
    telefono: '',
    correo: '',
    password: '',
    passwordCheck: '',
    documento: '1111111',
    id_rol: '1',
    origen_cuenta: 'Registro Normal'
  });

  // Input Event
  const handleChange = (event) => {
    const { name, value } = event.target
    setnewUser({ ...newUser, [name]: value })
  };

  // Input Submit
  const onSubmit = (data, e) => {
    if (isChecked === true) {
      setIsChecked(false)
      _handleSubmit({ ...newUser })
      console.log(newUser)
      e.target.reset();
    } else {
      return
    }
  };

  // Validation Form Register
  const { register, errors, handleSubmit, watch } = useForm({
    mode: 'onChange'
  });

  // Password Validation
  const password = useRef({});
  password.current = watch("password", "");

  // Check Validation
  const [isChecked, setIsChecked] = useState(false);
  const [checkRed, setCheckRed] = useState(false);

  // Check Validation
  const handleCheckRegister = () => {
    if (isChecked === true) {
      setCheckRed(false)
    } else {
      setCheckRed(true)
    }
  };

  // Check Validation
  const handleCheckbox = () => {
    if (isChecked === false) {
      setCheckRed(false)
    } else {
      setCheckRed(true)
    }
  };

  // Redux Actions
  const _handleSubmit = async (data) => {
    dispatch(registerAction(data));
    dispatch(save_register_to_login(newUser))
  };

  // Redux Google
  const responseGoogle = (data) => {
    dispatch(loginGoogleAction(data));
  };

  // Redux Facebook
  const responseFacebook = (data) => {
    dispatch(loginFacebookAction(data));
  };

  // Redux Open Dialogs
  const openLogin = () => {
    dispatch(register_dialog_close_action())
    dispatch(login_dialog_open_action())
  }

  const handleClickCloseRegister = () => {
    dispatch(register_dialog_close_action())
  }

  return (
    <>
      { loader && (
        <Loader />
      )}
      <Grid container justify="flex-end">
        <Toolbar>
          <IconButton edge="end" color="primary" aria-label="close" onClick={handleClickCloseRegister}>
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </Grid>
      <Grid container className={classes.containerForm}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography align="center" variant="h4" gutterBottom className={classes.titleForm}>
            REGISTRARSE
          </Typography>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={2} className={classes.iconsCenter}>
              <img src={iconName} alt="username" className={classes.icons1} />
            </Grid>
            <Grid item xs={10}>
              <TextField
                label="Nombre de usuario"
                type="text"
                name="nombres"
                variant="outlined"
                fullWidth
                inputRef={
                  register({
                    required: { value: true, message: 'Completa este dato' },
                    maxLength: { value: 40, message: 'No más de 40 carácteres!' },
                    minLength: { value: 10, message: 'Mínimo 10 carácteres!' },
                    pattern: { value: /^[a-zA-ZÁ-ÿ\s]{1,40}$/, message: 'Solo Letras Mayúsculas y Minúsculas' },
                  })
                }
                helperText={errors?.nombres?.message}
                error={errors?.nombres?.message ? true : false}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={2} className={classes.iconsCenter}>
              <img src={iconPhone} alt="Teléfono" className={classes.icons1} />
            </Grid>
            <Grid item xs={10}>
              <TextField
                label="Télefono"
                type="tel"
                name="telefono"
                variant="outlined"
                fullWidth
                inputRef={
                  register({
                    required: { value: true, message: 'Completa este dato' },
                    pattern: { value: /^\d{7,10}$/, message: 'Ingrese un número entre 7 a 10 Digitos' }
                  })
                }
                helperText={errors?.telefono?.message}
                error={errors?.telefono?.message ? true : false}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={2} className={classes.iconsCenter}>
              <img src={iconEmail} alt="Email" className={classes.icons1} />
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
                      message: 'Ingrese un correo electronico valido'
                    }
                  })
                }
                helperText={errors?.correo?.message}
                error={errors?.correo?.message ? true : false}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={2} className={classes.iconsCenter}>
              <img src={iconPassword} alt="Contraseña" className={classes.icons2} />
            </Grid>
            <Grid item xs={10}>
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
                      value: /^.{5,12}$/,
                      message: 'Ingrese una contraseña de 5 a 12 digitos'
                    }
                  })
                }
                helperText={errors?.password?.message}
                error={errors?.password?.message ? true : false}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={2} className={classes.iconsCenter}>
              <img src={iconPassword2} alt="Contraseña" className={classes.icons1} />
            </Grid>
            <Grid item xs={10}>
              <TextField
                label="Repetir Contraseña"
                type="password"
                name="passwordCheck"
                variant="outlined"
                fullWidth
                inputRef={
                  register({
                    required: { value: true, message: 'Completa este dato' },
                    validate: value => value === password.current || "Ingrese la misma contraseña"
                  })
                }
                helperText={errors?.passwordCheck?.message}
                error={errors?.passwordCheck?.message ? true : false}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid container justify="center">
            <FormControlLabel
              className={clsx(classes.buttonSecondary2, { [classes.checkboxRojo]: checkRed })}
              value="start"
              control={
                <Checkbox
                  onClick={handleCheckbox}
                  checked={isChecked}
                  onChange={(e) => { setIsChecked(e.target.checked) }}
                  color="primary"
                  name="checkbox"
                />
              }
              label="Aceptar términos y condiciones"
              labelPlacement="end"
            />
            <Button
              onClick={handleCheckRegister}
              className={classes.buttonPrimary}
              variant="contained"
              size="large"
              endIcon={<img src={logoSend} alt="SignUp" className={classes.icons2} />}
              fullWidth
              type="submit"
            >
              Registrar
              </Button>
            <span className={classes.containerLine}>──────────── O ────────────</span>
            <FacebookLogin
              appId="398513521394376"
              autoLoad={false}
              callback={responseFacebook}
              fields="name,email,picture"
              render={renderProps => (
                <Button
                  className={classes.buttonFacebook}
                  variant="contained"
                  size="large"
                  fullWidth
                  startIcon={<img src={iconFacebook} alt="Facebook" className={classes.icons2} />}
                  onClick={renderProps.onClick}
                >
                  <Grid container justify="center">Registrar Con Facebook</Grid>
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
                  <Grid container justify="center">Registrar Con Google</Grid>
                </Button>
              )}
            />
            <Button
              variant="text"
              size="small"
              className={classes.buttonSecondary3}
              onClick={openLogin}
            >
              ¿Tienes una cuenta? Inicia Sesión
                </Button>
          </Grid>
        </form>
      </Grid>
    </>
  )
};