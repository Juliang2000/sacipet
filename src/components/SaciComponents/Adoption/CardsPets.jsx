import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';

// Clsx
import clsx from 'clsx';

import {
  Card,
  CardHeader,
  CardActions,
  Avatar,
  IconButton,
  Button,
  Dialog,
  Grid,
  CardMedia,
  MenuItem,
  Menu,
  Select,
  CircularProgress,
} from '@material-ui/core';

import { red } from '@material-ui/core/colors';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import PetsIcon from '@material-ui/icons/Pets';

import FavoriteIconPet from '../../../assets/icons/cards/favorite-icon-pet.svg';
import ShareIconPet from '../../../assets/icons/cards/share-icon-pet.svg';
import FootprintIconPet from '../../../assets/icons/cards/footprint-icon-pet.svg';

import marco1 from '../../../assets/icons/cards/marcoVerde.svg';
import marco2 from '../../../assets/icons/cards/marcoAmarillo.svg';
import marco3 from '../../../assets/icons/cards/marcoRojo.svg';

import { ReactComponent as NotFound } from '../../../assets/icons/cards/404-spanish.svg';

import MoreVertIcon from '@material-ui/icons/MoreVert';

// Accordion
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';

// Tablas
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

import Slide from '@material-ui/core/Slide';

// import { Link } from 'react-router-dom';

// import Modal from './ModalData';

// components
import PetModalData from './PetModalData';

//Redux
import { useDispatch, useSelector } from 'react-redux';

// useMediaQuery
import { useTheme } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
// import useModal from '../../../hooks/useModal';
import {
  adopt_me_dialog_action,
  get_pet_photos_action,
  get_saci_pets_action,
  pet_data_dialog_action,
  select_pet_action,
  unlogged_modal_action,
} from '../../../redux/actions/saciPets';
// import { Height, LensTwoTone } from '@material-ui/icons';

//images
import petSample from '../../../assets/images/cards/perro_con_peluca.jpg';

// Carousel
import Carousel from 'react-material-ui-carousel';

import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import pug1 from '../../../assets/images/cardsModal/pug1.jpg';
import pug2 from '../../../assets/images/cardsModal/pug2.jpg';
import pug3 from '../../../assets/images/cardsModal/pug3.png';
import pug4 from '../../../assets/images/cardsModal/pug4.jpg';
import pug5 from '../../../assets/images/cardsModal/pug5.jpg';
import axiosClient from '../../../configAxios/axios';
import CarouselPhotos from './CarouselPhotos';

import House from '../../../assets/icons/pet-house.svg';

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: red[500],
  },
  cardsPetsContainer: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0),
    },
  },
  cardsPets: {
    borderRadius: 10,
    boxShadow: ' 0px 0px 10px  #989898,  -5px -5px 10px #ffffff',
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(0, 0, 3, 0),
    },
    // '&:hover': {
    //   boxShadow: '0 0 10px rgba(99, 193, 50), 0px 0px 20px rgba(99, 193, 50)',
    // },
  },

  cardsPets1: {
    '&:hover': {
      boxShadow: '0 0 10px rgba(99, 193, 50), 0px 0px 20px rgba(99, 193, 50)',
    },
  },

  cardsPets2: {
    '&:hover': {
      boxShadow: '0 0 10px rgba(239, 229, 8), 0px 0px 20px rgba(239, 229, 8)',
    },
  },

  cardsPets3: {
    '&:hover': {
      boxShadow: '0 0 10px rgba(188, 53, 53), 0px 0px 20px rgba(188, 53, 53)',
    },
  },

  buttonPrimary: {
    color: '#ffffff',
    fontWeight: 'bold',
    textTransform: 'none',
    marginRight: '12px',
  },

  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  paperContainer: {
    padding: '50px',
  },
  iconsCards: {
    width: '25px',
  },

  cardDesign: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    [theme.breakpoints.only('sm')]: {
      backgroundSize: '115%',
    },
  },

  cardDesign1: {
    backgroundImage: `url(${marco1})`,
  },
  cardDesign2: {
    backgroundImage: `url(${marco2})`,
  },
  cardDesign3: {
    backgroundImage: `url(${marco3})`,
  },
}));
////////////////////////////////////////////////////////////
// Data

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function createData(name, calories, sexo, fat, carbs, protein) {
  return { name, calories, sexo, fat, carbs, protein };
}

const rows = [createData('Pinina', 10, 'Macho', 'Pastor Alemán', 'Perro', 80)];

