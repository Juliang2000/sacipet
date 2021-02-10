import React, { useState, useEffect } from 'react';

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
} from '@material-ui/core';

// Form Validation
import { useForm } from "react-hook-form";

// redux Actions
// import { savePetFormAction } from '../redux/actions/adoptFormAdoption';

// Dispach Redux
import { useDispatch, useSelector } from 'react-redux';
import { big_size_action, medium_size_action, small_size_action, get_pet_size_data } from '../../../redux/actions/petSizeAction';
import { responsesAreSame } from 'workbox-broadcast-update';
import { get_hamster_race_action } from '../../../redux/actions/getHamsterRaceAction';
import { get_department_data_action } from '../../../redux/actions/adoptFormAction';

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

  ///////////////////////INSERTS
  const raceData = useSelector(store => store.raceData.raceData);
  const hamsterRaceData = useSelector(store => store.hamsterRaceData.hamsterRaceData);
  const hamster = useSelector(state => state.petType.hamster);
  const dog = useSelector(state => state.petType.dog);
  const cat = useSelector(state => state.petType.cat);
  const activeStepState = useSelector(state => state.adoptFormData.activeStepState);
  const departmentData = useSelector(state => state.adoptFormData.departments);

   // redux Actions
   const dispatch = useDispatch();
   const { petType } = useSelector(store => store.petType);
   const [sendHamsterData, setSendHamsterData] = useState(true);
   const [racesContent, setRacesContent] = useState(false);
   const [getData, setGetData] = useState(true);
 
   if (activeStepState == 2) {
     if (getData == true) {
       dispatch(get_department_data_action());
       setGetData(false);
     }
   }
 
   const [petData, setPetData] = useState({
     id_tipo_mascota: petType,
     id_tamanio: '',
   });
 
   const [hamsterData, setHamsterData] = useState({
     id_tipo_mascota: petType,
   });
 
   // const [sendDepartment, setSendDeparment] = useState({
   //   id_unde: id_codigo
   // });
   // console.log(id_codigo)
 
   const petSizeChange = (event) => {
     const { name, value } = event.target
     setPetData({ ...petData, [name]: value })
   }
   const [sendPetData, setSendPetData] = useState(false);
 
   //Save PetSize selected on local Storage
   const saveSmallSize = () => {
     dispatch(small_size_action());
     setSendPetData(true);
     setRacesContent(true);
   };
 
   const saveMediumSize = () => {
     dispatch(medium_size_action());
     setSendPetData(true);
     setRacesContent(true);
 
   };
   const saveBigSize = () => {
     dispatch(big_size_action());
     setSendPetData(true);
     setRacesContent(true);
   };
 
   if (sendPetData == true) {
 
     if (petData.id_tamanio.length !== 0) {
       (dispatch(get_pet_size_data(petData)))
       console.log(petData)
       setSendPetData(false);
     }
     setSendPetData(false);
   };
 
 
   if (sendHamsterData == true) {
     if (hamster == true) {
       (dispatch(get_hamster_race_action(hamsterData)));
       setRacesContent(true);
     }
     setSendHamsterData(false);
   }
