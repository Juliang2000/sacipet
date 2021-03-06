import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel, Button, Grid, Typography, Box, Hidden, Dialog, IconButton, Toolbar, MenuItem } from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import StepConnector from '@material-ui/core/StepConnector';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Swal from 'sweetalert2';
// import { PetType} from '../AdoptForm/PetType';

//Redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

//Redux actions
import { reset_action } from '../../../redux/actions/petTypeAction';
import {
  next_step_action,
  back_step_action,
  update_form_data_action,
  registry_form_adopt,
  upload_pet_image_1,
  upload_pet_image_2,
  upload_pet_image_3,
  upload_pet_image_4,
  upload_pet_image_5,
  reset_form_action,
  set_edit_user_pet_dialog,
  set_step_action,
  update_user_pet_formData_action,
} from '../../../redux/actions/adoptFormAction';

//components
import PetType from './PetType';
import PetDescription from './PetDescription';
import PetImages from './PetImages';

//icons
import iconAdopt from '../../../assets/icons/drawer/iconAdopt-final.svg';
import CloseIcon from '@material-ui/icons/Close';
import iconSend from '../../../assets/icons/send.svg';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import petTypeIcon from '../../../assets/icons/dialogs/pet-type.svg';
import petDateIcon from '../../../assets/icons/dialogs/pet-date.svg';
import petPhotoIcon from '../../../assets/icons/dialogs/pet-photo.svg';

//lotties
import registerPetForm from '../../../assets/lotties/registerPetForm.json';
import { get_saci_pets_action, get_saci_pets_no_filters_action, show_user_pets_action } from '../../../redux/actions/saciPets';

// open dialog login
import {
  login_dialog_open_action,
  adoptstepper_dialog_open_action,
  adoptstepper_dialog_close_action,
  adopt_dialog_open_action,
} from '../../../redux/actions/loginAction';
import { register_dialog_open_action } from '../../../redux/actions/registerAction';
import adoptStepperStyles from '../../../assets/css/js/adoptStepperStyles';
import { clean_user_petS_data_action, reset_pets_action } from '../../../redux/actions/userPetsAction';
import UserDescription from './UserDescription';

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 20deg,rgb(99, 193, 50) 100%,rgb(99, 193, 50) 50%,rgb(197, 232, 183) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 20deg,rgb(99, 193, 50) 100%,rgb(99, 193, 50) 50%,rgb(197, 232, 183) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  test: {
    position: 'relative',
  },
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 60,
    height: 60,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(197, 232, 183) 0%, rgb(99, 193, 50) 50%, rgb(99, 193, 50) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(197, 232, 183) 0%, rgb(99, 193, 50) 50%, rgb(99, 193, 50) 100%)',
  },
});

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     padding: '5%',
//   },
//   button: {
//     marginRight: theme.spacing(1),
//     alignItems: 'center',
//   },
//   instructions: {
//     marginTop: theme.spacing(1),
//     marginBottom: theme.spacing(1),
//     alignItems: 'center',
//     textAlign: 'center',
//   },
//   petprice: {
//     alignItems: 'center',
//   },
//   adoptionButton: {
//     color: '#fff',
//     textTransform: 'none',
//     fontSize: '15px',
//     [theme.breakpoints.between('xs', 'sm')]: {
//       color: '#000',
//     },
//   },
//   adoptionMobileButton: {
//     // color: 'black',
//     textTransform: 'none',
//     fontSize: '15px',
//   },
//   closeIconButton: {
//     marginRight: 5,
//     marginTop: 5,
//   },
//   closeButton: {
//     color: '#808080',
//     width: 30,
//     height: 30,
//   },
//   titleDialogStart: {
//     marginBottom: '5%',
//   },
//   rootDialogStart: {
//     padding: theme.spacing(0, 5, 5, 5),
//     textAlign: 'center',
//     [theme.breakpoints.only('xs')]: {
//       padding: theme.spacing(1, 1, 1, 1),
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: '100%',
//     },
//   },
//   buttonStart: {
//     textTransform: 'none',
//     color: '#ffff',
//     fontSize: '15px',
//   },
//   buttonSecondary2: {
//     textAlign: 'center',
//     textTransform: 'none',
//     fontSize: '15px',
//   },
//   menuIcons: {
//     width: '40px',
//     [theme.breakpoints.only('xs')]: {
//       width: '30px',
//     },
//   },
// }));

