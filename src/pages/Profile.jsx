import React, { useState, useEffect, useRef } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Header from '../components/SaciComponents/Header';

// Clsx
import clsx from 'clsx';

// Sweet Alert
import Swal from 'sweetalert2';

// Material UI
import {
  TextField,
  Grid,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Fab,
  CircularProgress,
  Card,
  CardActionArea,
  CardMedia,
  IconButton,
  ButtonBase,
  Paper,
  Avatar,
  Snackbar,
  Grow,
  // Slide,
} from '@material-ui/core';

import Slide from '@material-ui/core/Slide';

import MuiAlert from '@material-ui/lab/Alert';

//Icons Material UI
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';

// Image Profile
import userImage from '../assets/images/profile/photo_profile.jpg';
// import userImage from '../assets/icons/drawer/petUser-final.svg';

//Styles
import registerStyles from './../assets/css/js/registerStyles';

// reduc login
import { login_dialog_open_action } from '../redux/actions/loginAction';

// Dispach Redux
import { useDispatch, useSelector } from 'react-redux';

import {
  saci_user_profile_action,
  saci_phone_profile_action,
  saci_email_profile_action,
  saci_email_validate_profile_action,
  saci_password_validate_profile_action,
  saci_password_profile_action,
  saci_photo_profile_action,
  saci_photo_delete_profile_action,
} from '../redux/actions/loginAction';

// Form Validation
import { useForm } from 'react-hook-form';

// Notification
import { SnackbarProvider, useSnackbar } from 'notistack';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.between('lg', 'xl')]: {
      width: '50%',
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: '#63C132',
    color: '#FFFFFF',
    '&:hover': {
      // backgroundColor: '#1E3F20',
    },
  },
  buttonFailed: {
    backgroundColor: 'red',
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#C13232',
    },
  },
  fabProgress: {
    color: '#1E3F20',
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: '#63C132',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  buttonSave: {
    color: '#FFFFFF',
  },

  rootProfile: {
    '&:hover': {
      border: '3px dashed  #63C132',
      transition: 'border 0.8s linear 0.2s',

      transform: 'scale(1.1)',
      '-webkit-transition': 'all 500ms ease-in-out',
      objectFit: 'cover',
    },
    // maxWidth: 245,
    border: '3px solid  #fff',
    marginLeft: 'auto',
    marginRight: 'auto',

    width: theme.spacing(15),
    height: theme.spacing(15),

    objectFit: 'cover',
    '-webkit-transition': 'all 500ms ease-in-out',
    transform: 'scale(1)',
  },

  containerPetimages: {
    textAlign: 'center',
  },

  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    marginBottom: '20px',
  },

  image: {
    width: 128,
    height: 128,
  },

  // img: {
  //   margin: 'auto',
  //   display: 'block',
  //   maxWidth: '100%',
  //   maxHeight: '100%',
  // },

  formContainer: {
    display: 'flex',
  },
}));

// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

const Alert = React.forwardRef((props, ref) => (
  <MuiAlert elevation={6} variant="filled" {...props} ref={ref} />
));

function TransitionRight(props) {
  return <Slide {...props} direction="right" />;
}

