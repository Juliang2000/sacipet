/* eslint-disable react-hooks/exhaustive-deps */
import {
  withStyles,
  Switch,
  FormGroup,
  Box,
  Button,
  Dialog,
  FormControlLabel,
  Grid,
  Hidden,
  IconButton,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adopt_me_dialog_action } from '../../../redux/actions/saciPets';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Swal from 'sweetalert2';

//styles
import adoptMeFormStyles from '../../../assets/css/js/adoptMeFormStyles';
//icons
import CloseIcon from '@material-ui/icons/Close';
import useStyles from '../../../assets/css/js/styles';
import {
  get_city_data_action,
  get_department_data_action,
  get_form_data_action,
  update_form_data_action,
} from '../../../redux/actions/adoptFormAction';
import {
  enable_step_two_action,
  get_adopt_me_form_action,
  get_adopt_me_form_name,
  get_adopt_me_form_tel,
  save_adopt_me_form_action,
  update_adopt_me_form_action,
} from '../../../redux/actions/adoptMeFormAction';

// const ColorlibConnector = withStyles({
//     alternativeLabel: {
//         top: 22,
//     },
//     active: {
//         '& $line': {
//             backgroundImage:
//                 'linear-gradient( 20deg,rgb(99, 193, 50) 100%,rgb(99, 193, 50) 50%,rgb(197, 232, 183) 100%)',
//         },
//     },
//     completed: {
//         '& $line': {
//             backgroundImage:
//                 'linear-gradient( 20deg,rgb(99, 193, 50) 100%,rgb(99, 193, 50) 50%,rgb(197, 232, 183) 100%)',
//         },
//     },
//     line: {
//         height: 3,
//         border: 0,
//         backgroundColor: '#eaeaf0',
//         borderRadius: 1,
//     },
// })(StepConnector);

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#63c132',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#63c132',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

export function CustomizedSwitch({stateTerm, setStateTerm}) {
  const dispatch = useDispatch();
  const { formData } = useSelector((state) => state.adoptMeForm);


  const handleChange = (event) => {
    setStateTerm({ ...stateTerm, [event.target.name]: event.target.checked });
  };

  const { terminos } = stateTerm;

  useEffect(() => {
    dispatch(
      update_adopt_me_form_action({
        ...formData,
        terminos,
      })
    );
  }, [stateTerm]);

  return (
    <Typography component="div">
      <Grid
        component="label"
        container
        alignItems="center"
        justify="center"
        spacing={1}
      >
        <Grid item>No</Grid>
        <Grid item>
          <IOSSwitch
            checked={stateTerm.terminos}
            onChange={handleChange}
            name="terminos"
          />
        </Grid>
        <Grid item>Si</Grid>
      </Grid>
    </Typography>
  );
}

export function getSteps() {
  return ['Tus Datos Personales', 'Sobre la Adopción'];
}

export function getStepContent(step) {
  switch (step) {
    case 0:
      return <UserData />;
    case 1:
      return <AdoptQuestions />;

    default:
  }
}

