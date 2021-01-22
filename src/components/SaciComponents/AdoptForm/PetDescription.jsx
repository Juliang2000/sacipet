import React, { useState } from 'react'
import { Grid, IconButton, TextField, makeStyles, Typography, Checkbox, FormControlLabel, Hidden } from '@material-ui/core'

//icons
import photoupload from '../../../assets/images/photoupload.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  content: {
    //  margin: '15%',

    // padding: '10px',
  },
  image: {
    //   margin: '5%',
    alignItems: "center",
    alignContent: 'center',
    justifyContent: "center",
    // display: "flex",
  },
  t1: {
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


export default function PetDescription() {
  const classes = useStyles();

  const [newPet, setNewPet] = useState({

    nombre: '',
    edad: '',
    microChip: '',
    esterilizacion: '',
    raza: '',
    color: '',
    genero: '',

  });

  const { nombre, edad, microchip, esterilizacion, raza, color, genero } = newPet

  const handleChange = e => {
    setNewPet({
      ...newPet,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className={classes.content}>

      <Grid container justify="center"
        alignItems="center"
      >
        <Hidden><Grid item xs={12} spacing={5} className={classes.title}><Typography variant="h6">Descripción de la mascota</Typography></Grid></Hidden><br /><br />

      </Grid>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} sm={12} md={12} spacing={3}>
          <IconButton><img width={100} src={photoupload}></img></IconButton>
        </Grid>
        <Grid item xs={12} sm={12} md={12} spacing={3}>
          <Typography>Subir fotos</Typography>
        </Grid>
      </Grid>
      <form className={classes.root} noValidate autoComplete="off">
        <div className={classes.form}>
          <Grid container justify="center">
            <TextField name="nombre" fullWidth id="outlined-basic" label="Nombre" variant="outlined" size="small" onChange={handleChange} />
            <TextField name="edad" id="outlined-basic" label='Edad' variant="outlined" size="small" onChange={handleChange} />
            <TextField name="microChip" fullWidth id="outlined-basic" label="número de microchip" variant="outlined" size="small" onChange={handleChange} />
            <TextField name="raza" fullWidth id="outlined-basic" label="Raza" variant="outlined" size="small" onChange={handleChange} />
            <TextField name="color" fullWidth id="outlined-basic" label="Color" variant="outlined" size="small" onChange={handleChange} />
            <TextField name="genero" fullWidth id="outlined-basic" label="Género" variant="outlined" size="small" onChange={handleChange} />
          </Grid>

          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="Esterilización"
            labelPlacement="start"
          />
        </div>

        <div>
          <Typography variant="h6">Vacunas</Typography><br/>
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="Contra la rabia"
            labelPlacement="start"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="Contra la rinotraqueítis"
            labelPlacement="start"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="Contra Parvovirus"
            labelPlacement="start"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="Contra moquillo"
            labelPlacement="start"
          /><br /><br />
        </div>





      </form>
    </div>









  )
}
