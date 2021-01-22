import React from 'react'
import { Grid, IconButton, Typography, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

//icons
import dogIcon from '../../../assets/icons/petype/dog.svg'
import catIcon from '../../../assets/icons/petype/cat.svg'
import hamsterIcon from '../../../assets/icons/petype/hamster.svg'






//Styles

const useStyles = makeStyles(() => ({

    root: {
        // padding: '50%',

    },

    spacing: {
        // padding: "50px",
        // margin: "20%",
    },
    tittle: {
        // marginBottom: '50%',
    }

}))

function PetType() {
    const classes = useStyles();
    return (
        <React.Fragment className={classes.root}>
            <Grid
                container
                spacing={0}
                // direction="column"
                alignItems="center"
                justify="space-between"
            >
                <Hidden><Grid item xs={12} spacing={5} className={classes.title}><Typography variant="h6">Selecciona el tipo de mascota</Typography></Grid></Hidden><br/><br/>
                <Grid item xs={12} sm={4} md={4} spacing={3}><IconButton><img width={70} src={dogIcon}></img></IconButton><Typography align='center'>Perro</Typography></Grid>
                <Grid item xs={12} sm={4} md={4} spacing={3}><IconButton><img width={70} src={catIcon}></img></IconButton><Typography align='center'>Gato</Typography></Grid>
                <Grid item xs={12} sm={4} md={4} spacing={3}><IconButton><img width={70} src={hamsterIcon}></img></IconButton><Typography align='center'>Hámster</Typography></Grid>

                
            </Grid>
        </React.Fragment>
    )
}

export default PetType
