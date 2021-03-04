import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel, Button, Grid, Typography, Box, Hidden, Dialog, IconButton, Toolbar } from '@material-ui/core';
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
import { reset_action } from '../../../redux/actions/petTypeAction'
import { next_step_action, back_step_action, sizePetData, update_form_data_action, registry_form_adopt, upload_pet_image_1, upload_pet_image_2, upload_pet_image_3, upload_pet_image_4, upload_pet_image_5, reset_form_action } from '../../../redux/actions/adoptFormAction'

//components
import PetType from './PetType'
import PetDescription from './PetDescription';
import PetImages from './PetImages';
import swal from 'sweetalert2'


//icons
import iconAdopt from '../../../assets/icons/drawer/iconAdopt-final.svg'
import petIconGray from '../../../assets/icons/drawer/pet_gray.svg'
import CloseIcon from '@material-ui/icons/Close';
import iconSend from '../../../assets/icons/send.svg';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';

//lotties
import registerPetForm from '../../../assets/lotties/registerPetForm.json'
import { get_saci_pets_action } from '../../../redux/actions/saciPets';

// open dialog login
import { login_dialog_open_action, adoptstepper_dialog_open_action, adoptstepper_dialog_close_action, adopt_dialog_open_action } from '../../../redux/actions/loginAction';
import { register_dialog_open_action } from '../../../redux/actions/registerAction';


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
    position: 'relative'
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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: '5%',
  },
  button: {
    marginRight: theme.spacing(1),
    alignItems: 'center',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    alignItems: 'center',
    textAlign: 'center',

  },
  petprice: {
    alignItems: 'center',
  },
  adoptionButton: {
    color: '#fff',
    textTransform: 'none',
    fontSize: '15px',
  },
  adoptionMobileButton: {
    // color: 'black',
    textTransform: 'none',
    fontSize: '15px',
  },
  closeIconButton: {
    marginRight: 5,
    marginTop: 5,
  },
  closeButton: {

    color: '#808080',
    width: 30,
    height: 30,
  },
  titleDialogStart: {
    marginBottom: '5%',
  },
  rootDialogStart: {
    padding: theme.spacing(0, 5, 5, 5),
    textAlign: 'center',
    [theme.breakpoints.only('xs')]: {
      padding: theme.spacing(1, 1, 1, 1),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    },
  },
  buttonStart: {
    textTransform: 'none',
    color: '#ffff',
    fontSize: '15px',
  },
  buttonSecondary2: {
    textAlign: 'center',
    textTransform: 'none',
    fontSize: '15px',
  },
  iconsMenu: {
    width: '40px',
    [theme.breakpoints.only('xs')]: {
      width: '30px',
    }
  },
}));


// const icons = {
//   1: <SettingsIcon />,
//   2: <GroupAddIcon />,
//   3: <VideoLabelIcon />,
// };

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
    4: <VideoLabelIcon />,
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

export function getSteps() {
  return ['Selecciona el tipo de mascota', 'Datos de la mascota', 'Subir fotos'];
}

function getStepContent(step) {

  switch (step) {
    case 0:
      return <PetType />;
    case 1:
      return <PetDescription />;
    case 2:
      return <PetImages />;
    default:
      return 'Unknown step';
  }
}