// const icons = {
//   1: <SettingsIcon />,
//   2: <GroupAddIcon />,
//   3: <VideoLabelIcon />,
// };

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { showUserPets, active, completed } = props;
  console.log(showUserPets)
  const icons = showUserPets ? {
    1: <img src={petDateIcon} alt="Pets Dates" />,
    2: <img src={petDateIcon} alt="Pets Dates" />,
    3: <img src={petPhotoIcon} alt="Pets Photos" />,
  }
    :
    {
      1: <img src={petTypeIcon} alt="Pets Types" />,
      2: <img src={petDateIcon} alt="Pets Dates" />,
      3: <img src={petDateIcon} alt="Pets Dates" />,
      4: <img src={petPhotoIcon} alt="Pets Photos" />,
    };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

export function getSteps(showUserPets) {
  return showUserPets ? [
    // 'Selecciona el tipo de mascota',
    'Datos de la mascota',
    'Datos del usuario',
    'Subir fotos',
  ]
    :
    [
      'Selecciona el tipo de mascota',
      'Datos de la mascota',
      'Datos del usuario',
      'Subir fotos',
    ];
}

function getStepContent(step, showUserPets, setDescriptionState) {
  switch (step) {
    case 0:
      return showUserPets ? <PetDescription /> : <PetType />;
    case 1:
      return showUserPets ? <UserDescription /> : <PetDescription />
    case 2:
      return showUserPets ? <PetImages /> : <UserDescription />;
    case 3:
      return showUserPets ? null : <PetImages />;
    default:
      return 'Unknown step';
  }
}