function Profile() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [expanded, setExpanded] = useState(false);

  const handleChangeAccordion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const { id, nombres, telefono, correo, password } = useSelector(
    (state) => state.login.user
  );

  const { user, emailValidate, passwordValidate, userPhoto } = useSelector(
    (state) => state.login
  );

  // Notificaciones
  const [state, setState] = useState({
    open: false,
    vertical: 'bottom',
    horizontal: 'left',
  });

  const [transition, setTransition] = useState(undefined);

  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  ////////////////////////////////////////

  //Editar Nombre
  const [editName, seteditName] = useState({
    nombres: `${nombres}`,
    id: `${id}`,
  });

  // console.log(editName);

  const handleChangeName = (event) => {
    const { name, value } = event.target;
    seteditName({ ...editName, ...user, [name]: value });
  };

  const onSubmitName = () => {
    if (nombres !== editName.nombres) {
      dispatch(saci_user_profile_action(editName));
    }
  };

  // Editar Telefono
  const [editPhone, seteditPhone] = useState({
    telefono: `${telefono}`,
    id: `${id}`,
  });

  // console.log(editPhone);

  const handleChangePhone = (event) => {
    const { name, value } = event.target;
    seteditPhone({ ...editPhone, ...user, [name]: value });
  };

  const onSubmitPhone = () => {
    if (telefono !== editPhone.telefono) {
      dispatch(saci_phone_profile_action(editPhone));
    }
  };

  // Editar Correo
  const [editEmail, setEditEmail] = useState({
    correo: `${correo}`,
    id: `${id}`,
  });

  // console.log(editEmail);

  const handleChangeEmail = (event) => {
    const { name, value } = event.target;
    setEditEmail({ ...editEmail, ...user, [name]: value });
  };

  const onSubmitEmail = () => {
    dispatch(saci_email_validate_profile_action(editEmail));
  };

  // console.log(emailValidate.ok);

  // const [errorEmail, setErrorEmail] = useState(null)

  useEffect(() => {
    if (emailValidate.ok === true) {
      dispatch(saci_email_profile_action(editEmail));
      // setErrorEmail(false)
    }

    if (emailValidate.ok === false) {
      // setErrorEmail(true)
    }
  }, [emailValidate, emailValidate.ok]);

  // Editar Contraseña Nueva
  const [editPassword, setEditPassword] = useState({
    password: '',
    id: `${id}`,
  });

  // console.log(editPassword);

  const handleChangePassword = (event) => {
    const { name, value } = event.target;
    setEditPassword({ ...editPassword, ...user, [name]: value });
  };

  const onSubmitPassword = () => {
    dispatch(saci_password_profile_action(editPassword));
  };

  // Editar Contraseña Actual
  const [editPasswordCurrent, setEditPasswordCurrent] = useState({
    passwordCurrent: '',
    id: `${id}`,
  });

  // console.log(editPasswordCurrent);

  const handleChangePasswordCurrent = (event) => {
    const { name, value } = event.target;
    setEditPasswordCurrent({
      ...editPasswordCurrent,
      ...user,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(saci_password_validate_profile_action(editPasswordCurrent));
  }, [editPasswordCurrent]);

  const onSubmitPasswordCurrent = () => {
    // dispatch(saci_password_profile_action(editPassword));
  };

  // Validacion Nombre
  const {
    register: registerName,
    errors: errorsName,
    handleSubmit: handleSubmitName,
  } = useForm({
    mode: 'onChange',
  });

  // Validacion Teléfono
  const {
    register: registerPhone,
    errors: errorsPhone,
    handleSubmit: handleSubmitPhone,
  } = useForm({
    mode: 'onChange',
  });

  // Validacion Correo
  const {
    register: registerEmail,
    errors: errorsEmail,
    handleSubmit: handleSubmitEmail,
  } = useForm({
    mode: 'onChange',
  });

  // // Validacion Contraseña Actual
  const {
    register: registerPasswordCurrent,
    errors: errorsPasswordCurrent,
  } = useForm({
    mode: 'onChange',
  });

  // console.log(errorsPasswordCurrent);

  // Validacion Contraseña Nueva
  const {
    register: registerPassword,
    errors: errorsPassword,
    handleSubmit: handleSubmitPassword,
  } = useForm({
    mode: 'onChange',
  });

  // console.log(errorsPassword);

  // const passwordEqual = useRef({});
  // console.log(passwordEqual);
  // passwordEqual.current = watch('passwordValidate', '');

  // Button Save Nombre
  const [loadingName, setLoadingName] = useState(false);
  const [successName, setSuccessName] = useState(false);
  const [failedName, setFailedName] = useState(false);

  // Button Save Telefono
  const [loadingPhone, setLoadingPhone] = useState(false);
  const [successPhone, setSuccessPhone] = useState(false);
  const [failedPhone, setFailedPhone] = useState(false);

  // Button Save Correo
  const [loadingEmail, setLoadingEmail] = useState(false);
  const [successEmail, setSuccessEmail] = useState(false);
  const [failedEmail, setFailedEmail] = useState(false);

  // Button Save Contrañesa Actual
  const [loadingPasswordCurrent, setLoadingPasswordCurrent] = useState(false);
  const [successPasswordCurrent, setSuccessPasswordCurrent] = useState(false);
  const [failedPasswordCurrent, setFailedPasswordCurrent] = useState(false);

  // Button Save Contrañesa Nueva
  const [loadingPassword, setLoadingPassword] = useState(false);
  const [successPassword, setSuccessPassword] = useState(false);
  const [failedPassword, setFailedPassword] = useState(false);

  const timer = useRef();

  const buttonClassname = clsx({
    [classes.buttonSuccess]:
      successName ||
      successPhone ||
      successEmail ||
      successPasswordCurrent ||
      successPassword,
    [classes.buttonFailed]:
      failedName ||
      failedPhone ||
      failedEmail ||
      failedPasswordCurrent ||
      failedPassword,
  });

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const { enqueueSnackbar } = useSnackbar();

  // boton carga nombre
  const handleButtonClickName = (variant) => () => {
    if (!loadingName) {
      setSuccessName(false);
      setFailedName(false);
      setLoadingName(true);
      timer.current = window.setTimeout(() => {
        if (errorsName.nombres) {
          setFailedName(true);
        } else {
          setSuccessName(true);
        }
        setLoadingName(false);
        enqueueSnackbar(errorsName.nombres ? 'Error' : 'Éxito', { variant });
        setTimeout(() => {
          setSuccessName(false);
          setFailedName(false);
        }, 1000);
      }, 2000);
    }
  };

  // boton carga telefono
  const handleButtonClickPhone = (variant) => () => {
    if (!loadingPhone) {
      setSuccessPhone(false);
      setFailedPhone(false);

      setLoadingPhone(true);
      timer.current = window.setTimeout(() => {
        if (errorsPhone.telefono) {
          setFailedPhone(true);
        } else {
          setSuccessPhone(true);
        }
        setLoadingPhone(false);
        enqueueSnackbar(errorsPhone.telefono ? 'Error' : 'Éxito', { variant });
        setTimeout(() => {
          setSuccessPhone(false);
          setFailedPhone(false);
        }, 1000);
      }, 2000);
    }
  };

  // boton carga correo
  const handleButtonClickEmail = (newState, Transition) => () => {
    if (!loadingEmail) {
      setSuccessEmail(false);
      setFailedEmail(false);

      setLoadingEmail(true);
      timer.current = window.setTimeout(() => {
        if (errorsEmail.correo) {
          setFailedEmail(true);
        } else {
          setSuccessEmail(true);
        }
        setLoadingEmail(false);
        setTimeout(() => {
          setSuccessEmail(false);
          setFailedEmail(false);
        }, 1000);
        setTransition(() => Transition);
        setState({ open: true, ...newState });
      }, 2000);
    }
  };

  // boton carga contraseña Nueva
  const handleButtonClickPasswordCurrent = (variant) => () => {
    if (!loadingPasswordCurrent) {
      setSuccessPasswordCurrent(false);
      setFailedPasswordCurrent(false);

      setLoadingPasswordCurrent(true);
      timer.current = window.setTimeout(() => {
        if (errorsPasswordCurrent.passwordCurrent) {
          setFailedPasswordCurrent(true);
        } else {
          setSuccessPasswordCurrent(true);
        }
        setLoadingPasswordCurrent(false);
        enqueueSnackbar(
          errorsPasswordCurrent.passwordCurrent
            ? 'Error'
            : 'Clave Actual Validada',
          {
            variant,
          }
        );
        setTimeout(() => {
          setSuccessPasswordCurrent(false);
          setFailedPasswordCurrent(false);
        }, 1000);
      }, 2000);
    }
  };

  // boton carga contraseña Nueva
  const handleButtonClickPassword = (variant) => () => {
    if (!loadingPassword) {
      setSuccessPassword(false);
      setFailedPassword(false);

      setLoadingPassword(true);
      timer.current = window.setTimeout(() => {
        if (errorsPassword.password) {
          setFailedPassword(true);
        } else {
          setSuccessPassword(true);
        }
        setLoadingPassword(false);
        enqueueSnackbar(errorsPassword.password ? 'Error' : 'Éxito', {
          variant,
        });
        setTimeout(() => {
          setSuccessPassword(false);
          setFailedPassword(false);
        }, 1000);
      }, 2000);
    }
  };

  const [userimage, setUserImage] = useState();
  const [preview, setPreview] = useState();

  const fileInputRef1 = useRef();

  const [checked1, setChecked1] = useState(false);

  useEffect(() => {
    if (userimage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(userimage);
      setChecked1(true);
      setPhotoSave(true)
    } else {
      setPreview(null);
      setPhotoDelete(false)
      setPhotoSave(false)
    }
  }, [userimage]);

  // console.log(userimage);

  const handleSubmitImageProfile = () => {
    if (checked1 === true) {
      Swal.fire({
        title: '¿Quieres guardar tu foto de perfil?',
        showDenyButton: true,
        confirmButtonText: `Si`,
        confirmButtonColor: '#63C132',
        denyButtonText: `No`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Foto Guardada', '', 'success');
          console.log('foto subida');
          dispatch(saci_photo_profile_action(userimage, id));
          setChecked1(false);
          setPhotoSave(false)
        } else if (result.isDenied) {
          Swal.fire('Foto No Guardada', '', 'error');
          // setUserImage(null);
        }
      });
    }
  };

  const handleDeleteImageProfile = () => {
    // setChecked1(true);
    // if (checked1 === true) {
    Swal.fire({
      title: '¿Estás seguro de eliminar la foto?',
      showDenyButton: true,
      confirmButtonText: `Si`,
      confirmButtonColor: '#63C132',
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Foto Eliminada', '', 'error');
        dispatch(saci_photo_delete_profile_action(id));
        setUserImage(null);
      } else if (result.isDenied) {
      }
    });
    // }
  };
  ///////////////////////////////////////
  const baseURL = process.env.REACT_APP_BACKEND_URL;

  // const userPhotos = itemUsers;

  // const [photo_1, setPhoto_1] = useState();

  // const [items, setItems] = useState({
  //   imgPath: `${baseURL}${userPhoto[0].id}.jpg`,
  // });

  const [photoDelete, setPhotoDelete] = useState(false);

  const [photoSave, setPhotoSave] = useState(false)

  const [items, setItems] = useState({
    imgPath: userImage,
  });

  useEffect(() => {
    if (userPhoto !== null) {
      if (userPhoto.length === 1) {
        console.log('existe foto');
        setItems({
          imgPath: `${baseURL}${userPhoto[0].id}.jpg`,
        });
        setPhotoDelete(true)
      }
    }

    if (userPhoto === null) {
      console.log('no existe foto');
      setItems({
        imgPath: userImage,
      });
    }
  }, [userPhoto]);

  return (
    <div>
      <Header />
      <div className={classes.root}>
        {/* <Typography
          align="center"
          variant="h4"
          gutterBottom
          // className={classes.titleForm}
        >
          INFORMACIÓN DE MI PERFIL
        </Typography> */}

        {/* <Button
          variant="outlined"
          onClick={handleClick(
            { vertical: 'bottom', horizontal: 'left' },
            TransitionRight
          )}
        >
          Open success snackbar
        </Button> */}

        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical, horizontal }}
          TransitionComponent={transition}
          // key={vertical + horizontal}
          // key={transition ? transition.name : ''}
        >
          <Alert
            onClose={handleClose}
            severity={emailValidate.ok ? 'success' : 'error'}
          >
            {emailValidate.ok ? emailValidate.message : emailValidate.message}
          </Alert>
        </Snackbar>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              {/* <ButtonBase className={classes.image}> */}
              {/* <img className={classes.img} alt="complex" src={userImage} /> */}
              {/* <AddPhotoAlternateIcon style={{ fontSize: 80 }} /> */}
              <div className={classes.containerPetimages}>
                {preview ? (
                  <Grid item>
                    <Avatar
                      onClick={(event) => {
                        event.preventDefault();
                        fileInputRef1.current.click();
                      }}
                      src={preview}
                      className={classes.rootProfile}
                      title="Mi Imagen De Perfil"
                    />
                  </Grid>
                ) : (
                  <Grid item>
                    <Avatar
                      onClick={(event) => {
                        event.preventDefault();
                        fileInputRef1.current.click();
                      }}
                      // alt="Remy Sharp"
                      // src={userImage}
                      src={items.imgPath}
                      className={classes.rootProfile}
                      title="Actualizar Foto De Perfil"
                    />
                  </Grid>
                )}

                <input
                  type="file"
                  style={{ display: 'none' }}
                  ref={fileInputRef1}
                  accept="image/*"
                  onChange={(event) => {
                    const file = event.target.files[0];
                    if (file && file.type.substr(0, 5) === 'image') {
                      setUserImage(file);
                    } else {
                      setUserImage(null);
                    }
                  }}
                />
              </div>
              {/* </ButtonBase> */}
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    Información De Mi Perfil
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    gutterBottom
                  >
                    Cuenta:
                    <span style={{ color: '#63C132' }}>
                      {user.origen_cuenta}
                    </span>
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Mascotas Registradas:
                    <span style={{ color: '#63C132' }}>5</span>
                  </Typography>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item>
                    <Button
                      variant="contained"
                      size="small"
                      color="primary"
                      onClick={handleSubmitImageProfile}
                      disabled={photoSave ? false : true}
                    >
                      Guardar
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      size="small"
                      color="primary"
                      onClick={handleDeleteImageProfile}
                      disabled={preview || photoDelete  ? false : true}
                    >
                      Borrar
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              {/* <Grid item>
                <Typography variant="subtitle1">$19.00</Typography>
              </Grid> */}
            </Grid>
          </Grid>
        </Paper>

        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChangeAccordion('panel1')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon color="primary" />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>
              Nombre De Usuario
            </Typography>
            <Typography className={classes.secondaryHeading}>
              {nombres}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container>
              <Grid item xs={6}>
                <form
                  onSubmit={handleSubmitName(onSubmitName)}
                  className={classes.formContainer}
                >
                  <TextField
                    type="text"
                    name="nombres"
                    variant="outlined"
                    defaultValue={nombres}
                    disabled={loadingName ? true : false}
                    fullWidth
                    inputRef={registerName({
                      required: { value: true, message: 'Completa este dato' },
                      maxLength: {
                        value: 40,
                        message: 'No más de 40 carácteres!',
                      },
                      minLength: {
                        value: 10,
                        message: 'Mínimo 10 carácteres!',
                      },
                      pattern: {
                        value: /^[a-zA-ZÁ-ÿ\s]{1,40}$/,
                        message: 'Solo Letras Mayúsculas y Minúsculas',
                      },
                    })}
                    helperText={errorsName?.nombres?.message}
                    error={errorsName?.nombres?.message ? true : false}
                    onChange={handleChangeName}
                  />
                  <div className={classes.wrapper}>
                    <Fab
                      type="submit"
                      size="small"
                      aria-label="save"
                      color="primary"
                      className={buttonClassname}
                      onClick={handleButtonClickName(
                        errorsName.nombres ? 'error' : 'success'
                      )}
                    >
                      {successName ? (
                        <CheckIcon />
                      ) : failedName ? (
                        <CloseIcon />
                      ) : (
                        <SaveIcon className={classes.buttonSave} />
                      )}
                    </Fab>
                    {loadingName && (
                      <CircularProgress
                        size={52}
                        className={classes.fabProgress}
                      />
                    )}
                  </div>
                </form>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChangeAccordion('panel2')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon color="primary" />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className={classes.heading}>Teléfono</Typography>
            <Typography className={classes.secondaryHeading}>
              {telefono}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid item xs={6}>
              <form
                onSubmit={handleSubmitPhone(onSubmitPhone)}
                className={classes.formContainer}
              >
                <TextField
                  // label="Télefono"
                  type="tel"
                  name="telefono"
                  variant="outlined"
                  defaultValue={telefono}
                  disabled={loadingPhone ? true : false}
                  fullWidth
                  inputRef={registerPhone({
                    required: { value: true, message: 'Completa este dato' },
                    pattern: {
                      value: /^\d{7,10}$/,
                      message: 'Ingrese un número entre 7 a 10 Digitos',
                    },
                  })}
                  helperText={errorsPhone?.telefono?.message}
                  error={errorsPhone?.telefono?.message ? true : false}
                  onChange={handleChangePhone}
                />
                <div className={classes.wrapper}>
                  <Fab
                    type="submit"
                    size="small"
                    aria-label="save"
                    color="primary"
                    className={buttonClassname}
                    onClick={handleButtonClickPhone(
                      errorsPhone.telefono ? 'error' : 'success'
                    )}
                  >
                    {successPhone ? (
                      <CheckIcon />
                    ) : failedPhone ? (
                      <CloseIcon />
                    ) : (
                      <SaveIcon className={classes.buttonSave} />
                    )}
                  </Fab>
                  {loadingPhone && (
                    <CircularProgress
                      size={52}
                      className={classes.fabProgress}
                    />
                  )}
                </div>
              </form>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChangeAccordion('panel3')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon color="primary" />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography className={classes.heading}>Email</Typography>
            <Typography className={classes.secondaryHeading}>
              {correo}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid item xs={6}>
              <form
                onSubmit={handleSubmitEmail(onSubmitEmail)}
                className={classes.formContainer}
              >
                <TextField
                  // label="Email"
                  type="email"
                  name="correo"
                  variant="outlined"
                  defaultValue={correo}
                  disabled={loadingEmail ? true : false}
                  fullWidth
                  inputRef={registerEmail({
                    required: { value: true, message: 'Completa este dato' },
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: 'Ingrese un correo electronico valido',
                    },
                  })}
                  helperText={errorsEmail?.correo?.message}
                  error={errorsEmail?.correo?.message ? true : false}
                  onChange={handleChangeEmail}
                />
                <div className={classes.wrapper}>
                  <Fab
                    type="submit"
                    size="small"
                    aria-label="save"
                    color="primary"
                    className={buttonClassname}
                    onClick={handleButtonClickEmail(
                      {
                        vertical: 'bottom',
                        horizontal: 'left',
                      },
                      TransitionRight
                    )}
                  >
                    {successEmail ? (
                      <CheckIcon />
                    ) : failedEmail ? (
                      <CloseIcon />
                    ) : (
                      <SaveIcon className={classes.buttonSave} />
                    )}
                  </Fab>
                  {loadingEmail && (
                    <CircularProgress
                      size={52}
                      className={classes.fabProgress}
                    />
                  )}
                </div>
              </form>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel4'}
          onChange={handleChangeAccordion('panel4')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon color="primary" />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography className={classes.heading}>Contraseña</Typography>
            <Typography className={classes.secondaryHeading}>
              {/* {password} */}
              {/* {password.substr(0,5)} */}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid item xs={5}>
              <form
                onSubmit={handleSubmitPassword}
                className={classes.formContainer}
              >
                <TextField
                  // label="Contraseña"
                  type="password"
                  name="passwordCurrent"
                  variant="outlined"
                  // defaultValue={password}
                  disabled={passwordValidate.ok !== true ? false : true}
                  fullWidth
                  inputRef={registerPasswordCurrent({
                    required: { value: true, message: 'Completa este dato' },
                    validate: () => {
                      if (passwordValidate.ok !== true) {
                        return 'Ingrese la contraseña actual';
                      } else {
                        return null;
                      }
                    },
                  })}
                  helperText={
                    passwordValidate.ok !== true
                      ? errorsPasswordCurrent?.passwordCurrent?.message
                      : null
                  }
                  // error={passwordValidate.ok !== true ? true : false}
                  error={
                    passwordValidate.ok !== true
                      ? errorsPasswordCurrent?.passwordCurrent?.message
                        ? true
                        : false
                      : false
                  }
                  onChange={handleChangePasswordCurrent}
                />

                {/* <div className={classes.wrapper}>
                  <Fab
                    type="submit"
                    size="small"
                    aria-label="save"
                    color="primary"
                    className={buttonClassname}
                    onClick={handleButtonClickPasswordCurrent(
                      errorsPasswordCurrent.passwordCurrent
                        ? 'error'
                        : 'success'
                    )}
                  >
                    {successPasswordCurrent ? (
                      <CheckIcon />
                    ) : failedPasswordCurrent ? (
                      <CloseIcon />
                    ) : (
                      <SaveIcon className={classes.buttonSave} />
                    )}
                  </Fab>
                  {loadingPasswordCurrent && (
                    <CircularProgress
                      size={52}
                      className={classes.fabProgress}
                    />
                  )}
                </div> */}
              </form>
            </Grid>
          </AccordionDetails>

          <AccordionDetails>
            <Grid item xs={6}>
              <Typography className={classes.heading} gutterBottom>
                Contraseña Nueva
              </Typography>
              <form
                onSubmit={handleSubmitPassword(onSubmitPassword)}
                className={classes.formContainer}
              >
                <TextField
                  // label="Contraseña"
                  type="password"
                  name="password"
                  variant="outlined"
                  // defaultValue={password}
                  disabled={passwordValidate.ok !== true ? true : false}
                  fullWidth
                  inputRef={registerPassword({
                    required: { value: true, message: 'Completa este dato' },
                    pattern: {
                      value: /^.{5,12}$/,
                      message: 'Ingrese una contraseña de 5 a 12 digitos',
                    },
                  })}
                  helperText={errorsPassword?.password?.message}
                  error={errorsPassword?.password?.message ? true : false}
                  onChange={handleChangePassword}
                />
                <div className={classes.wrapper}>
                  <Fab
                    disabled={passwordValidate.ok !== true ? true : false}
                    type="submit"
                    size="small"
                    aria-label="save"
                    color="primary"
                    className={buttonClassname}
                    onClick={handleButtonClickPassword(
                      // errorsPassword.password ? 'error' : 'success'
                      errorsPassword?.password?.message ? 'error' : 'success'
                    )}
                  >
                    {successPassword ? (
                      <CheckIcon />
                    ) : failedPassword ? (
                      <CloseIcon />
                    ) : (
                      <SaveIcon className={classes.buttonSave} />
                    )}
                  </Fab>
                  {loadingPassword && (
                    <CircularProgress
                      size={52}
                      className={classes.fabProgress}
                    />
                  )}
                </div>
              </form>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={1}>
      <Profile />
    </SnackbarProvider>
  );
}
