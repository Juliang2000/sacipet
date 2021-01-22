import React, { useState } from 'react';
import Lottie from 'react-lottie';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';

// Material UI Styles 
import useStyles from '../../assets/css/js/styles'



//images
import consultant from './../../assets/images/consultant.jpg'
import petstore from './../../assets/images/petstore.jpg'
import saci from './../../assets/images/saci.png'

// Material UI Components
import { CardMedia, Grid, CardActionArea } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';




function MainMenu() {

  const classes = useStyles();
  return (

    <React.Fragment>
      <Grid container>
        <Grid item xs={12} sm={6} md={4} spacing={3}>
          <CardActionArea className={classes.actionArea}>
            <Card className={classes.cards} >
              <CardMedia className={classes.cardmedia} src={consultant} component="img" />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2" style={{ textAlign: 'center', color: 'rgb(30, 63, 32)' }}>
                  Servicio de consulta general
              </Typography>
                <Typography variant="body2" color="textSecondary" component="p" style={{ textOverflow: 'ellipsis', textAlign: 'justify' }}>
                  Propiciamos un escenario amigable con tus mascotas, donde al interactuar con ellas, identificamos, diagnosticamos y te ayudamos a resolver los problemas de salud que presenten.
              </Typography>
              </CardContent>
            </Card>
          </CardActionArea>
        </Grid>
        <Grid item xs={12} sm={6} md={4} spacing={3}>
          <CardActionArea className={classes.actionArea}>
            <Card className={classes.cards} >
              <CardMedia className={classes.cardmedia} src={petstore} component="img" />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2" style={{ textAlign: 'center', color: 'rgb(30, 63, 32)' }}>
                  Tienda
              </Typography>
                <Typography variant="body2" color="textSecondary" component="p" style={{ textOverflow: 'ellipsis', textAlign: 'justify' }}>
                  Ofrecemos diversos productos para tus mascotas, siempre con el comprimiso de ofrecer productos de calidad, enfocados al cuidado de tu mascota.
              </Typography>
              </CardContent>
            </Card>
          </CardActionArea>

        </Grid>
        <Grid item xs={12} sm={6} md={4} spacing={3}>
          <CardActionArea className={classes.actionArea}>
            <Card className={classes.cards}>
              <CardMedia className={classes.cardmedia} src={saci} component="img" title="Ingresa a SACI" />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2" style={{ textAlign: 'center', color: 'rgb(30, 63, 32)' }}>
                  Ingresar a Adopción SACI
              </Typography>
                <Typography variant="body2" color="textSecondary" component="p" style={{ textOverflow: 'ellipsis', textAlign: 'justify' }}>
                  Si quieres dar este gran paso podemos ayudarte a encontrar a ese amigo incondicional perfecto para ti.
                      </Typography>
              </CardContent>
            </Card>
          </CardActionArea>
        </Grid>
      </Grid>
    </React.Fragment>



  )

}

export default MainMenu




