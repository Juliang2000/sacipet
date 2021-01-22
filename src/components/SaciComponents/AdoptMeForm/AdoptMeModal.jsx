import React from 'react'
import {Grid, makeStyles, Typography, MenuItem, TextField} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({

    root: {
        width: '100%',
    padding: '5%',
    },
    content: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
    image: {
      //   margin: '5%',
      alignItems: "center",
      alignContent: 'center',
      justifyContent: "center",
      // display: "flex",
    },
    title: {
      display: 'flex',
      textAlign: 'center',
      alignItems: 'center',
    },
    form: {
      marginLeft: '10%',
      marginRight: '10%',
      margin: '5%',
      // margin: theme.spacing(1),
    }
  }))

export default function AdoptMeModal() {

    const classes = useStyles();

    

    return (
        <div className={classes.root}>

<Grid container justify="center"
         alignItems="center"
         >

            <Typography variant="h6">Rellena los siguientes datos para validar la adopción</Typography>
            </Grid>
            <form className={classes.content} noValidate autoComplete="off">
            <div className={classes.form}>
            <Grid container justify="center">
            <TextField fullWidth id="outlined-basic" label="Nombre y apellido" variant="outlined" size="small"/>
            <TextField fullWidth id="outlined-basic" label="E-mail" variant="outlined" size="small" />
            <TextField fullWidth id="outlined-basic" label="teléfono" variant="outlined" size="small"/>
            <TextField
                select 
                id="outlined-basic"
                label="Ciudad"
                Id="demo-simple-select-helper-label"
                variant="outlined"
                size="small"
                 //   value={city}
                //   onChange={handleChange}
            >
                <MenuItem value="" >
                  <em>Seleccione:</em>
                </MenuItem>
                <MenuItem value={10}>Bogotá </MenuItem>
                <MenuItem value={20}>Medellín</MenuItem>
                <MenuItem value={30}>Cali</MenuItem>
                <MenuItem value={40}>Barranquilla</MenuItem>
            </TextField>
            <TextField fullWidth id="outlined-basic" label="localidad" variant="outlined" size="small" />     
        </Grid>
    </div>
    </form>
    </div>
    )

}
