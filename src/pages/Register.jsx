import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
// Clsx
import clsx from 'clsx';
// Form Validation
import { useForm } from "react-hook-form";
// Alerts
import swal from 'sweetalert2';
//Axios Service
import { saveUserRegister } from '../configAxios/Register';
import { saveUserGoogle } from '../configAxios/Google';
import { saveFbUser } from '../configAxios/Facebook';
// Material UI
import { 
  FormControlLabel, 
  TextField, 
  Grid, 
  Checkbox, 
  Button, 
  Typography, 
  Card, 
  Hidden } from '@material-ui/core';
//Styles
import registerStyles from './../assets/css/js/registerStyles';
// Logos
import logoName from '../assets/icons/pets.svg';
import logoPhone from '../assets/icons/phone.svg';
import logoEmail from '../assets/icons/email.svg';
import logoPassword from '../assets/icons/lock.svg';
import logoPassword2 from '../assets/icons/lock_2.svg';
import logoSend from '../assets/icons/registration.svg';
// Tittle
import titlepinina from '../assets/images/titlepinina.png';
// Google Button
import GoogleLogin from 'react-google-login';
// Facebook Button
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
////////////////////////////////////////////////////////////////////////////////////
export default function Register() {

  const classes = registerStyles();

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

  const handleChange = (event) => {
    const { name, value } = event.target
    setnewUser({ ...newUser, [name]: value })
  };

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

  const _handleSubmit = (data) => {
    saveUserRegister(data)
    swal.fire("Muy Bien!", "Registro Exitoso!", "success");
  };

  const { register, errors, handleSubmit, watch } = useForm();

  const password = useRef({});
  password.current = watch("password", "");

  const responseFacebook = (response) => {
    console.log(response);
    saveFbUser(response);
  };

  const responseGoogle = (response) => {
    console.log(response);
    saveUserGoogle(response)
  };

  const [isChecked, setIsChecked] = useState(false);

  const [checkRed, setCheckRed] = useState(false);

  const handleCheckRegister = () => {
    if (isChecked === true) {
      setCheckRed(false)
    } else {
      setCheckRed(true)
    }
  };

  const handleCheckbox = () => {
    if (isChecked === false) {
      setCheckRed(false)
    } else {
      setCheckRed(true)
    }
  };

  return (
      <div className={classes.containerLogin}>
        <Grid container alignItems="center" justify="center">
          <Grid item xs={12} sm={8} md={5} lg={4} xl={3} >
            <Card className={classes.containerForm}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Typography align="center" variant="h4" gutterBottom className={classes.titleForm}>
                  REGISTRARSE
              </Typography>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs={1}>
                    <img src={logoName} alt="username" className={classes.icons2} />
                  </Grid>
                  <Grid item xs={11}>
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
                  <Grid item xs={1}>
                    <img src={logoPhone} alt="Teléfono" className={classes.icons1} />
                  </Grid>
                  <Grid item xs={11}>
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
                  <Grid item xs={1}>
                    <img src={logoEmail} alt="Email" className={classes.icons1} />
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
                            message: 'Ingrese un correo electronico valido'
                          }
                        })
                      }
                      helperText={errors?.correo?.message}
                      error={errors?.correo?.message ? true : false}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={1}>
                    <img src={logoPassword} alt="Contraseña" className={classes.icons2} />
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
                  <Grid item xs={1}>
                    <img src={logoPassword2} alt="Contraseña" className={classes.icons1} />
                  </Grid>
                  <Grid item xs={11}>
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
                  <span > --------------- O ---------------</span>
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
                        startIcon={<i className="fab fa-facebook-f"></i>}
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
                        startIcon={<i className="fab fa-google-plus-g"></i>}
                        onClick={renderProps.onClick}
                      >
                        <Grid container justify="center">Registrar Con Google</Grid>
                      </Button>
                    )}
                  />
                  <Link
                    to="/Login"
                    style={{ textDecoration: "none", filter: "contrast(1)" }}
                  >
                    <Button
                      variant="text"
                      size="small"
                      className={classes.buttonSecondary2}
                    >
                      ¿Tienes una cuenta? Inicia Sesión
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
  )
};