////////////////////////////////////////////////////////////
export default function RecipeReviewCard(props) {
  const dispatch = useDispatch();

  const { pageMascotas } = useSelector((state) => state.saciPets);

  // const { procedure } = useSelector((state) => state.login);

  const { nombres } = useSelector((state) => state.login.user);
  const [open, setOpen] = useState(false);
  const [newPet, setNewPet] = useState();
  const [anchorMenu, setAnchorMenu] = useState(null);
  const [images, setImages] = useState(pug1);
  const InitialPetState = {
    nombre_mascota: '',
    edad_mascota: '',
    escala_edad: '',
    descripcion_mascota: '',
    esterilizado: '',
    genero_mascota: '',
    raza: '',
    string_agg: '',
    municipio: '',
    fotos: [],
  };
  const [getPet, setGetPet] = useState(InitialPetState);
  const [petData, setPetData] = useState([]);
  const [petIndex, setPetIndex] = useState();
  const ageScale = ['s', 'semana', 'mes', 'año', 'es'];
  const [viewAgeScale, setViewAgeScale] = useState(ageScale[0]);
  const [vaccines, setVaccines] = useState();
  const [genre, setGenre] = useState();
  const [displayContent, setDisplayContent] = useState(false);

  const handleClickOpen = (value) => {
    setNewPet('' + value);
    console.log(newPet);
    setOpen(true);
    setTimeout(() => {
      setDisplayContent(true);
    }, 1000);
  };

  const handleClickClose = () => {
    setOpen(false);
    setDisplayContent(false);
  };

  const { petImage1 } = useSelector((state) => state.adoptFormData);

  const classes = useStyles();

  const [modal, setModal] = useState(false);
  const [checkLogin, setCheckLogin] = useState(false);

  const [petPhoto, setPetPhoto] = useState(petSample);
  const [checkPets, setCheckPets] = useState(false);

  const handleClickAdoptMe = () => {
    if (checkLogin) {
      dispatch(adopt_me_dialog_action(true));
    } else {
      dispatch(unlogged_modal_action(true));
    }
  };

  useEffect(() => {
    if (nombres) {
      setCheckLogin(true);
      console.log('verificado');
    }
  }, [nombres]);

  const handleClickMenu = (event) => {
    setAnchorMenu(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorMenu(null);
  };

  // filtros harold
  const [filtersInitial] = useState({
    id_tipo_mascota: false,
  });

  useEffect(() => {
    dispatch(get_saci_pets_action(filtersInitial));
  }, []);

  useEffect(() => {
    console.log(getPet);
    const parvovirus = 'Parvovirus';
    setVaccines(getPet.string_agg);
    console.log(parvovirus.includes(getPet.string_agg));
    if (getPet.genero_mascota === '1') {
      setGenre('Macho');
    } else if (getPet.genero_mascota === '2') {
      setGenre('Hembra');
    }
  }, [getPet]);

  // useEffect(() => {
  //   if (petIndex >= 0) {
  //     setGetPet(pageMascotas[petIndex]);
  //   }
  // }, [petIndex]);

  // useEffect(() => {
  //   if (pageMascotas) {
  //     let petInfo = pageMascotas.findIndex(function (item) {
  //       return item.id_mascota === newPet;
  //     });
  //     setPetIndex(petInfo);
  //     console.log(petIndex);
  //   }
  // }, [newPet]);

  // useEffect(() => {
  //   console.log(vaccines);
  // }, [vaccines]);

  useEffect(() => {
    if (getPet.edad_mascota === '1') {
      switch (getPet.escala_edad) {
        case '1':
          setViewAgeScale(ageScale[1]);
          break;
        case '2':
          setViewAgeScale(ageScale[2]);
          break;
        case '3':
          setViewAgeScale(ageScale[3]);
          break;
        default:
      }
    } else {
      switch (getPet.escala_edad) {
        case '1':
          setViewAgeScale(`${ageScale[1]}${ageScale[0]}`);
          break;
        case '2':
          setViewAgeScale(`${ageScale[1]}${ageScale[0]}`);
          break;
        case '3':
          setViewAgeScale(`${ageScale[1]}${ageScale[0]}`);
          break;
        default:
      }
    }
    console.log(ageScale);
    console.log(getPet.escala_edad);
  }, [getPet]);

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('xs'), {
    defaultMatches: true,
  });

  // const isTablet = useMediaQuery(theme.breakpoints.only('md'), {
  //   defaultMatches: true,
  // });

  const [cards, setCards] = useState(false);

  useEffect(() => {
    if (pageMascotas.length !== 0) {
      setCards(true);
    }
  }, [pageMascotas]);

  const Error = () => {
    if (pageMascotas.length === 0 && cards === true) {
      return (
        <div
          className="animate__animated animate__zoomIn"
          style={{ display: 'flex', alignItems: 'center', height: '80vh' }}
        >
          <NotFound
            style={{
              maxWidth: '100%',
              height: '80%',
            }}
          />
        </div>
      );
    } else {
      return null;
    }
  };

  // let tipo_tramite1 = pageMascotas.filter((pets) => pets.tipo_tramite === '1');

  // let tipo_tramite2 = pageMascotas.filter((pets) => pets.tipo_tramite === '2');

  // let tipo_tramite3 = pageMascotas.filter((pets) => pets.tipo_tramite === '3');
  // console.log(tipo_tramite3)

  return (
    <>
      <Grid
        container
        spacing={isMobile ? 1 : 3 /* && isTablet ? 6 : 3 */}
        justify="center"
        className={classes.cardsPetsContainer}
      >
        {pageMascotas.map((item) => {
          return (
            <Grid
              key={item.id_mascota}
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
              xl={3}
            >
              <Card
                className={clsx(classes.cardsPets, {
                  [classes.cardsPets1]: item.tipo_tramite === '1',
                  [classes.cardsPets2]: item.tipo_tramite === '2',
                  [classes.cardsPets3]: item.tipo_tramite === '3',
                })}
                onClick={() => dispatch(select_pet_action(item.id_mascota))}
              >
                <CarouselPhotos itemPets={item.fotos} />

                <div
                  className={clsx(classes.cardDesign, {
                    [classes.cardDesign1]: item.tipo_tramite === '1',
                    [classes.cardDesign2]: item.tipo_tramite === '2',
                    [classes.cardDesign3]: item.tipo_tramite === '3',
                  })}
                >
                  <CardHeader
                    // avatar={
                    //   <Avatar aria-label='recipe' className={classes.avatar}>
                    //     R
                    //   </Avatar>
                    // }
                    title={
                      <Typography
                        style={{
                          /* marginBottom: '20px', */ color: '#FFFFFF',
                          fontWeight: 'bolder',
                          fontSize: '20px',
                        }}
                      >
                        {item.nombre_mascota}
                      </Typography>
                    }
                    subheader={item.raza}
                  />
                  <CardActions disableSpacing>
                    <div style={{ display: 'flex', flexGrow: 1 }}>
                      <IconButton aria-label="add to favorites">
                        <img
                          src={FavoriteIconPet}
                          alt="Favorite Icon Pet"
                          className={classes.iconsCards}
                        />
                      </IconButton>
                      {/* <PetModalData /> */}
                      <IconButton aria-label="share">
                        <img
                          src={ShareIconPet}
                          alt="Share Icon Pet"
                          className={classes.iconsCards}
                        />
                      </IconButton>
                      <IconButton
                        onClick={() => console.log('dato entrante')}
                        value={item.id_mascota}
                      >
                        <img
                          src={FootprintIconPet}
                          alt="Footprint Icon Pet"
                          className={classes.iconsCards}
                        />
                      </IconButton>
                    </div>

                    {item.tipo_tramite === '1' ? (
                      <Button
                        className={classes.buttonPrimary}
                        variant="contained"
                        size="small"
                        color="secondary"
                        onClick={handleClickAdoptMe}
                      >
                        Adóptame
                      </Button>
                    ) : item.tipo_tramite === '2' ? (
                      <Button
                        className={classes.buttonPrimary}
                        variant="contained"
                        size="small"
                        color="secondary"
                        onClick={handleClickAdoptMe}
                      >
                        Encuéntrame
                      </Button>
                    ) : item.tipo_tramite === '3' ? (
                      <Button
                        className={classes.buttonPrimary}
                        variant="contained"
                        size="small"
                        color="secondary"
                        onClick={handleClickAdoptMe}
                      >
                        Infórmame
                      </Button>
                    ) : null}
                  </CardActions>
                </div>
              </Card>
            </Grid>
          );
        })}
        <Error />
      </Grid>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClickClose}
      >
        <Paper elevation={3} className={classes.paperContainer}>
          <Box display="flex" justifyContent="center"></Box>
          <Box display="flex" justifyContent="center" mb={5} my={5}>
            <Typography variant="h4" color="initial">
              Ficha De Mascota
            </Typography>
          </Box>
          <Box mb={5}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Edad</TableCell>
                    <TableCell>Sexo</TableCell>
                    <TableCell>Raza</TableCell>
                    <TableCell>Ubicación</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {getPet.nombre_mascota}
                    </TableCell>
                    <TableCell>
                      {getPet.escala_edad} {viewAgeScale}
                    </TableCell>
                    <TableCell>{genre}</TableCell>
                    <TableCell>{getPet.raza}</TableCell>
                    <TableCell>{getPet.municipio}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Vacunas</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{vaccines}</Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>Descripción</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{getPet.descripcion_mascota}</Typography>
            </AccordionDetails>
          </Accordion>
        </Paper>
      </Dialog>
    </>
  );
}
