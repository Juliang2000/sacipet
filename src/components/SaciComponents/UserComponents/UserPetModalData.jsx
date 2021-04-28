import {
  // Box,
  Button,
  Card,
  // CardHeader,
  CardMedia,
  Dialog,
  // Divider,
  // FormControl,
  Grid,
  IconButton,
  // InputLabel,
  // Menu,
  // MenuItem,
  // Select,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core';

import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';

import SaveIcon from '@material-ui/icons/Save';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  // user_pets_modal_action,
  set_user_pet_modal_data_action
} from '../../../redux/actions/userPetsAction';
//icons
import CloseIcon from '@material-ui/icons/Close';
import userPetsModalStyles from '../../../assets/css/js/userPetsModalStyles';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import EditIcon from '@material-ui/icons/Edit';
// import CheckIcon from '@material-ui/icons/CheckCircleRounded';
// import CancelIcon from '@material-ui/icons/CancelRounded';

import CarouselPhotos from '../Adoption/CarouselPhotos';
import { adoptstepper_dialog_open_action } from '../../../redux/actions/loginAction';
import {
  send_question_pet_action,
  send_answer_pet_action,
  get_question_answer_pet_action,
} from '../../../redux/actions/questionPetsAction';
import { useForm } from 'react-hook-form';

export default function UserPetModalData() {
  const dispatch = useDispatch();
  // const { mascotas } = useSelector((state) => state.saciPets);
  const { userPetId } = useSelector((state) => state.userPets);
  const { userPetModalData } = useSelector((state) => state.userPets);
  const { userPetData } = useSelector((state) => state.userPets);
  const { user, adoptstepperDialog } = useSelector((state) => state.login);

  // traer preguntas y respuestas
  const { questionAnswerData } = useSelector((state) => state.questionPets);

  const { register, errors, handleSubmit: handleSubmitQuestion } = useForm({
    mode: 'onChange'
  });

  //////////////////////////////////////////////////
  //pregunta
  const [petdata, setPetData] = useState({
    primer_usuario: `${userPetData.id_usuario}`,
    segundo_usuario: `${user.id}`,
    mensaje: '',
    id_mascota: `${userPetData.id_mascota}`
  });

  console.log(petdata);

  useEffect(() => {
    if (userPetId !== null) {
      setPetData({
        primer_usuario: `${userPetData.id_usuario}`,
        segundo_usuario: `${user.id}`,
        mensaje: '',
        id_mascota: `${userPetData.id_mascota}`
      });
    }
  }, [userPetId, user]);

  //////////////////////////////////////////////////
  //ObtenerPreguntaRespuesta

  // const {primer_usuario, id_mascota} = petdata

  const [questionData, setQuestionData] = useState({
    primer_usuario: `${userPetData.id_usuario}`,
    id_mascota: `${userPetData.id_mascota}`
    // primer_usuario: `${primer_usuario}`,
    // id_mascota: `${id_mascota}`
  });

  console.log(questionData);

  useEffect(() => {
    if (userPetId !== null) {
      setQuestionData({
        primer_usuario: `${userPetData.id_usuario}`,
        id_mascota: `${userPetData.id_mascota}`
      });
    }
  }, [userPetId]);

  //////////////////////////////////////////////////

  const handleChangeMessage = (event) => {
    const { name, value } = event.target;
    setPetData({ ...petdata, [name]: value });
  };

  const onSubmitQuestion = async (data, e) => {
    e.preventDefault();
    e.target.reset();
    if (user.nombres.length !== 0) {
      await dispatch(send_question_pet_action(petdata));
      dispatch(get_question_answer_pet_action(questionData));
    }
  };

  const handleSubmitDialog = () => {
    if (adoptstepperDialog !== true) {
      dispatch(adoptstepper_dialog_open_action());
    }
  };

  useEffect(() => {
    if (questionData !== 0 && userPetModalData) {
      dispatch(get_question_answer_pet_action(questionData));
    }
  }, [questionData]);

  // if (questionAnswer !== null) {
  //   questionAnswer = questionAnswer.reverse();
  //   // if(questionAnswer === null) {
  //   //   questionAnswer = questionAnswer.reverse();
  //   // }
  // }

  //   useEffect(() => {
  //   if (userPetId !== null) {
  //     setQuestionData({
  //       primer_usuario: `${userPetData.id_usuario}`,
  //       id_mascota: `${userPetData.id_mascota}`
  //     });
  //     // dispatch(get_question_pet_action(questionData));
  //   }
  // }, [userPetId, userPetData]);

  // useEffect(() => {
  //   if (userPetId !== null) {
  //     setQuestionData({
  //       primer_usuario: `${userPetData.id_usuario}`,
  //       id_mascota: `${userPetData.id_mascota}`
  //     });
  //   }
  // }, [userPetId, user]);

  // console.log(questionData);

  // const [petData, setPetData] = useState({
  //   id_mascota: '',
  //   nombre_mascota: '',
  //   edad_mascota: '',
  //   escala_edad: '',
  //   descripcion_mascota: '',
  //   tipo_tramite: '',
  //   esterilizado: '',
  //   id_codigo: '',
  //   id_municipio: '',
  //   municipio: '',
  //   id_departamento: '',
  //   departameto: '',
  //   id_pais: '',
  //   pais: '',
  //   id_color: '',
  //   color: '',
  //   id_raza: '',
  //   raza: '',
  //   id_tipo_mascota: '',
  //   id_tamanio: '',
  //   tamanio: '',
  //   genero_mascota: '',
  //   tipo: '',
  //   id_usuario: '',
  //   nombres: '',
  //   id_mascotaa: '',
  //   fotos: '',
  //   vacunas: ''
  // });

  const classes = userPetsModalStyles();

  // const [editData, setEditData] = useState({
  //   name: false,
  //   age: false,
  //   race: false,
  //   color: false,
  //   genre: false,
  //   sterilized: false,
  //   department: false,
  //   city: false,
  //   vaccines: false,
  //   description: false,
  // });

  // const {
  //   name,
  //   age,
  //   race,
  //   color,
  //   genre,
  //   sterilized,
  //   department,
  //   city,
  //   vaccines,
  //   description,
  // } = editData;

  // const [actionType, setActionType] = useState(null);
  const theme = useTheme();
  const baseURL = process.env.REACT_APP_BACKEND_URL;
  //   const [petMenu, setPetMenu] = useState(false);
  //   const [anchorEl, setAnchorEl] = useState(null);
  //   const isMobile = useMediaQuery(theme.breakpoints.down('xs'), {
  //     defaultMatches: true,
  //   });

  // useEffect(() => {
  //   if (userPetId !== null) {
  //     setPetData(userPetData);
  //   }
  // }, [userPetId]);

  // useEffect(() => {
  //   switch (actionType) {
  //     case 'edit-name':
  //       setEditData({ ...editData, name: true });
  //       break;
  //     case 'edit-age':
  //       setEditData({ ...editData, age: true });
  //       break;
  //     case 'edit-race':
  //       setEditData({ ...editData, race: true });
  //       break;
  //     case 'edit-color':
  //       setEditData({ ...editData, color: true });
  //       break;
  //     case 'edit-genre':
  //       setEditData({ ...editData, genre: true });
  //       break;
  //     case 'edit-sterilized':
  //       setEditData({ ...editData, sterilized: true });
  //       break;
  //     case 'edit-department':
  //       setEditData({ ...editData, department: true });
  //       break;
  //     case 'edit-city':
  //       setEditData({ ...editData, city: true });
  //       break;
  //     case 'edit-vaccines':
  //       setEditData({ ...editData, vaccines: true });
  //       break;
  //     case 'edit-description':
  //       setEditData({ ...editData, description: true });
  //       break;
  //     case 'cancel-name':
  //       setEditData({ ...editData, name: false });
  //       break;
  //     case 'cancel-age':
  //       setEditData({ ...editData, age: false });
  //       break;
  //     case 'cancel-race':
  //       setEditData({ ...editData, race: false });
  //       break;
  //     case 'cancel-color':
  //       setEditData({ ...editData, color: false });
  //       break;
  //     case 'cancel-genre':
  //       setEditData({ ...editData, genre: false });
  //       break;
  //     case 'cancel-sterilized':
  //       setEditData({ ...editData, sterilized: false });
  //       break;
  //     case 'cancel-department':
  //       setEditData({ ...editData, department: false });
  //       break;
  //     case 'cancel-city':
  //       setEditData({ ...editData, city: false });
  //       break;
  //     case 'cancel-vaccines':
  //       setEditData({ ...editData, vaccines: false });
  //       break;
  //     case 'cancel-description':
  //       setEditData({ ...editData, description: false });
  //       break;
  //     default:
  //   }
  // }, [actionType]);
  //   const handleClickSave = () => {};
  //   const handleClickCancel = () => {};
  const fullScreenResponsive = useMediaQuery(theme.breakpoints.down('xl'));

  function createData(description, data) {
    return { description, data };
  }

  let escala;

  switch (userPetData.escala_edad) {
    case '1':
      escala = 'Semanas';
      break;
    case '2':
      escala = 'Meses';
      break;
    case '3':
      escala = 'Años';
      break;
    default:
  }

  switch (userPetData.esterilizado) {
    case '0':
      userPetData.esterilizado = 'No';
      break;
    case '1':
      userPetData.esterilizado = 'Si';
      break;
    default:
  }

  switch (userPetData.telefono1) {
    case null:
      userPetData.telefono1 = 'Teléfono Principal No Disponible';
      break;
    default:
  }

  switch (userPetData.telefono2) {
    case null:
      userPetData.telefono2 = 'Teléfono Secundario No Disponible';
      break;
    default:
  }

  switch (userPetData.correo) {
    case null:
      userPetData.correo = 'Correo No Disponible';
      break;
    default:
  }

  const rows = [
    createData('Nombre', userPetData.nombre_mascota),
    createData('Edad', `${userPetData.edad_mascota} ${escala}`),
    createData('Raza', userPetData.raza),
    createData('Color', userPetData.color),
    createData('Género', userPetData.tipo),
    createData('Esterilizado', userPetData.esterilizado),
    createData('Departamento', userPetData.departameto),
    createData('Ciudad o Municipio', userPetData.municipio),
    createData('Vacunas', userPetData.vacunas),
    createData('Descripción', userPetData.descripcion_mascota)
  ];

  const rows2 = [
    createData('Teléfono Principal', userPetData.telefono1),
    createData('Teléfono Secundario', userPetData.telefono2),
    createData('Correo', userPetData.correo)
  ];

  let petPhoto = userPetData.fotos;

  let arrayDeCadenas = 0;

  if (petPhoto.length !== 0) {
    arrayDeCadenas = petPhoto.split(',');
  }

  var ele1 = parseInt(arrayDeCadenas[0]);
  var ele2 = parseInt(arrayDeCadenas[1]);
  var ele3 = parseInt(arrayDeCadenas[2]);
  var ele4 = parseInt(arrayDeCadenas[3]);
  var ele5 = parseInt(arrayDeCadenas[4]);

  const [items, setItems] = useState([
    {
      imgPath: null
    }
  ]);

  useEffect(() => {
    switch (arrayDeCadenas.length) {
      case 1:
        setItems([
          {
            imgPath: `${baseURL}${ele1}.jpg`
          }
        ]);

        break;

      case 2:
        setItems([
          {
            imgPath: `${baseURL}${ele1}.jpg`
          },
          {
            imgPath: `${baseURL}${ele2}.jpg`
          }
        ]);
        break;

      case 3:
        setItems([
          {
            imgPath: `${baseURL}${ele1}.jpg`
          },
          {
            imgPath: `${baseURL}${ele2}.jpg`
          },
          {
            imgPath: `${baseURL}${ele3}.jpg`
          }
        ]);
        break;

      case 4:
        setItems([
          {
            imgPath: `${baseURL}${ele1}.jpg`
          },
          {
            imgPath: `${baseURL}${ele2}.jpg`
          },
          {
            imgPath: `${baseURL}${ele3}.jpg`
          },
          {
            imgPath: `${baseURL}${ele4}.jpg`
          }
        ]);
        break;

      case 5:
        setItems([
          {
            imgPath: `${baseURL}${ele1}.jpg`
          },
          {
            imgPath: `${baseURL}${ele2}.jpg`
          },
          {
            imgPath: `${baseURL}${ele3}.jpg`
          },
          {
            imgPath: `${baseURL}${ele4}.jpg`
          },
          {
            imgPath: `${baseURL}${ele5}.jpg`
          }
        ]);
        break;

      default:
        break;
    }
  }, [userPetData.fotos]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const [answerData1, setAnswerData1] = useState({
    // respuesta: '',
    respuesta: ''
  })


  const [answerData, setAnswerData] = useState({
    respuesta: '',
    id: `${answerData1.respuesta}`
  })

  const handleChangeAnswer = (event) => {

    const { name, value } = event.target;
    setAnswerData({ ...answerData, [name]: value });

    const { id } = event.target;
    setAnswerData1({ ...answerData1, [name]: id });
    // const { hola } = id.target;
    // console.log(id)
  };

  useEffect(() => {
    setAnswerData({
      respuesta: `${answerData.respuesta}`,
      id: `${answerData1.respuesta}`
    });
  }, [answerData1]);

  // useEffect(() => {
  //   setAnswerData({
  //     respuesta: '',
  //     id: `${answerData1.id}`
  //   })
  // }, [setAnswerData1])

  const onSubmitAnswer = (e) => {
    e.preventDefault();
    dispatch(send_answer_pet_action(answerData));
  };

  return (
    <>
      {userPetData ? (
        <Dialog
          style={{ zIndex: 1 }}
          fullScreen={fullScreenResponsive}
          open={userPetModalData === true}
          onClose={() => dispatch(set_user_pet_modal_data_action(false))}
          className={classes.dialogContainer}
        >
          <Grid container justify="flex-end">
            <Grid item>
              <IconButton
                className={classes.closeIconButton}
                edge="end"
                color="primary"
                aria-label="close"
                onClick={() => dispatch(set_user_pet_modal_data_action(false))}
              >
                <CloseIcon className={classes.closeButton} />
              </IconButton>
            </Grid>
          </Grid>

          <Grid
            container
            justify="center"
            style={{ width: '100%', marginBottom: '50px' }}
            spacing={5}
          >
            <Grid item>
              <Grid
                container
                spacing={2}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ backgroundSize: 'contain' }}
              >
                {items.map((prueba) => (
                  <Grid item key={prueba.imgPath}>
                    <Card>
                      <CardMedia>
                        <img
                          src={prueba.imgPath}
                          alt=""
                          style={{
                            width: '100px',
                            height: '100px',
                            objectFit: 'contain'
                          }}
                        />
                      </CardMedia>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid item xs={4}>
              <Card>
                <CarouselPhotos itemPets={userPetData.fotos} />
              </Card>
            </Grid>
          </Grid>

          {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Open full-screen dialog
          </Button> */}

          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            style={{ opacity: 0.8 }}
          >
            <Grid container justify="flex-end">
              <Grid item>
                <IconButton
                  className={classes.closeIconButton}
                  edge="end"
                  color="primary"
                  aria-label="close"
                  onClick={handleClose}
                >
                  <CloseIcon className={classes.closeButton} />
                </IconButton>
              </Grid>
            </Grid>
            <CarouselPhotos itemPets={userPetData.fotos} />
          </Dialog>

          <Grid
            container
            className={classes.root}
            justify="center" /* alignItems="center" */
          >
            {/* <Grid item xs={12}>
              <Typography
                variant="h4"
                align="center"
                style={{ paddingBottom: '50px' }}
              >
                Información De Mascota
              </Typography>
            </Grid> */}

            <Grid item style={{ marginRight: 40 }}>
              <TableContainer component={Paper} className={classes.paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Descripción Mascota</TableCell>
                      <TableCell>Información Mascota</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody className={classes.tr}>
                    {rows.map((row) => (
                      <TableRow key={row.description}>
                        <TableCell
                          component="th"
                          scope="row"
                          style={{ color: '#63c132' }}
                        >
                          {row.description}
                        </TableCell>
                        <TableCell>{row.data}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>

            <Grid>
              <Grid container style={{ marginBottom: 40 }}>
                <TableContainer component={Paper} className={classes.paper}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Descripción Dueño</TableCell>
                        <TableCell>Información Dueño</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody className={classes.tr}>
                      {rows2.map((row) => (
                        <TableRow key={row.description}>
                          <TableCell
                            component="th"
                            scope="row"
                            style={{ color: '#63c132' }}
                          >
                            {row.description}
                          </TableCell>
                          <TableCell>{row.data}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              {user.id !== userPetData.id_usuario ? (
                <form onSubmit={handleSubmitQuestion(onSubmitQuestion)}>
                  {/* <Typography variant="h6" gutterBottom>Preguntale al adoptante de la mascota</Typography> */}
                  <Grid container alignItems="center" spacing={3}>
                    <Grid item xs={9}>
                      <TextField
                        id="outlined-helperText"
                        label="Preguntale al adoptante de la mascota"
                        name="mensaje"
                        // helperText="Some important text"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        inputRef={register({
                          required: {
                            value: true,
                            message: 'Completa este dato'
                          },
                          minLength: {
                            value: 15,
                            message: 'Mínimo 20 carácteres!'
                          },
                          maxLength: {
                            value: 2000,
                            message: 'Máximo 2000 carácteres!'
                          }
                        })}
                        // style={{
                        //   backgroundColor: '#fff'
                        // }}
                        helperText={errors?.mensaje?.message}
                        error={errors?.mensaje?.message ? true : false}
                        onChange={handleChangeMessage}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <Button
                        type="submit"
                        color="primary"
                        size="large"
                        variant="contained"
                        id="buttonWhite"
                        onClick={handleSubmitDialog}
                      >
                        Preguntar
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              ) : null}

              <Grid
                container
                direction="column"
                spacing={3}
                // style={{height: 500, overflow: 'auto'}}
              >
                {/* <Grid item> */}
                {/* {user.id !== userPetData.id_usuario ? ( */}

                {questionAnswerData.form !== null ? (
                  questionAnswerData.map(({ id, mensaje, fecha_envio, respuesta }) =>
                    user.id !== userPetData.id_usuario ? (
                      <Grid item key={id}>
                        <Typography>
                          {/* <ContactSupportIcon /> */}
                          {mensaje}
                        </Typography>
                        <Typography
                          variant="body2"
                          style={{ color: '#8f8f8f' }}
                        >
                          <QuestionAnswerIcon style={{ marginRight: 8 }} />
                          {respuesta} {fecha_envio}
                        </Typography>
                      </Grid>
                    ) : (
                      <form key={id} onSubmit={onSubmitAnswer}>
                        <Grid item >
                          <Typography gutterBottom>{mensaje}</Typography>
                          <Grid container alignItems="center" spacing={3}>
                            <Grid item xs={9}>
                              <TextField
                                // id="outlined-helperText"
                                label="Respondele al solicitante de la mascota"
                                // name={`${id}`}
                                name="respuesta"
                                // defaultValue={id}
                                // value="id"
                                variant="outlined"
                                fullWidth
                                id={`${id}`}
                                onChange={handleChangeAnswer}

                              />
                            </Grid>
                            <Grid item xs={3}>
                              <Button
                                type="submit"
                                color="primary"
                                size="large"
                                variant="contained"
                              // id="buttonWhite"
                              // onClick={handleSubmitDialog}
                              >
                                Responder
                            </Button>
                            </Grid>
                          </Grid>
                        </Grid>
                      </form>
                    )
                  )
                ) : (
                  <Grid item>
                    <Typography>no existen preguntas</Typography>
                  </Grid>
                )}

                {/* </Grid> */}
              </Grid>
            </Grid>
          </Grid>
        </Dialog>
      ) : null}
    </>
  );
}
