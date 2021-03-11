import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import {
  Card,
  CardHeader,
  CardActions,
  Avatar,
  IconButton,
  Button,
  Dialog,
  Grid, CardMedia,
  MenuItem,
  Menu,
  Select,
  CircularProgress
} from '@material-ui/core';

import { red } from '@material-ui/core/colors';


import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
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
import AdoptMeModal from '../AdoptMeForm/AdoptMeModal';

//Redux
import { useDispatch, useSelector } from 'react-redux';

// useMediaQuery
import { useTheme } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
// import useModal from '../../../hooks/useModal';
import { get_pet_photos_action, get_saci_pets_action } from '../../../redux/actions/saciPets';
// import { Height, LensTwoTone } from '@material-ui/icons';

//images
import petSample from '../../../assets/images/cards/perro_con_peluca.jpg';

// Carousel
import Carousel from 'react-material-ui-carousel'

import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import pug1 from '../../../assets/images/cardsModal/pug1.jpg'
import pug2 from '../../../assets/images/cardsModal/pug2.jpg'
import pug3 from '../../../assets/images/cardsModal/pug3.png'
import pug4 from '../../../assets/images/cardsModal/pug4.jpg'
import pug5 from '../../../assets/images/cardsModal/pug5.jpg'
import axiosClient from '../../../configAxios/axios';
import CarouselPhotos from './CarouselPhotos';


