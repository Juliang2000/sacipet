import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Card, CardHeader, CardActions, Avatar, IconButton, Button, Dialog, Grid } from '@material-ui/core';

import { red } from '@material-ui/core/colors';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

// import { Link } from 'react-router-dom';

import Modal from './ModalData';

// components
import AdoptMeModal from '../AdoptMeForm/AdoptMeModal';

// useMediaQuery
import {  useTheme } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useModal  from '../../../hooks/useModal';

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
}));
////////////////////////////////////////////////////////////
// Data
const rows = [
  {
    "propietario": "Harold Gonzalez",
    "f_public": "Diciembre 22, 2020"
  },
  {
    "propietario": "Michael Romero",
    "f_public": "Diciembre 23, 2020"
  },
  {
    "propietario": "German Cabrera",
    "f_public": "Diciembre 23, 2020"
  },
  {
    "propietario": "Pepito",
    "f_public": "Diciembre 24, 2020"
  },
  {
    "propietario": "Pepito",
    "f_public": "Diciembre 24, 2020"
  },
  {
    "propietario": "Pepito",
    "f_public": "Diciembre 24, 2020"
  },
  {
    "propietario": "Pepito",
    "f_public": "Diciembre 24, 2020"
  },
  {
    "propietario": "Pepito",
    "f_public": "Diciembre 24, 2020"
  },
  {
    "propietario": "Pepito",
    "f_public": "Diciembre 24, 2020"
  },
  {
    "propietario": "Pepito",
    "f_public": "Diciembre 24, 2020"
  },
  {
    "propietario": "Pepito",
    "f_public": "Diciembre 24, 2020"
  },
  {
    "propietario": "Pepito",
    "f_public": "Diciembre 24, 2020"
  },
  {
    "propietario": "Pepito",
    "f_public": "Diciembre 24, 2020"
  },
  {
    "propietario": "Pepito",
    "f_public": "Diciembre 24, 2020"
  },
  {
    "propietario": "Pepito",
    "f_public": "Diciembre 24, 2020"
  },
  {
    "propietario": "Pepito",
    "f_public": "Diciembre 24, 2020"
  },
];

////////////////////////////////////////////////////////////
export default function RecipeReviewCard() {

  const { open, handleClickOpen, handleClickClose } = useModal();

  const classes = useStyles();

  const [modal, setModal] = useState(false);

  const openCloseAdopt = () => {
    setModal(!modal);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'), {
  defaultMatches: true
});

  return (
    <Grid container spacing={isMobile ? 1 : 3} xs={12} justify="center" className={classes.cardsPetsContainer}>
      { rows.map( row => ( 
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
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
              title={row.propietario}
              subheader={row.f_public} 
            />
            <Modal />
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
      )) } 
      

        <Dialog onclose={openCloseAdopt}>
          <AdoptMeModal />
        </Dialog>
    </Grid>
  );
}