export default function AdoptStepper() {
  const { adoptDialog, adoptstepperDialog } = useSelector((state) => state.login);
  const { nombres } = useSelector((state) => state.login.user);
  const { petType } = useSelector((store) => store.petType);
  const { activeStepState } = useSelector((state) => state.adoptFormData);
  const { petDescription } = useSelector((state) => state.adoptFormData);
  const { editPetDialog } = useSelector(state => state.adoptFormData)
  const { userPetData } = useSelector(state => state.userPets);
  const { showUserPets } = useSelector(state => state.saciPets);
  const { descriptionData } = useSelector(state => state.adoptFormData);
  const { userPetId } = useSelector(state => state.userPets)
  const newPet = useSelector(
    (state) => state.adoptFormData.updateDescriptionData
  );
  const { petimage1, petimage2, petimage3, petimage4, petimage5 } = useSelector(
    (state) => state.adoptFormData
  );
  const { savePetImage1 } = useSelector((state) => state.adoptFormData);
  const id_mascota = useSelector(
    (state) => state.adoptFormData.registeredFormData.data.mascota.id_mascota
  );
  const dispatch = useDispatch();
  const classes = adoptStepperStyles();

  const [saveFormDescription, setSaveFormDescription] = useState(true);
  const [allowContent, setAllowContent] = useState(true);
  const [descriptionState, setDescriptionState] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps(showUserPets);



  useEffect(() => {
    if (showUserPets) {
      dispatch(set_step_action(2));
      setAllowContent(true);
    } else {
      dispatch(set_step_action(1));
    }
    if (showUserPets === false) {
      dispatch(set_edit_user_pet_dialog(false));
      dispatch(adoptstepper_dialog_close_action());
      dispatch(reset_action());
      dispatch(reset_form_action());
      setAllowContent(false);

    }
  }, [showUserPets]);

  useEffect(() => {
    if (saveFormDescription === true) {
      if (activeStepState === 2) {
        dispatch(update_form_data_action());
        setSaveFormDescription(false);
      }
    }
  }, [activeStepState])

  useEffect(() => {
    if (activeStepState) {
      switch (activeStepState) {
        case 1:
          if (showUserPets === false) {
            if (petType !== 0) {
              setAllowContent(true);
            } else {
              setAllowContent(false);
            }
          }
          break;
        case 2:
          if (showUserPets === false) {
            if (petDescription === true) {
              setAllowContent(true);
            } else {
              setAllowContent(false);
            }
          }
          break;
        case 3:
          setAllowContent(true);
          break;
        case 4:
          if (showUserPets) {
            setAllowContent(true);
          } else {
            if (savePetImage1 === true) {
              setAllowContent(true);
            } else {
              setAllowContent(false);
            }
          }
          break;
        default:
      }
    }

  }, [activeStepState, petDescription, petType, savePetImage1]);


  ColorlibStepIcon.propTypes = {
    active: PropTypes.bool,
    completed: PropTypes.bool,
    icon: PropTypes.node,
  };

  const [tramite1] = useState({
    tipo_tramite: 1
  })

  const handleClickOpenModal = () => {
    dispatch(adopt_dialog_open_action(tramite1));
    dispatch(adoptstepper_dialog_open_action());

  };

  const handleClickCloseModal = () => {
    return Swal.fire({
      title: '??Est??s seguro?',
      text: 'No podr??s revertir los cambios!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#D33',
      cancelButtonColor: '#63C132',
      confirmButtonText: 'S??, salir!',
      cancelButtonText: 'No, cancelar!',
      customClass: 'swal-wide',
    }).then((result) => {
      if (result.isConfirmed) {
        if (showUserPets) {
          dispatch(set_edit_user_pet_dialog(false));
          setActiveStep(0);
          dispatch(set_step_action(1))
          setAllowContent(true);
        } else {
          dispatch(set_edit_user_pet_dialog(false));
          dispatch(adoptstepper_dialog_close_action());
          dispatch(reset_action());
          dispatch(reset_form_action());
          setActiveStep(0);

        }
        Swal.close();
      }
    });
  };



  const handleNext = () => {
    dispatch(next_step_action());
    if (activeStepState === 2) {
      if (petDescription === true) {
        setTimeout(() => {
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }, 20);
      }
    } else {
      setTimeout(() => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }, 20);
    }
  };

  const handleBack = () => {
    dispatch(back_step_action());
    console.log(id_mascota);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const [sendPhotos, setSendPhotos] = useState(null);

  const theme = useTheme();

  const fullScreenResponsive = useMediaQuery(theme.breakpoints.down('sm'));
  const fullScreenDialog = useMediaQuery(theme.breakpoints.down('xs'));

  const formRegisterLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: registerPetForm,
  };

  const handleRegisterForm = () => {
    if (showUserPets) {
      return Swal.fire({
        title: '??Deseas actualizar los datos anteriores?',
        showDenyButton: true,
        confirmButtonColor: '#63C132',
        denyButtonColor: '#D33',
        confirmButtonText: 'Actualizar',
        denyButtonText: 'Volver',
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(update_user_pet_formData_action(
            { ...descriptionData, 
              id_mascota: userPetId, 
              tipo_tramite: "1",
              id_vacuna_Rabia: '',
              id_vacuna_Rinotraque??tis: '',
              id_vacuna_Parvovirus: '',
              id_vacuna_Moquillo: ''
             }));
          setSendPhotos(true);
          Swal.fire('Actualizaci??n exitosa!', '', 'success').then((result) => {
            if (result.isConfirmed) {
              dispatch(set_edit_user_pet_dialog(false));
              dispatch(reset_action());
              dispatch(reset_form_action());
              dispatch(get_saci_pets_action());
              setActiveStep(0);
              setAllowContent(false);
              Swal.close();        

            }
          });
        } else if (result.isDenied) {
          Swal.fire('Los cambios no han sido guardados', '', 'info');
        }
      });
    } else {
      return Swal.fire({
        title: '??Deseas registrar los datos anteriores?',
        showDenyButton: true,
        confirmButtonColor: '#63C132',
        denyButtonColor: '#D33',
        confirmButtonText: 'Guardar',
        denyButtonText: 'Volver',
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(registry_form_adopt(descriptionData));
          setSendPhotos(true);
          Swal.fire('Registro exitoso!', '', 'success').then((result) => {
            if (result.isConfirmed) {
              dispatch(adoptstepper_dialog_close_action());
              dispatch(reset_action());
              dispatch(reset_form_action());
              dispatch(get_saci_pets_action());
              setActiveStep(0);
              setAllowContent(false);
              Swal.close();
            }
          });
        } else if (result.isDenied) {
          Swal.fire('Los cambios no han sido guardados', '', 'info');
        }
      });
    }
  };

  if (sendPhotos === true) {
    if (id_mascota !== 0) {
      setTimeout(() => {
        dispatch(upload_pet_image_1(petimage1, id_mascota));
      }, 100);
      setTimeout(() => {
        dispatch(upload_pet_image_2(petimage2, id_mascota));
      }, 100);
      setTimeout(() => {
        dispatch(upload_pet_image_3(petimage3, id_mascota));
      }, 100);
      setTimeout(() => {
        dispatch(upload_pet_image_4(petimage4, id_mascota));
      }, 100);
      setTimeout(() => {
        dispatch(upload_pet_image_5(petimage5, id_mascota));
      }, 100);
      setSendPhotos(false);
    }
  }

  // Open dialog Login
  const handleClickOpenLogin = () => {
    dispatch(adoptstepper_dialog_close_action());
    dispatch(login_dialog_open_action());

  };

  // Open dialog Register
  const openRegister = () => {
    dispatch(adoptstepper_dialog_close_action());
    dispatch(register_dialog_open_action());
  };

  // Close dialog login and Register
  const handleClickCloseDialog = () => {
    dispatch(adoptstepper_dialog_close_action());
  };

  const [checked, setChecked] = useState(false);

  const handleClickSaciPets = () => {
    dispatch(get_saci_pets_action({ id_tipo_mascota: false }));
    // dispatch(get_saci_pets_no_filters_action());
  }

  return (
    <>
      <Hidden smDown>
        {showUserPets ?
          <Button
            // fullWidth
            color="secondary"
            className={classes.adoptionButton}
            onClick={handleClickSaciPets}
            startIcon={
              <img src={iconAdopt} alt="LogIn" className={classes.menuIcons} />
            }
          >
            <ArrowDropDownIcon />
            <Hidden only="md" /* mdDown */>Ver Adopciones</Hidden>
          </Button>
          :
          <Button
            // fullWidth
            color="secondary"
            className={classes.adoptionButton}
            onClick={handleClickOpenModal}
            startIcon={
              <img src={iconAdopt} alt="LogIn" className={classes.menuIcons} />
            }
          >
            <ArrowDropDownIcon />
            <Hidden only="md" /* mdDown */>Dar en adopci??n</Hidden>
          </Button>
        }
      </Hidden>

      <Hidden mdUp>
        <MenuItem
          color="secondary"
          className={classes.adoptionButton}
          onClick={handleClickOpenModal}
        >
          <img src={iconAdopt} alt="LogIn" className={classes.menuIcons} />
          <ArrowDropDownIcon />
          Dar en adopci??n
        </MenuItem>
      </Hidden>

      {nombres ? (
        <>
          <Dialog
            style={{ zIndex: 2 }}
            open={adoptDialog && adoptstepperDialog || editPetDialog}
            onClose={handleClickCloseModal}
            fullWidth
            maxWidth="md"
            fullScreen={fullScreenResponsive}
          >
            <Grid container justify="flex-end" alignItems="flex-start">
              <IconButton
                className={classes.closeIconButton}
                edge="end"
                color="inherit"
                aria-label="close"
                onClick={handleClickCloseModal}
              >
                <CloseIcon className={classes.closeButton} />
              </IconButton>
            </Grid>
            <div className={classes.root}>
              <Hidden only={'xs'}>
                <Stepper
                  alternativeLabel
                  activeStep={activeStep}
                  connector={<ColorlibConnector showUserPets={showUserPets} />}
                >
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel StepIconComponent={ColorlibStepIcon}>
                        {label}
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Hidden>
              <div>
                {activeStep === steps.length ? (
                  <div>
                    {showUserPets ? (
                      <Box m={10}>
                        <Typography variant="h5" className={classes.instructions}>
                          ??Todo est?? listo?
                        </Typography>
                        <Lottie
                          options={formRegisterLottieOptions}
                          height={200}
                          width={200}
                        // isPaused={playLottie.registerPetForm}
                        />
                        <Grid container justify="center">
                          <Typography>
                            Pulsa el bot??n enviar para actualizar el formulario de adopci??n
                          </Typography>
                        </Grid>
                        <Grid container justify="center">
                          <Typography>
                            Si deseas cambiar alg??n dato pulsa el bot??n de atr??s
                          </Typography>
                        </Grid>
                      </Box>
                    ) : (
                      <Box m={10}>
                        <Typography variant="h5" className={classes.instructions}>
                          ??Todo est?? listo?
                      </Typography>
                        <Lottie
                          options={formRegisterLottieOptions}
                          height={200}
                          width={200}
                        // isPaused={playLottie.registerPetForm}
                        />
                        <Grid container justify="center">
                          <Typography>
                            Pulsa el bot??n enviar para registrar tu formulario,
                          </Typography>
                        </Grid>
                        <Grid container justify="center">
                          <Typography>
                            Si deseas cambiar alg??n dato pulsa el bot??n de atr??s
                          </Typography>
                        </Grid>
                      </Box>
                    )}

                    <Grid container justify="center">
                      <Button onClick={handleBack} className={classes.button}>
                        Atr??s
                      </Button>
                      <Button
                        onClick={handleRegisterForm}
                        variant="contained"
                        color="primary"
                        className={classes.button}
                      >
                        Enviar
                      </Button>
                    </Grid>
                  </div>
                ) : (
                  <div>
                    <Typography className={classes.instructions}>
                      {getStepContent(activeStep, showUserPets, setDescriptionState)}
                    </Typography>
                    <div>
                      <Grid container justify="center" >
                        {/* {showUserPets ?
                          <Button disabled={activeStep === 1} onClick={handleBack} className={classes.button}>
                            Atr??s
                          </Button> */}
                        {/* : */}
                        <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                          Atr??s
                        </Button>
                        {/* } */}
                        <Button
                          disabled={allowContent === false}
                          variant="contained"
                          color="primary"
                          onClick={handleNext}
                          className={classes.button}
                        >
                          {activeStep === steps.length - 1
                            ? 'Siguiente'
                            : 'Siguiente'}
                        </Button>
                      </Grid>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Dialog>
        </>
      ) : (
        <>
          <Dialog
            style={{ zIndex: 2 }}
            open={adoptstepperDialog === true}
            onClose={handleClickCloseDialog}
            fullScreen={fullScreenDialog}
          >
            <Grid container justify="flex-end">
              <Toolbar>
                <IconButton
                  edge="end"
                  color="primary"
                  aria-label="close"
                  onClick={handleClickCloseDialog}
                >
                  <CloseIcon />
                </IconButton>
              </Toolbar>
            </Grid>
            <div className={classes.rootDialogStart}>
              <Grid container justify="center">
                <Grid item className={classes.titleDialogStart}>
                  <Typography variant="h6">
                    ??Hola! si ya tienes cuenta Inicia sesi??n o Reg??strate
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Button
                    className={classes.buttonStart}
                    color="primary"
                    variant="contained"
                    size="large"
                    endIcon={
                      <img
                        src={iconSend}
                        alt="LogIn"
                        className={classes.icons2}
                      />
                    }
                    fullWidth
                    type="submit"
                    onClick={handleClickOpenLogin}
                  >
                    Inicia Sesi??n
                  </Button>
                </Grid>

                <Grid item xs={12} /* spacing={3}  justifyContent="center" */>
                  <Button
                    variant="text"
                    size="small"
                    className={classes.buttonSecondary2}
                    onClick={openRegister}
                  >
                    ??No tienes una cuenta? Reg??strate
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Dialog>
        </>
      )}
    </>
  );
}
