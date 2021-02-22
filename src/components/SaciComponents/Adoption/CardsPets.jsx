import React, { useState, useEffect } from 'react';

import LazyLoad from 'react-lazyload';

import { makeStyles } from '@material-ui/core/styles';

import { Card, CardHeader, CardActions, Avatar, IconButton, Button, Dialog, Grid, CardMedia } from '@material-ui/core';

import { red } from '@material-ui/core/colors';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

// import { Link } from 'react-router-dom';

import Modal from './ModalData';

// components
import AdoptMeModal from '../AdoptMeForm/AdoptMeModal';

//Redux
import { useDispatch, useSelector } from 'react-redux';

// useMediaQuery
import { useTheme } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useModal from '../../../hooks/useModal';
import { get_pet_photos_action, get_saci_pets_action } from '../../../redux/actions/saciPets';
import { Height, LensTwoTone } from '@material-ui/icons';

//images
import petImage1 from '../../../assets/images/cards/perro_con_peluca.jpg';

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
  media: {
    height: 450,
    paddingTop: '56.25%', // 16:9
    cursor: 'pointer',
  }
}));
////////////////////////////////////////////////////////////
// Data


////////////////////////////////////////////////////////////
export default function RecipeReviewCard() {

  const dispatch = useDispatch();

  const { mascotas } = useSelector(state => state.saciPets);
  const { photos } = useSelector(state => state.saciPets);

  const { open, handleClickOpen, handleClickClose } = useModal();
  const [checkDBPets, setChecksDBPets] = useState(true);

  const classes = useStyles();

  const [modal, setModal] = useState(false);

  const [petPhoto, setPetPhoto] = useState(petImage1);


  const openCloseAdopt = () => {
    setModal(!modal);
  };

  if (checkDBPets === true) {
    dispatch(get_saci_pets_action())
    setChecksDBPets(false)
  }

  // const [clog, setClog] = useState(true);

  // if (checkDBPets === false) {
  //   if (clog === true) {
  //     console.log({mascotas})
  //     setClog(false);
  //   }

  // }  

  // mascotas.map((item) => {
  //   const fileData = item.id_mascota
  //   return fileData
  // })

  const [checkPhotos, setCheckPhotos] = useState(true);

  mascotas.map((item) => {
    const fileData = item.id_mascota
    if (checkPhotos === true) {
      for (let i in mascotas) {
        console.log(mascotas[i])
        dispatch(get_pet_photos_action(fileData));
        setCheckPhotos(false);
      }
    }
    return fileData
  })

  useEffect(() => {
    if (photos) {
      setPetPhoto(photos)
    }
  },[]);


  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'), {
    defaultMatches: true
  });

  return (
    <Grid container spacing={isMobile ? 1 : 3} xs={12} justify="center" className={classes.cardsPetsContainer}>
      { mascotas.map((item) => {
        return (

          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <LazyLoad>
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
                  subheader={item.nombre_raza}
                />
                {/* <Modal /> */}
                <CardMedia className={classes.media} image={petPhoto}>
                </CardMedia>
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
            </LazyLoad>
          </Grid>

        );
      })}


      <Dialog onclose={openCloseAdopt}>
        <AdoptMeModal />
      </Dialog>
    </Grid>
  );
}