// import mascota1 from '../assets/images/cards/perro_con_peluca.jpg'
// import mascota2 from '../../assets/images/cards/pastor_aleman_navideño.jpg'
// import mascota3 from '../../assets/images/cards/pinscher.jpg'
// import mascota4 from '../../assets/images/cards/perro_chancla.jpg'
// import mascota5 from '../../assets/images/cards/gato_comiendo.jpg'
// import mascota6 from '../../assets/images/cards/perro_programador.jpg'
// import mascota7 from '../../assets/images/cards/perros_adopcion.jpg'
// import mascota8 from '../../assets/images/cards/perros_en_moto.jpg'
// import mascota9 from '../../assets/images/cards/pato_patinando.jpg'
// import mascota10 from '../../assets/images/cards/cerdo_con_botas.jpg'
// import mascota11 from '../../assets/images/cards/gato_enfermero.jpg'
// import mascota12 from '../../assets/images/cards/loro_con_perro.jpg'

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
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(0, 0, 3, 0),
    },
    '&:hover': {
      boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
    },
  },
  buttonPrimary: {
    // backgroundColor: '#29ABE2',
    // '&:hover': {
    //   backgroundColor: '#29ABE2',
    // },
    color: '#ffffff',
    textTransform: 'none',
    fontSize: '18px',
  },

  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  paperContainer: {
    padding: '50px',
  },
  media: {
    height: 450,
    paddingTop: '56.25%', // 16:9
    cursor: 'pointer',
  }
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
  const { mascotas } = useSelector(state => state.saciPets);
  const [open, setOpen] = useState(false);
  const [newPet, setNewPet] = useState()
  const [anchorMenu, setAnchorMenu] = useState(null);
  const [images, setImages] = useState(pug1);
  const InitialPetState =
  {
    nombre_mascota: '',
    edad_mascota: "",
    escala_edad: "",
    descripcion_mascota: "",
    esterilizado: "",
    genero_mascota: "",
    raza: "",
    string_agg: "",
    municipio: "",
    fotos: [],
  };
  const [getPet, setGetPet] = useState(InitialPetState)
  const [petData, setPetData] = useState([])
  const [petIndex, setPetIndex] = useState()
  const ageScale = ["s", "semana", "mes", "año", "es"]
  const [viewAgeScale, setViewAgeScale] = useState(ageScale[0]);
  const [vaccines, setVaccines] = useState()
  const [genre, setGenre] = useState();
  const [displayContent, setDisplayContent] = useState(false);




  const handleClickOpen = (value) => {
    setNewPet("" + value)
    setOpen(true);
    setTimeout(() => {
      setDisplayContent(true)
    }, 1000);
  };

  const handleClickClose = () => {
    setOpen(false);
    setDisplayContent(false);
  };

  const { petImage1 } = useSelector(state => state.adoptFormData);


  const classes = useStyles();

  const [modal, setModal] = useState(false);

  const [petPhoto, setPetPhoto] = useState(petSample);
  const [checkPets, setCheckPets] = useState(false);

  const handleClickMenu = (event) => {
    setAnchorMenu(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorMenu(null);
  };

  useEffect(() => {
    dispatch(get_saci_pets_action())
  }, [])

  useEffect(() => {
    console.log(getPet)
    const parvovirus = "Parvovirus"
    setVaccines(getPet.string_agg)
    console.log(parvovirus.includes(getPet.string_agg))
    if (getPet.genero_mascota === "1") {
      setGenre("Macho")
    } else if (getPet.genero_mascota === "2") {
      setGenre("Hembra")
    }
  }, [getPet])

  useEffect(() => {
    if (petIndex >= 0) {
      setGetPet(mascotas[petIndex])
    }
  }, [petIndex])

  useEffect(() => {
    let petInfo = mascotas.findIndex(function (item) {
      return item.id_mascota === newPet;
    });
    setPetIndex(petInfo)
    console.log(petIndex)
  }, [newPet])

  useEffect(() => {
    console.log(vaccines)
  }, [vaccines])

  useEffect(() => {
    if (getPet.edad_mascota === "1") {
      switch (getPet.escala_edad) {
        case "1": setViewAgeScale(ageScale[1])
          break;
        case "2": setViewAgeScale(ageScale[2])
          break;
        case "3": setViewAgeScale(ageScale[3])
          break;
        default:
      }
    } else {
      switch (getPet.escala_edad) {
        case "1": setViewAgeScale(`${ageScale[1]}${ageScale[0]}`)
          break;
        case "2": setViewAgeScale(`${ageScale[1]}${ageScale[0]}`)
          break;
        case "3": setViewAgeScale(`${ageScale[1]}${ageScale[0]}`)
          break;
        default:
      }
    }
    console.log(ageScale)
    console.log(getPet.escala_edad)
  }, [getPet])


  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'), {
    defaultMatches: true
  });

  return (
    <>
      <Grid container spacing={isMobile ? 1 : 3} /* xs={12} */ justify="center" className={classes.cardsPetsContainer}>
        {mascotas.map((item) => {
          return (
            <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
              <Card className={classes.cardsPets} style={{ borderRadius: 10 }}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      R
                </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings" onClick={handleClickMenu}>
                      <MenuItem>
                        <MoreVertIcon>
                        </MoreVertIcon>
                      </MenuItem>
                    </IconButton>

                  }
                  title={<Typography>{item.nombre_mascota}</Typography>}
                  subheader={item.raza}
                />
                <CarouselPhotos
                  itemPets={item.fotos}
                />

                <Grid container justify="center">
                  <Button disableRipple style={{ textTransform: 'none' }}>
                    <MenuItem key={item.mascota} onClick={(e) => handleClickOpen(e.target.value)} value={item.id_mascota}>
                      Datos de mascota
                  </MenuItem>
                  </Button>
                </Grid>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <Button
                    className={classes.buttonPrimary}
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                  >
                    Adóptame
              </Button>
                </CardActions>
              </Card>
            </Grid>
          )
        }
        )}
      </Grid>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClickClose}
      >
        <Paper elevation={3} className={classes.paperContainer}>
          <Box display="flex" justifyContent="center">
          </Box>
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
                    <TableCell>{getPet.escala_edad} {viewAgeScale}</TableCell>
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
              <Typography>
                {vaccines}
              </Typography>
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
              <Typography>
                {getPet.descripcion_mascota}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Paper>
      </Dialog>
    </>


  );
}