export default function AdoptMeForm() {


  const [stateTerm, setStateTerm] = useState({
    terminos: false,
  });


  const { nombres, telefono, correo } = useSelector(
    (state) => state.login.user
  );
  const { user } = useSelector((state) => state.login);
  const { formData } = useSelector((state) => state.adoptMeForm);
  const { stepTwo } = useSelector((state) => state.adoptMeForm);
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const classes = adoptMeFormStyles();
  // const fullScreenResponsive = useMediaQuery(theme.breakpoints.down('sm'));
  const dispatch = useDispatch();
  const { adoptMeDialog } = useSelector((state) => state.saciPets);
  useEffect(() => {
    console.log(adoptMeDialog);
  }, [adoptMeDialog]);

  useEffect(() => {
    if (nombres?.length) {
      console.log(user);
      dispatch(
        get_adopt_me_form_action({
          ...formData,
          nombre_adoptante: `${nombres}`,
          telefono: `${telefono}`,
          correo: `${correo}`,
        })
      );
    }
  }, [nombres]);

  const handleClickClose = () => {
    return Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir los cambios!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#D33',
      cancelButtonColor: '#63C132',
      confirmButtonText: 'Sí, salir!',
      cancelButtonText: 'No, cancelar!',
      customClass: 'swal-wide',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(adopt_me_dialog_action(false));
        Swal.close();
      }
    });
  };

  const handleClickRegister = () => {
    return Swal.fire({
      title: '¿Deseas registrar los datos anteriores?',
      showDenyButton: true,
      confirmButtonColor: '#63C132',
      denyButtonColor: '#D33',
      confirmButtonText: 'Guardar',
      denyButtonText: 'Volver',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Registro exitoso!', '', 'success');
        dispatch(save_adopt_me_form_action(formData));
      } else if (result.isDenied) {
        Swal.fire('Los cambios no han sido guardados', '', 'info');
      }
    });
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <>
      <Dialog
        style={{ zIndex: 2 }}
        open={adoptMeDialog}
        onClose={handleClickClose}
        fullWidth
        maxWidth="md"
      >
        <Grid container justify="flex-end" alignItems="flex-start">
          <IconButton
            className={classes.closeIconButton}
            edge="end"
            color="inherit"
            aria-label="close"
            onClick={handleClickClose}
          >
            <CloseIcon className={classes.closeButton} />
          </IconButton>
        </Grid>
        <div className={classes.root}>
          <Hidden only={'xs'}>
            <Stepper alternativeLabel activeStep={activeStep}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Hidden>
          <div>
            {activeStep === steps.length ? (
              <div>
                <Grid
                  style={{
                    margin: '2%',
                    marginLeft: '10%',
                    marginRight: '10%',
                  }}
                >
                  <Grid container justify="center">
                    <Typography variant="h5">
                      ¡Estás a un paso de realizar tu solicitud!
                    </Typography>
                  </Grid>
                  <Grid container style={{ marginTop: '5%' }} justify="center">
                    <Typography>
                      Acepta los términos y condiciones del siguiente contrato
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    style={{ marginTop: '2%', display: 'flex' }}
                    justify="center"
                    alignItems="center"
                  >
                    <CustomizedSwitch stateTerm = {stateTerm} setStateTerm= {setStateTerm}/>
                  </Grid>
                </Grid>
                <Grid container style={{ marginBottom: '2%' }} justify="center">
                  <Button className={classes.button} onClick={handleBack}>
                    Atrás
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={handleClickRegister}
                    disabled={stateTerm.terminos ? false : true}
                  >
                    Enviar
                  </Button>
                </Grid>
              </div>
            ) : (
              <div>
                <Typography className={classes.instructions}>
                  {getStepContent(activeStep)}
                </Typography>
                <div>
                  <Grid
                    container
                    style={{ marginBottom: '2%' }}
                    justify="center"
                  >
                    <Button
                      style={{ textTransform: 'none' }}
                      disabled={activeStep === 0}
                      className={classes.button}
                      onClick={handleBack}
                    >
                      Atrás
                    </Button>
                    <Button
                      style={{ textTransform: 'none' }}
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      onClick={handleNext}
                      disabled={stepTwo === false}
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
  );
}

