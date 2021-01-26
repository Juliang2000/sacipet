import React from 'react'
import {
  makeStyles,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  Typography
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  formPetDescription: {
    marginTop: 20,
    marginBottom: 20
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const names = [
  "Moquillo",
  "Hepatitis",
  "Parvovirosis",
  "Leptospirosis",
  "Rabia",
  "Leucemia",
  "Rinotraqueitis",
  "Panleucopenia",
  "Calcivirosis",
];

export default function PetDescription() {

  const classes = useStyles();

  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  return (
    <Grid container spacing={2} className={classes.formPetDescription}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Describe Tu Mascota
      </Typography>
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Nombre De Mascota"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          label="Edad"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={4}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="demo-simple-select-outlined-label">Seleccione</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            // value={age}
            // onChange={handleChange}
            label="Seleccione"
          >
            <MenuItem value="">
              <em>Seleccione:</em>
            </MenuItem>
            <MenuItem value={1}>Semanas</MenuItem>
            <MenuItem value={2}>Meses</MenuItem>
            <MenuItem value={3}>Años</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="demo-simple-select-outlined-label">Tamaño De Mascota</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            // value={age}
            // onChange={handleChange}
            label="Tamaño De Mascota"
          >
            <MenuItem value="" >
              <em>Seleccione:</em>
            </MenuItem>
            <MenuItem value={1}>Pequeño</MenuItem>
            <MenuItem value={2}>Mediano</MenuItem>
            <MenuItem value={3}>Grande</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="demo-simple-select-outlined-label">Raza De Mascota</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            // value={age}
            // onChange={handleChange}
            label="Raza De Mascota"
          >
            <MenuItem value="">
              <em>Seleccione:</em>
            </MenuItem>
            <MenuItem value={1}>Pastor Alemán</MenuItem>
            <MenuItem value={2}>Rottweiler</MenuItem>
            <MenuItem value={3}>Doberman</MenuItem>
            <MenuItem value={4}>Schnauzer</MenuItem>
            <MenuItem value={5}>Akita Inu</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="demo-simple-select-outlined-label">Genéro De Macota</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            // value={age}
            // onChange={handleChange}
            label="Genéro De Mascota"
          >
            <MenuItem value="">
              <em>Seleccione:</em>
            </MenuItem>
            <MenuItem value={1}>Macho</MenuItem>
            <MenuItem value={2}>Hembra</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="demo-mutiple-checkbox-label">Vacunas De Mascota</InputLabel>
          <Select
            labelId="demo-mutiple-checkbox-label"
            id="demo-mutiple-checkbox"
            multiple
            value={personName}
            onChange={handleChange}
            label="Vacunas De Mascota"
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox color="primary" checked={personName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="demo-simple-select-outlined-label">Departamento De Mascota</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            // value={age}
            // onChange={handleChange}
            label="Departamento De Mascota"
          >
            <MenuItem value="">
              <em>Seleccione:</em>
            </MenuItem>
            <MenuItem value={1}>Cundinamarca</MenuItem>
            <MenuItem value={2}>Antioquía</MenuItem>
            <MenuItem value={3}>Valle del Cauca</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="demo-simple-select-outlined-label">Capital De Mascota</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            // value={age}
            // onChange={handleChange}
            label="Capital De Mascota"
          >
            <MenuItem value="">
              <em>Seleccione:</em>
            </MenuItem>
            <MenuItem value={1}>Bogotá</MenuItem>
            <MenuItem value={2}>Medellín</MenuItem>
            <MenuItem value={3}>Cali</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Descripción De Mascota"
          multiline
          rows={4}
        />
      </Grid>
    </Grid>
  )
};