export default function AdoptStepper() {

  const { adoptDialog, adoptstepperDialog } = useSelector(state => state.login);

  const { user } = useSelector(state => state.login);
  const { petType } = useSelector(store => store.petType);
  const { activeStepState } = useSelector(state => state.adoptFormData);
  const { petDescription } = useSelector(state => state.adoptFormData);
  const newPet = useSelector(state => state.adoptFormData.updateDescriptionData);
  const { petimage1, petimage2, petimage3, petimage4, petimage5 } = useSelector(state => state.adoptFormData);
  const { savePetImage1, savePetImage2, savePetImage3, savePetImage4, savePetImage5 } = useSelector(state => state.adoptFormData);
  const id_mascota = useSelector(state => state.adoptFormData.registeredFormData.data.mascota.id_mascota);
  // const successPetImage1 = useSelector(state => state.adoptFormData.successPetImage1.data.sucess)
  // const successPetImage2 = useSelector(state => state.adoptFormData.successPetImage2.data.sucess)
  // const successPetImage3 = useSelector(state => state.adoptFormData.successPetImage3.data.sucess)
  // const successPetImage4 = useSelector(state => state.adoptFormData.successPetImage4.data.sucess)
  // const successPetImage5 = useSelector(state => state.adoptFormData.successPetImage5.data.sucess)
  // const petimage2 = useSelector(state => state.adoptFormData.petimage2);
  const dispatch = useDispatch();
  // const user = true;
  const classes = useStyles();

  // const [skipped, setSkipped] = React.useState(new Set());

  const [saveFormDescription, setSaveFormDescription] = useState(true);
  const [allowContent, setAllowContent] = useState(false);
  const [checkedStepOne, setCheckedStepOne] = useState(true)
  const [checkedStepTwo, setCheckedStepTwo] = useState(true)
  const [checkStepThree, setCheckStepThree] = useState(true)
  // const [checkStepFour, setCheckStepFour] = useState(true)

  if (saveFormDescription === true) {
    if (activeStepState === 2) {
      dispatch(update_form_data_action());
      setSaveFormDescription(false);
    }
  }

  useEffect(() => {
    if (activeStepState) {
      switch (activeStepState) {
        case 1: if (petType !== 0) {
          setAllowContent(true)
        } else {
          setAllowContent(false)
        }
          break;
        case 2: if (petDescription === true) {
          setAllowContent(true);
        } else {
          setAllowContent(false);
        }
          break;
        case 3: if (savePetImage1 === true) {
          setAllowContent(true);
        } else {
          setAllowContent(false);
        }
          break;
        default:
      }
    }
  }, [activeStepState,
    petDescription,
    petType,
    savePetImage1,
  ]);

  ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
  };

  // const [openModal, setOpenModal] = useState(false);
  // const [cancelForm, setCancelForm] = useState(false);

  const handleClickOpenModal = () => {
    dispatch(adopt_dialog_open_action())
    dispatch(adoptstepper_dialog_open_action())
  };

  const handleClickCloseModal = () => {

    return (
      Swal.fire({
        title: '¿Estás seguro?',
        text: "No podrás revertir los cambios!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#D33',
        cancelButtonColor: '#63C132',
        confirmButtonText: 'Sí, salir!',
        cancelButtonText: "No, cancelar!",
        customClass: 'swal-wide',
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(adoptstepper_dialog_close_action());
          dispatch(reset_action());
          dispatch(reset_form_action());
          setActiveStep(0);
          setAllowContent(false)
          Swal.close()
        }
      })
    )
  };

  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    dispatch(next_step_action())
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
  }

  const handleBack = () => {
    dispatch(back_step_action())
    console.log(id_mascota);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  const [sendPhotos, setSendPhotos] = useState(null)

  const theme = useTheme();

  const fullScreenResponsive = useMediaQuery(theme.breakpoints.down('lg'));
  const fullScreenDialog = useMediaQuery(theme.breakpoints.down('xs'));

  const formRegisterLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: registerPetForm,
  };

  const handleRegisterForm = () => {
    return (
      Swal.fire({
        title: '¿Deseas registrar los datos anteriores?',
        showDenyButton: true,
        confirmButtonColor: '#63C132',
        denyButtonColor: '#D33',
        confirmButtonText: 'Guardar',
        denyButtonText: "No Guardar",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(registry_form_adopt(newPet))
          setSendPhotos(true);
          Swal.fire('Registro exitoso!', '', 'success').then((result) => {
            if (result.isConfirmed) {
              dispatch(adoptstepper_dialog_close_action());
              dispatch(reset_action());
              dispatch(reset_form_action());
              dispatch(get_saci_pets_action());
              setActiveStep(0);
              setAllowContent(false)
              Swal.close()
            }
          })
        } else if (result.isDenied) {
          Swal.fire('Los cambios no han sido guardados', '', 'info')
        }
      })
    )
  }

  if (sendPhotos === true) {
    if (id_mascota !== 0) {
      setTimeout(() => {
        dispatch(upload_pet_image_1(petimage1, id_mascota))
      }, 100);
      setTimeout(() => {
        dispatch(upload_pet_image_2(petimage2, id_mascota))
      }, 100);
      setTimeout(() => {
        dispatch(upload_pet_image_3(petimage3, id_mascota))
      }, 100);
      setTimeout(() => {
        dispatch(upload_pet_image_4(petimage4, id_mascota))
      }, 100);
      setTimeout(() => {
        dispatch(upload_pet_image_5(petimage5, id_mascota))
      }, 100);
      setSendPhotos(false);
    }
  }

  // Open dialog Login
  const handleClickOpenLogin = () => {
    dispatch(adoptstepper_dialog_close_action())
    dispatch(login_dialog_open_action())
    // dispatch(adoptstepper_dialog_open_action())
  };

  // Open dialog Register
  const openRegister = () => {
    // setOpenModal(false);
    dispatch(adoptstepper_dialog_close_action())
    dispatch(register_dialog_open_action())
  }

  // Close dialog login and Register
  const handleClickCloseDialog = () => {
    // setOpenModal(false);
    dispatch(adoptstepper_dialog_close_action())
  }

  return (

    <>
      {/* <Hidden smDown> */}
      {/* <Grid container justify="center"> */}
      <Button
        fullWidth
        onClick={handleClickOpenModal}
        className={classes.adoptionButton}
        // variant="contained"
        color="secondary"
        // color="primary"
        startIcon={<img src={iconAdopt} alt="LogIn" className={classes.iconsMenu} />}
      >
        <ArrowDropDownIcon />
        <Hidden smDown>
          Dar en adopción
          </Hidden>

      </Button>
      {/* </Grid> */}
      {/* </Hidden> */}

      {/* <Hidden mdUp>
        <Button
          onClick={handleClickOpenModal}
          className={classes.adoptionMobileButton}
          variant="text"
          // color="primary"
          startIcon={<img src={petIconGray} alt="LogIn" style={{ width: '40px' }} />}
        >
          <Typography>
            Adopciones
            </Typography>
        </Button>
      </Hidden> */}

      {user ?
        <>
          <Dialog
            style={{ zIndex: 2 }}
            open={adoptDialog && adoptstepperDialog === true}
            onClose={handleClickCloseModal}
            fullWidth
            maxWidth='md'
            fullScreen={fullScreenResponsive}
          >
            <Grid
              container
              justify="flex-end"
              alignItems="flex-start">
              <IconButton className={classes.closeIconButton} edge="end" color="inherit" aria-label="close" onClick={handleClickCloseModal}>
                <CloseIcon className={classes.closeButton} />
              </IconButton>
            </Grid>
            <div className={classes.root}>
              <Hidden only={'xs'}>
                <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Hidden>
              <div>
                {activeStep === steps.length ? (
                  <div>
                    <Box m={10}>
                      <Typography variant="h5" className={classes.instructions}>
                        ¿Todo está listo?
            </Typography>
                      <Lottie
                        options={formRegisterLottieOptions}
                        height={200}
                        width={200}
                      // isPaused={playLottie.registerPetForm}
                      />
                      <Grid container justify="center">
                        Pulsa el botón enviar para registrar tu formulario,
                        </Grid>
                      <Grid container justify="center">
                        Si deseas cambiar algún dato pulsa el botón de atrás
                        </Grid>
                    </Box>
                    <Grid container justify="center">
                      <Button onClick={handleBack} className={classes.button}>
                        Atrás
            </Button>
                      <Button
                        onClick={handleRegisterForm}
                        variant="contained"
                        color="primary"
                        className={classes.button}>
                        Enviar
            </Button>
                    </Grid>
                  </div>
                ) : (
                  <div>
                    <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                    <div>
                      <Grid container justify="center">
                        <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                          Atrás
                          </Button>
                        <Button
                          disabled={allowContent === false}
                          variant="contained"
                          color="primary"
                          onClick={handleNext}
                          className={classes.button}
                        >
                          {activeStep === steps.length - 1 ? 'Siguiente' : 'Siguiente'}
                        </Button>
                      </Grid>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Dialog>
        </>
        :
        <>
          <Dialog
            style={{ zIndex: 2 }}
            open={adoptstepperDialog === true}
            onClose={handleClickCloseDialog}
            fullScreen={fullScreenDialog}
          >
            <Grid container justify="flex-end">
              <Toolbar>
                <IconButton edge="end" color="primary" aria-label="close" onClick={handleClickCloseDialog}>
                  <CloseIcon />
                </IconButton>
              </Toolbar>
            </Grid>
            <div className={classes.rootDialogStart}>
              <Grid container justify="center">
                <Grid item className={classes.titleDialogStart}>
                  <Typography variant='h6'>¡Hola! si ya tienes cuenta Inicia sesión o Regístrate</Typography>
                </Grid>

                <Grid item xs={12}>
                  <Button
                    className={classes.buttonStart}
                    color="primary"
                    variant="contained"
                    size="large"
                    endIcon={<img src={iconSend} alt="LogIn" className={classes.icons2} />}
                    fullWidth
                    type="submit"
                    onClick={handleClickOpenLogin}
                  >
                    Inicia Sesión
                        </Button>
                </Grid>

                <Grid item xs={12} spacing={3} justifyContent="center" >
                  <Button
                    variant="text"
                    size="small"
                    className={classes.buttonSecondary2}
                    onClick={openRegister}
                  >
                    ¿No tienes una cuenta? Regístrate
                    </Button>
                </Grid>
              </Grid>
            </div>
          </Dialog>
        </>
      }
    </>
  );
}