function UserData() {
  const dispatch = useDispatch();
  // const idStore = useSelector((state) => state.saciPets.petSelected);
  const nombreStore = useSelector(
    (state) => state.adoptMeForm.formData.nombre_adoptante
  );
  const idUsuarioStore = useSelector((state) => state.login.user.id);
  const correoStore = useSelector((state) => state.adoptMeForm.formData.correo);
  const telefonoStore = useSelector(
    (state) => state.adoptMeForm.formData.telefono
  );
  const direccionStore = useSelector(
    (state) => state.adoptMeForm.formData.direccion_adoptante
  );
  const idUndeStore = useSelector(
    (state) => state.adoptMeForm.formData.id_unde
  );
  const idCodigoStore = useSelector(
    (state) => state.adoptMeForm.formData.id_codigo
  );
  const ocupacionStore = useSelector(
    (state) => state.adoptMeForm.formData.ocupacion
  );
  const estadoCivilStore = useSelector(
    (state) => state.adoptMeForm.formData.estado_civil
  );
  
  const { departments, cities } = useSelector((state) => state.adoptFormData);

  const { userPetData } = useSelector((state) => state.userPets);

  const [allowCities, setAllowCities] = useState(false);
  const [userData, setUserData] = useState({
    nombre_adoptante: `${nombreStore}`,
    direccion_adoptante: `${direccionStore}`,
    id_codigo: `${idUndeStore}`,
    localidad: `${idCodigoStore}`,
    telefono: `${telefonoStore}`,
    correo: `${correoStore}`,
    ocupacion: `${ocupacionStore}`,
    estado_civil: `${estadoCivilStore}`,
    id_mascota: `${userPetData.id_mascota}`,
    // id_usuario: `${idUsuarioStore}`,
    // id: `${idStore}`,
    id: `${idUsuarioStore}`,
  });
  const {
    nombre_adoptante,
    correo,
    direccion_adoptante,
    localidad,
    id_codigo,
    telefono,
    ocupacion,
    estado_civil,
  } = userData;
  const idCodigoData = {
    id_unde: `${id_codigo}`,
  };

  useEffect(() => {
    dispatch(get_department_data_action());
  }, []);

  useEffect(() => {
    if (cities.length !== 0) {
      setAllowCities(true);
    } else {
      setAllowCities(false);
    }
  }, [cities]);

  useEffect(() => {
    if (id_codigo) {
      dispatch(get_city_data_action(idCodigoData));
    }
  }, [id_codigo]);

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    if (
      nombre_adoptante.length &&
      correo.length &&
      direccion_adoptante.length &&
      id_codigo.length &&
      localidad.length &&
      telefono.length &&
      estado_civil.length &&
      ocupacion.length !== 0
    ) {
      console.log('todos los campos llenos');
      dispatch(enable_step_two_action(true));
      dispatch(update_adopt_me_form_action(userData));
    } else {
      console.log('campos sin llenar');
      dispatch(enable_step_two_action(false));
    }
  }, [userData]);

  return (
    <div>
      <Grid style={{ margin: '2%', marginLeft: '10%', marginRight: '10%' }}>
        <Grid container justify="center">
          <Typography variant="h6">
            Tus datos Personales (Campos requeridos)
          </Typography>
        </Grid>
        <Grid container spacing={1} style={{ marginTop: '2%' }}>
          <Grid item xl={6} lg={6}>
            <TextField
              label="Nombres y Apellidos"
              type="text"
              name="nombre_adoptante"
              variant="outlined"
              defaultValue={nombreStore}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xl={6} lg={6}>
            <TextField
              label="Dirección"
              type="text"
              name="direccion_adoptante"
              variant="outlined"
              defaultValue={direccionStore}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="demo-simple-select-outlined-label">
                Departamento
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                name="id_codigo"
                label="Departamento"
                onChange={handleChange}
                defaultValue={idUndeStore}
              >
                {departments.map((item) => (
                  <MenuItem key={item.id_codigo} value={item.id_codigo}>
                    {item.descripcion}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="demo-simple-select-outlined-label">
                Ciudad o municipio
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                name="localidad"
                label="Ciudad o municipio"
                onChange={handleChange}
                disabled={allowCities === false}
                defaultValue={idCodigoStore}
              >
                {cities.map((item) => (
                  <MenuItem key={item.id_codigo} value={item.descripcion}>
                    {item.descripcion}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xl={4} lg={4}>
            <TextField
              label="Teléfono"
              type="text"
              name="telefono"
              variant="outlined"
              defaultValue={telefonoStore}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xl={4} lg={4}>
            <TextField
              label="E-mail"
              type="email"
              name="correo"
              variant="outlined"
              defaultValue={correoStore}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xl={4} lg={4}>
            <TextField
              label="Ocupación"
              type="text"
              name="ocupacion"
              variant="outlined"
              onChange={handleChange}
              fullWidth
              defaultValue={ocupacionStore}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="demo-simple-select-outlined-label">
                Estado Civil
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                name="estado_civil"
                label="Estado Civil"
                onChange={handleChange}
                value={userData.estado_civil}
                defaultValue={estadoCivilStore}
              >
                <MenuItem value="soltero">Soltero(a)</MenuItem>
                <MenuItem value="casado">Casado(a)</MenuItem>
                <MenuItem value="divorciado">Divorciado(a)</MenuItem>
                <MenuItem value="union_libre">Unión libre</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

function AdoptQuestions() {
  const dispatch = useDispatch();
  const { formData } = useSelector((state) => state.adoptMeForm);
  const { procedure } = useSelector((state) => state.saciPets);
  const [questionData, setQuestionData] = useState({
    pregunta_1: '',
    pregunta_2: '',
    pregunta_3: '',
    pregunta_4: '',
    pregunta_5: '',
    pregunta_6: '',
  });

  const {
    pregunta_1,
    pregunta_2,
    pregunta_3,
    pregunta_4,
    pregunta_5,
    pregunta_6,
  } = questionData;

  const handleChange = (e) => {
    setQuestionData({
      ...questionData,
      [e.target.name]: e.target.value,
    });
  };

  // const [age, setAge] = React.useState('');

  // const handleChangePrueba = (event) => {
  //   setAge(event.target.value);
  // };

  useEffect(() => {
    dispatch(
      update_adopt_me_form_action({
        ...formData,
        pregunta_1,
        pregunta_2,
        pregunta_3,
        pregunta_4,
        pregunta_5,
        pregunta_6,
      })
    );
  }, [questionData]);

  return (
    <>
      <Grid style={{ margin: '2%', marginLeft: '10%', marginRight: '10%' }}>
        {procedure === 1 ? (
          <Grid container justify="center">
            <Typography variant="h5">
              Sobre la Adopción (Campos Opcionales)
            </Typography>
            <Grid container spacing={1} style={{ marginTop: '2%' }}>
              <Grid item xl={12} lg={12}>
                <TextField
                  label="¿Por qué deseas adoptar a esta mascota?"
                  type="text"
                  name="pregunta_1"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xl={12} lg={12}>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel id="demo-simple-select-outlined-label">
                    ¿Tienes más mascotas?
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    name="pregunta_2"
                    label="¿Tienes más mascotas?"
                    fullwidth
                    value={questionData.pregunta_2}
                    onChange={handleChange}
                  >
                    <MenuItem value="Si">Si</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xl={12} lg={12}>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel id="demo-simple-select-outlined-label">
                    ¿Tienes espacio suficiente para la comodidad de la mascota?
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    name="pregunta_3"
                    label="¿Tienes espacio suficiente para la comodidad de la mascota?"
                    fullwidth
                    value={questionData.pregunta_3}
                    onChange={handleChange}
                  >
                    <MenuItem value="Si">Si</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xl={12} lg={12}>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel id="demo-simple-select-outlined-label">
                    ¿Si te ausentas, puedes dejar a cargo a tu mascota con
                    alguien más?
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    name="pregunta_4"
                    label="¿Si te ausentas, puedes dejar a cargo a tu mascota con alguien más?"
                    fullwidth
                    value={questionData.pregunta_4}
                    onChange={handleChange}
                  >
                    <MenuItem value="Si">Si</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xl={12} lg={12}>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel id="demo-simple-select-outlined-label">
                    ¿Estarías a disposición  para llevar periódicamente a la mascota con un veterinario?
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    name="pregunta_5"
                    label="¿Estarías a disposición para llevar periódicamente a la mascota con un veterinario?"
                    fullwidth
                    value={questionData.pregunta_5}
                    onChange={handleChange}
                  >
                    <MenuItem value="Si">Si</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xl={12} lg={12}>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel id="demo-simple-select-outlined-label">
                    ¿Estarías a disposición de vacunar a tu mascota?
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    name="pregunta_6"
                    label="¿Estarías a disposición de vacunar a tu mascota?"
                    fullwidth
                    value={questionData.pregunta_6}
                    onChange={handleChange}
                  >
                    <MenuItem value="Si">Si</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        ) : procedure === 2 ? (
          <Grid container justify="center">
            <Typography variant="h5">
              Sobre La Mascota Recuperada (Campos Opcionales)
            </Typography>
            <Grid container spacing={1} style={{ marginTop: '2%' }}>
              <Grid item xl={12} lg={12}>
                <TextField
                  label="¿Dónde perdió su mascota?"
                  type="text"
                  name="pregunta_1"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xl={12} lg={12}>
                <TextField
                  label="¿Número de contacto?"
                  type="tel"
                  name="pregunta_2"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xl={12} lg={12}>
                <TextField
                  label="¿Número chip mascota (si tiene)?"
                  type="number"
                  name="pregunta_3"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xl={12} lg={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  name="pregunta_4"
                  placeholder="¿Observaciones sobre la mascota encontrada?"
                  multiline
                  rows={4}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Grid>
        ) : procedure === 3 ? (
          <Grid container justify="center">
            <Typography variant="h5">
              Sobre La Mascota Perdida (Campos Opcionales)
            </Typography>
            <Grid container spacing={1} style={{ marginTop: '2%' }}>
              <Grid item xl={12} lg={12}>
                <TextField
                  label="¿Dónde encontró la mascota?"
                  type="text"
                  name="pregunta_1"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xl={12} lg={12}>
                <TextField
                  label="¿Número de contacto?"
                  type="tel"
                  name="pregunta_2"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xl={12} lg={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  name="pregunta_3"
                  placeholder="¿Observaciones sobre la mascota perdida?"
                  multiline
                  rows={4}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Grid>
        ) : null}
      </Grid>
    </>
  );
}
