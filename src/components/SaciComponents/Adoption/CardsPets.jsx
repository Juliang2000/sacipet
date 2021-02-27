import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Card, CardHeader, CardActions, Avatar, IconButton, Button, Dialog, Grid, CardMedia, Fab } from '@material-ui/core';

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

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  const { mascotas } = useSelector(state => state.saciPets);
  // const { mascotas } = useSelector(state => state.saciPets);
  const { petImage1 } = useSelector(state => state.adoptFormData);

  // const { open, handleClickOpen, handleClickClose } = useModal();

  const classes = useStyles();

  const [modal, setModal] = useState(false);

  const [petPhoto, setPetPhoto] = useState(petSample);
  const [checkPets, setCheckPets] = useState(false);
  // const [petPhotos, setPetPhotos] = useState([]);

  // const [selectedImages, setSelectedImages] = useState([])


  //   useEffect(() => {

  //     if (photos) {
  //       const fileArray = Array.from(photos).map((file) => (file))
  //       console.log(fileArray)

  //       setSelectedImages((prevImages) => prevImages.concat(fileArray))
  //       Array.from(photos).map(
  //         (file) => (file)
  //       )
  //     }  
  // }, [photos])

  // const fileArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
  // console.log(fileArray

  useEffect(() => {
    if (petImage1 === true) {
      setPetPhoto(petImage1)
    } else
      setPetPhoto(petSample)
  }, [petImage1])

  // Array.from(photos).map()

  const openCloseAdopt = () => {
    setModal(!modal);
  };

  useEffect(() => {
    dispatch(get_saci_pets_action())
  }, [dispatch])

  // useEffect(() => {
  //   if (petPhoto) {
  //     setPetPhotos()
  //   }
  // }, [input])

  useEffect(() => {
    for (let i of mascotas) {
      dispatch(get_pet_photos_action(i.id_mascota));
      console.log(i)
      console.log(i.id_mascota);
    }
  }, [mascotas, dispatch])

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'), {
    defaultMatches: true
  });

  // const renderPhotos = (photo) => {
  //   return <img src={photo} key={photo} alt={photo} />
  // }

  var items = [
    {
      imgPath: pug1,
    },
    {
      imgPath: pug2,
    },
    {
      imgPath: pug3,
    },
    {
      imgPath: pug4,
    },
    {
      imgPath: pug5
    },
  ]

  function Item(props) {

    return (
      <CardMedia
        className={classes.media}
        title="Pinina"
        onClick={handleClickOpen}
        image={props.item.imgPath}
      />
    )

  }


  return (
    <Grid container spacing={isMobile ? 1 : 3} xs={12} justify="center" className={classes.cardsPetsContainer}>
      { mascotas.map((item) => {
        return (


          <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
            <Card className={classes.cardsPets} style={{ borderRadius: 10 }}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={item.nombre_mascota}
                subheader={item.raza}
              />
              {/* <Modal /> */}
              {/* {renderPhotos(petPhoto)} */}


              <Carousel
                animation="fade"
                autoPlay={false}
                cycleNavigation={false}
                // IndicatorIcon={<PetsIcon/>}
                indicatorIconButtonProps={{
                  style: {
                    padding: '5px',
                    color: 'white'
                  }
                }}

                activeIndicatorIconButtonProps={{
                  style: {
                    color: '#63C132'
                  }
                }}

                indicatorContainerProps={{
                  style: {
                    marginTop: '-50px',
                  }
                }}

                navButtonsProps={{
                  style: {
                    // backgroundColor: 'cornflowerblue',
                    // borderRadius: 0,
                    width: 10,
                    height: 10
                  }
                }}

                NextIcon={<KeyboardArrowRight />}
                PrevIcon={<KeyboardArrowLeft />}
              >
                {
                  items.map((item, i) => <Item key={i} item={item} />)
                }
              </Carousel>

              {/* <CardMedia
                className={classes.media}
                title="Pinina"
                onClick={handleClickOpen}
                image={images}
              /> */}

              {/* <CarouselPets /> */}

              {/* <CarouselData /> */}

              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <Button
                  onClick={() => openCloseAdopt()}
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

        );
      })}


      <>
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
                  {/* style={{ border: 'blue 7px solid'}} */}
                  <TableHead>
                    <TableRow>
                      <TableCell>Nombre</TableCell>
                      <TableCell>Edad</TableCell>
                      <TableCell>Sexo</TableCell>
                      <TableCell>Raza</TableCell>
                      <TableCell>Tipo</TableCell>
                      <TableCell>Peso&nbsp;(Kg)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell>{row.calories}</TableCell>
                        <TableCell>{row.sexo}</TableCell>
                        <TableCell>{row.fat}</TableCell>
                        <TableCell>{row.carbs}</TableCell>
                        <TableCell>{row.protein}</TableCell>
                      </TableRow>
                    ))}
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
                  <ol>
                    <li>Vacuna</li>
                    <li>Vacuna</li>
                    <li>Vacuna</li>
                  </ol>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>Documentación</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Trae Cartilla Documentación</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>Observaciones</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Tratarle con mucho cariño <br />
                Es enojón por todo
                      </Typography>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </Dialog>
      </>

      <Dialog onclose={openCloseAdopt}>
        <AdoptMeModal />
      </Dialog>

    </Grid>
  );
}
