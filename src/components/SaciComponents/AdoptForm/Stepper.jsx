import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel, Button, Grid, Typography, Box, Hidden, Dialog } from '@material-ui/core';


//components
import PetType from './PetType'
import PetDescription from './PetDescription';
import UserData from './UserData';

//icons
import petIcon from '../../../assets/icons/drawer/pet.svg'



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // padding: '5%',
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
}));

// const [openModal, setOpenModal] = React.useState(false);

//   const handleClickOpenModal = () => {
//     setOpenModal(true);
//   };

//   const handleClickCloseModal = () => {
//     setOpenModal(false);
//   };

// export default function AdoptButton() {
//   const classes = useStyles();
//   return (
//       <React.Fragment>
//           <Button
//               // onClick={handleClickOpenModal}
//               className={classes.adoptionButton}
//               variant="text"
//               // color="primary"
//               startIcon={<img src={petIcon} alt="LogIn" style={{ width: '30px' }} />}
//           >
//               Adopciones
//               </Button>
//       </React.Fragment>
//   )
// }

export function getSteps() {
  return ['Selecciona el tipo de mascota', 'Descripción de tu mascota', 'Ingresa tus datos'];
}

function getStepContent(step) {

  switch (step) {
    case 0:
      return <PetType />;
    case 1:
      return <PetDescription />;
    case 2:
      return <UserData />;
    default:
      return 'Unknown step';
  }
}

// const [openModal, setOpenModal] = React.useState(false);

// const openCloseModal = () => {
//   setModal(!modal);
// }

// export const handleClickOpenModal = () => {
 
//   setOpenModal(true);
// };

// const handleClickCloseModal = () => {
  
//   setOpenModal(false);
// };


export default function HorizontalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();


  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  // const openCloseModal = () => {
  //   setModal(!modal);
  // };
  
  const [openModal, setOpenModal] = React.useState(false);

  const handleClickOpenModal = () => {
    setOpenModal(true);
  };

  const handleClickCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <React.Fragment>
      <React.Fragment>
          <Button
              onClick={handleClickOpenModal}
              className={classes.adoptionButton}
              variant="text"
              // color="primary"
              startIcon={<img src={petIcon} alt="LogIn" style={{ width: '30px' }} />}
          >
              Adopciones
              </Button>
      </React.Fragment>
      <Dialog open={openModal}
              onClose={handleClickCloseModal}
              >
        <div className={classes.root}>
          <Hidden only={'xs'}>
            <Stepper activeStep={activeStep}>

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