//////////////////////////////////////////////////

  const classes = useStyles();

  // Validation Form Login
  const { handleSubmit } = useForm();

  const [newPet, setnewPet] = useState({
    nombre_mascota: '',
    edad_mascota: '',
    escala_edad: '',
    esterilizado: '',
    id_tamanio: '',
    id_raza: '',
    genero_mascota: '',
    id_color: '',
    id_vacuna_Rabia: false,
    id_vacuna_Rinotraqueítis: false,
    id_vacuna_Parvovirus: false,
    id_vacuna_Moquillo: false,
    id_codigo: '',
    descripcion_mascota: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setnewPet({ ...newPet, [name]: value })
  }

  const handleChange3 = (event) => {
    setnewPet({ ...newPet, [event.target.name]: event.target.checked });
  };

  const onSubmit = (data, e) => {
    _handleSubmit({...newPet})
    console.log(newPet)
    e.target.reset();
  };

 

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} className={classes.formPetDescription}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Describe Tu Mascota
      </Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Nombre De Mascota"
            type="text"
            name="nombre_mascota"
            variant="outlined"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="Edad"
            type="number"
            name="edad_mascota"
            variant="outlined"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">Seleccione</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              name="escala_edad"
              // value={age}
              label="Seleccione"
              onChange={handleChange}
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

        <Grid item xs={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">Esterelización De Mascota</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              name="esterilizado"
              // value={age}
              label="Esterelización De Mascota"
              onChange={handleChange}
            >
              <MenuItem value="" >
                <em>Seleccione:</em>
              </MenuItem>
              <MenuItem value={1}>Si</MenuItem>
              <MenuItem value={0}>No</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">Tamaño De Mascota</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              name="id_tamanio"
              // value={age}
              label="Tamaño De Mascota"
              onChange={petSizeChange}
              disabled={hamster == true}
            >
              <MenuItem>
                <em>Seleccione:</em>
              </MenuItem>
              <MenuItem value={1} onClick={saveBigSize}>Grande</MenuItem>
              <MenuItem value={2} onClick={saveMediumSize}>Mediano</MenuItem>
              <MenuItem value={3} onClick={saveSmallSize}>Pequeño</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">Raza</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              name="id_raza"
              // value={age}
              label="Raza De Mascota"
              onChange={handleChange}
              disabled={racesContent == false}
            >
              <MenuItem>
                <em>Seleccione:</em>
              </MenuItem>
              {hamster ?
                hamsterRaceData.map(item => (
                  <MenuItem key={item.nombre_raza} value={item.id_raza}>
                    {item.nombre_raza}
                  </MenuItem>
                ))
                :
                raceData.map(item => (
                  <MenuItem key={item.nombre_raza} value={item.id_raza}>
                    {item.nombre_raza}
                  </MenuItem>
                ))
              }

            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">Genéro De Macota</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              name="genero_mascota"
              // value={age}
              label="Genéro De Mascota"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Seleccione:</em>
              </MenuItem>
              <MenuItem value={1}>Macho</MenuItem>
              <MenuItem value={2}>Hembra</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">Color De Mascota</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              name="id_color"
              // value={age}
              label="Color De Mascota"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Seleccione:</em>
              </MenuItem>
              <MenuItem value={1}>Café</MenuItem>
              <MenuItem value={2}>Negro</MenuItem>
              <MenuItem value={3}>Gris</MenuItem>
              <MenuItem value={4}>Blanco</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-mutiple-checkbox-label">Vacunas De Mascota</InputLabel>
            <Select
              labelId="demo-mutiple-checkbox-label"
              id="demo-mutiple-checkbox"
              // name="prueba_vacunas"
              // multiple
              // value={personName}
              // onChange={handleChange2}
              label="Vacunas De Mascota"
              // renderValue={(selected) => selected.join(', ')}
              MenuProps={MenuProps}
            >
              {/* {names.map((name) => ( */}
              <MenuItem /* key={name} value={name} */>
                <Checkbox
                  color="primary"
                  name="id_vacuna_Rabia"
                  onChange={handleChange3}
                  checked={newPet.id_vacuna_Rabia}
                /* checked={personName.indexOf(name) > -1} */ />
                Rabia
              <ListItemText /* primary={name} */ />
              </MenuItem>
              {/* ))} */}

              <MenuItem >
                <Checkbox
                  color="primary"
                  name="id_vacuna_Rinotraqueítis"
                  onChange={handleChange3}
                  checked={newPet.id_vacuna_Rinotraqueítis}
                />
                Rinotraqueítis
              <ListItemText />
              </MenuItem>

              <MenuItem >
                <Checkbox
                  color="primary"
                  name="id_vacuna_Parvovirus"
                  onChange={handleChange3}
                  checked={newPet.id_vacuna_Parvovirus}
                />
                Parvovirus
              <ListItemText />
              </MenuItem>

              <MenuItem >
                <Checkbox
                  color="primary"
                  name="id_vacuna_Moquillo"
                  onChange={handleChange3}
                  checked={newPet.id_vacuna_Moquillo}
                />
                Moquillo
              <ListItemText />
              </MenuItem>

            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">Departamento</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              name="id_codigo"
              // value={age}
              label="Departamento"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Seleccione:</em>
              </MenuItem>
              {
                departmentData.map(item => (
                  <MenuItem key={item.id_codigo} value={item.id_codigo}>
                    {item.descripcion}
                  </MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">Ciudad o municipio</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              // value={age}
              label="Ciudad o municipio"
              onChange={handleChange}
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
            name="descripcion_mascota"
            placeholder="Descripción De Mascota"
            multiline
            rows={4}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </form>
  )
};
