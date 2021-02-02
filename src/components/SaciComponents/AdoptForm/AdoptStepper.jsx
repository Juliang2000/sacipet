import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel, Button, Grid, Typography, Box, Hidden, Dialog, IconButton } from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import StepConnector from '@material-ui/core/StepConnector';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

//Redux
import { useSelector } from 'react-redux';



//components
import PetType from './PetType'
import PetDescription from './PetDescription';
import PetImages from './PetImages';


//icons
import petIcon from '../../../assets/icons/drawer/pet.svg'
import petIconGray from '../../../assets/icons/drawer/pet_gray.svg'
import CloseIcon from '@material-ui/icons/Close';
import iconSend from '../../../assets/icons/send.svg';

import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';


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
    padding: '50px',
    textAlign: 'center',
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
  }
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

  const { user } = useSelector(state => state.login);
  // const user = true;
  const classes = useStyles();

  // const [skipped, setSkipped] = React.useState(new Set());



  // const isStepOptional = (step) => {
  //   return step === 1;
  // };

  // const isStepSkipped = (step) => {
  //   return skipped.has(step);
  // };


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

  const [openModal, setOpenModal] = React.useState(false);

  const handleClickOpenModal = () => {
    setOpenModal(true);
  };

  const handleClickCloseModal = () => {
    setOpenModal(false);
  };


  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const theme = useTheme();

  const fullScreenResponsive = useMediaQuery(theme.breakpoints.down('sm'));


  return (

    <>
      <Hidden smDown>
        {/* <Grid container justify="center"> */}
        <Button
          fullWidth
          onClick={handleClickOpenModal}
          className={classes.adoptionButton}
          // variant="contained"
          color="secondary"
          // color="primary"
          startIcon={<img src={petIcon} alt="LogIn" style={{ width: '30px' }} />}
        >
          Adoptar
              </Button>
        {/* </Grid> */}
      </Hidden>

      <Hidden mdUp>
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
      </Hidden>

      {user ?
        <>
          <Dialog
            open={openModal}
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
                      <Typography variant="h6" className={classes.instructions}>
                        Confirma el formulario de adopción
            </Typography>
                    </Box>
                    <Grid container justify="center">
                      <Button onClick={handleReset} className={classes.button}>
                        Reiniciar
            </Button>
                      <Button
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
            open={openModal}
            onClose={handleClickCloseModal}
          >
            <div className={classes.rootDialogStart}>
              <Grid container justify="center">
                <Grid item className={classes.titleDialogStart}>
                  <Typography variant='h6'>¡Hola! si ya tienes cuenta Inicia sesión o Regístrate</Typography>
                </Grid>

                <Grid item xs={12}>
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", filter: "contrast(1)" }}
                  >
                    <Button
                      className={classes.buttonStart}
                      color="primary"
                      variant="contained"
                      size="large"
                      endIcon={<img src={iconSend} alt="LogIn" className={classes.icons2} />}
                      fullWidth
                      type="submit"
                    >
                      Inicia Sesión
                        </Button>
                  </Link>
                </Grid>

                <Link
                  to="/Register"
                  style={{ textDecoration: "none", filter: "contrast(1)" }}
                >
                  <Grid item xs={12} spacing={3} justifyContent="center" >
                    <Button
                      variant="text"
                      size="small"
                      className={classes.buttonSecondary2}
                    >
                      ¿No tienes una cuenta? Regístrate
                            </Button>
                  </Grid>
                </Link>
              </Grid>
            </div>
          </Dialog>

        </>
      }

      {/* <Dialog
        open={openModal}
        onClose={handleClickCloseModal}
      >
        <Grid container>
          <Grid item>
            <Tipography>Hola, si ya tienes cuenta Inicia sesión o Registrate con nosotros!</Tipography>
          </Grid>
          <Grid item xs={12}>
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
          </Grid>

          <Link
            to="/Register"
            style={{ textDecoration: "none", filter: "contrast(1)" }}
          >
            <Grid item xs={12} spacing={3}>
              <Button
                variant="text"
                size="small"
                className={classes.buttonSecondary2}
              >
                ¿No tienes una cuenta? Regístrate
                            </Button>
            </Grid>
          </Link>
        </Grid>
      </Dialog> */}


    </>
  );
}
