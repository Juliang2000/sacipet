import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel, Button, Grid, Typography, Box, Hidden, Dialog } from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import StepConnector from '@material-ui/core/StepConnector';


//components
import PetType from './PetType'
import PetDescription from './PetDescription';
import UserData from './UserData';

//icons
import petIcon from '../../../assets/icons/drawer/pet.svg'
import petIconGray from '../../../assets/icons/drawer/pet_gray.svg'

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
      return
    default:
      return 'Unknown step';
  }
}


export default function AdoptStepper() {


  const classes = useStyles();

  const [skipped, setSkipped] = React.useState(new Set());



  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };


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

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const [openModal, setOpenModal] = React.useState(false);

  const handleClickOpenModal = () => {
    setOpenModal(true);
  };

  const handleClickCloseModal = () => {
    setOpenModal(false);
  };


    const [activeStep, setActiveStep] = React.useState(1);
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

    return (
      <React.Fragment>
        <React.Fragment>
          <Hidden smDown>
            <Button
              onClick={handleClickOpenModal}
              className={classes.adoptionButton}
              variant="text"
              // color="primary"
              startIcon={<img src={petIcon} alt="LogIn" style={{ width: '40px' }} />}
            >
              Adopciones
              </Button>
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
        </React.Fragment>
        <Dialog
          maxWidth='xl'
          open={openModal}
          onClose={handleClickCloseModal}
        >
          <div className={classes.root}>
            <Hidden only={'xs'}>
              {/* <Stepper activeStep={activeStep}>

              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                if (isStepOptional(index)) {
                  labelProps.optional = <Typography variant="caption"></Typography>;
                }
                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}

            </Stepper> */}

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
      </React.Fragment>
    );
  }
