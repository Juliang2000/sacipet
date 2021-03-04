/* eslint-disable react-hooks/exhaustive-deps */
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
  Typography,
} from '@material-ui/core';

// Form Validation
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

// Dispach Redux
import { useDispatch, useSelector } from 'react-redux';
import { big_size_action, medium_size_action, small_size_action, get_pet_size_data } from '../../../redux/actions/petSizeAction';
import { get_hamster_race_action } from '../../../redux/actions/getHamsterRaceAction';

import {
  get_city_data_action,
  get_department_data_action,
  update_form_data_action,
  full_pet_description_action,
  get_form_data_action,
  push_data_action,
  not_full_pet_description_action,
  reset_city_action
} from '../../../redux/actions/adoptFormAction';

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

export default function PetDescription() {

  // redux Actions
  const dispatch = useDispatch();
  const { petType } = useSelector(store => store.petType);
  const [sendHamsterData, setSendHamsterData] = useState(true);
  const [racesContent, setRacesContent] = useState(false);
  const [allowCities, setAllowCities] = useState(false);

  ///////////////////////INSERTS
  const raceData = useSelector(store => store.raceData.raceData);
  const hamsterRaceData = useSelector(store => store.hamsterRaceData.hamsterRaceData);
  const hamster = useSelector(state => state.petType.hamster);
  const { departments, cities } = useSelector(state => state.adoptFormData);
  const { user } = useSelector(state => state.login);

  const {
    nombre_mascota,
    edad_mascota,
    escala_edad,
    esterilizado,
    id_tamanio,
    id_raza,
    genero_mascota,
    id_color,
    id_vacuna_Rabia,
    id_vacuna_Rinotraqueítis,
    id_vacuna_Parvovirus,
    id_vacuna_Moquillo,
    id_codigo,
    id_unde,
    descripcion_mascota
  } = useSelector(store => store.adoptFormData.updateDescriptionData);

  const [newPet, setnewPet] = useState({
    id_usuario: user.id,
    tipo_tramite: 1,
    nombre_mascota: `${nombre_mascota}`,
    edad_mascota: `${edad_mascota}`,
    escala_edad: `${escala_edad}`,
    esterilizado: `${esterilizado}`,
    id_tamanio: `${id_tamanio}`,
    id_raza: `${id_raza}`,
    genero_mascota: `${genero_mascota}`,
    id_color: `${id_color}`,
    id_vacuna_Rabia: id_vacuna_Rabia,
    id_vacuna_Rinotraqueítis: id_vacuna_Rinotraqueítis,
    id_vacuna_Parvovirus: id_vacuna_Parvovirus,
    id_vacuna_Moquillo: id_vacuna_Moquillo,
    id_codigo: `${id_codigo}`,
    id_unde: `${id_unde}`,
    descripcion_mascota: `${descripcion_mascota}`,
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setnewPet({ ...newPet, [name]: value })
    setDepData({ ...depData, [name]: value })
  }

  useEffect(() => {
    dispatch(get_department_data_action());
  }, [])

  const [petData, setPetData] = useState({
    id_tipo_mascota: petType,
    id_tamanio: '',
  });

  const hamsterData = {
    id_tipo_mascota: petType,
  };

  const [depData, setDepData] = useState({
    id_unde: ''
  });

  function petSizeChange(event) {
    const { name, value } = event.target;
    setPetData({ ...petData, [name]: value });
    setnewPet({ ...newPet, [name]: value });
  }

  // eslint-disable-next-line no-unused-vars
  const [sendPetData, setSendPetData] = useState(false);

  const saveData = () => {
    dispatch(push_data_action());
    setSendPetData(true);
    setRacesContent(true);
  }

  const saveSmallSize = () => {
    dispatch(small_size_action());
    setSendPetData(true);
    setRacesContent(true);
    dispatch(get_form_data_action(newPet));
    dispatch(update_form_data_action());
  };

  const saveMediumSize = () => {
    dispatch(medium_size_action());
    setSendPetData(true);
    setRacesContent(true);
    dispatch(get_form_data_action(newPet));
    dispatch(update_form_data_action());

  };
  const saveBigSize = () => {
    dispatch(big_size_action());
    setSendPetData(true);
    setRacesContent(true);
    dispatch(get_form_data_action(newPet));
    dispatch(update_form_data_action());
  };

  useEffect(() => {
    if (newPet.id_unde) {
      dispatch(get_city_data_action(depData),
        reset_city_action());
      setAllowCities(true)
    }
  }, [newPet.id_unde])

  if (racesContent === true) {
    if (id_tamanio !== 0) {
      dispatch(get_form_data_action(newPet));
      dispatch(update_form_data_action());
    }
    setRacesContent(false);
  }

  useEffect(() => {
    (dispatch(get_pet_size_data(petData)))
  }, [newPet.id_tamanio])

  if (sendHamsterData === true) {
    if (hamster === true) {
      (dispatch(get_hamster_race_action(hamsterData)));
      setRacesContent(true);
    }
    setSendHamsterData(false);
  }

  const [checkAge, setCheckAge] = useState(true)

  if (checkAge === true)
    if (edad_mascota.length !== 0) {
      dispatch(push_data_action());
      setSendPetData(true);
      setRacesContent(true);
      dispatch(get_form_data_action(newPet));
      dispatch(update_form_data_action());
      setCheckAge(false)
    }

  const classes = useStyles();

  const schema = yup.object().shape({

    nombre_mascota: yup
      .string()
      .required('¡Campo Obligatorio!')
      .min(4, '¡Mínimo 4 carácteres!')
      .max(20, '¡Maximo 20 carácteres!')
      .matches(/^[a-zA-ZÁ-ÿ\s]+$/, '¡Solo letras mayúsculas y minúsculas!'),

    edad_mascota: yup
      .number()
      .typeError('¡Obligatorio!')
      .min(1, '¡Edad mínima 1!')
      .max(20, '¡máxima 20!')
      .integer('!Solo números enteros!'),

  });

  const { handleSubmit, register, errors } = useForm({
    defaultValues: {
      nombre_mascota: nombre_mascota,
      edad_mascota: edad_mascota,
    },
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (!errors.nombre_mascota && !errors.edad_mascota) {
      if (newPet.nombre_mascota.length &&
        newPet.edad_mascota.length &&
        newPet.escala_edad &&
        newPet.esterilizado.length &&
        newPet.id_tamanio &&
        newPet.id_raza &&
        newPet.id_color &&
        newPet.id_unde &&
        newPet.id_codigo &&
        newPet.descripcion_mascota.length !== 0
      ) {
        dispatch(full_pet_description_action());
        dispatch(get_form_data_action(newPet));
        dispatch(update_form_data_action());
      } else {
        dispatch(not_full_pet_description_action());
      }
    }
  }, [newPet.nombre_mascota,
  newPet.descripcion_mascota,
  newPet.id_codigo,
  newPet.id_unde,
    errors,
  newPet.edad_mascota,
  newPet.escala_edad,
  newPet.id_tamanio,
  newPet.id_raza,
  newPet.id_color,
  newPet.esterilizado])

  const handleChange3 = (event) => {
    setnewPet({ ...newPet, [event.target.name]: "true" });
  };

  return (
    <form onSubmit={handleSubmit()} autocomplete="off">
      <Grid container spacing={2} className={classes.formPetDescription}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Describe Tu Mascota
      </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Nombre De Mascota"
            type="text"
            name="nombre_mascota"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            defaultValue={nombre_mascota}
            inputRef={register}
            error={!!errors.nombre_mascota}
            helperText={errors?.nombre_mascota?.message}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            label="Edad"
            type="number"
            name="edad_mascota"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            defaultValue={edad_mascota}
            inputRef={register}
            error={!!errors.edad_mascota}
            helperText={errors?.edad_mascota?.message}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">Escala Edad</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              name="escala_edad"
              label="Escala Edad"
              onChange={handleChange}
              defaultValue={escala_edad}
            >
              {/* <MenuItem>
                <em>Seleccione:</em>
              </MenuItem> */}
              <MenuItem value={1} onClick={saveData}>Semanas</MenuItem>
              <MenuItem value={2} onClick={saveData}>Meses</MenuItem>
              <MenuItem value={3} onClick={saveData}>Años</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">Mascota esterilizada</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              name="esterilizado"
              label="Mascota esterilizada"
              onChange={handleChange}
              defaultValue={esterilizado}
            >
              {/* <MenuItem>
                <em>Seleccione:</em>
              </MenuItem> */}
              <MenuItem value="1" onClick={saveData}>Si</MenuItem>
              <MenuItem value="0" onClick={saveData}>No</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">Tamaño De Mascota</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              name="id_tamanio"
              // value={age}
              label="Tamaño De Mascota"
              onChange={petSizeChange}
              disabled={hamster === true}
              defaultValue={id_tamanio}
            >
              {/* <MenuItem>
                <em>Seleccione:</em>
              </MenuItem> */}
              <MenuItem value={1} onClick={saveBigSize}>Grande</MenuItem>
              <MenuItem value={2} onClick={saveMediumSize}>Mediano</MenuItem>
              <MenuItem value={3} onClick={saveSmallSize}>Pequeño</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">Raza De Mascota</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              name="id_raza"
              // value={age}
              label="Raza De Mascota"
              onChange={handleChange}
              disabled={id_tamanio.length === 0}
              defaultValue={id_raza}
            >
              {/* <MenuItem>
                <em>Seleccione:</em>
              </MenuItem> */}
              {hamster ?
                hamsterRaceData.map(item => (
                  <MenuItem key={item.nombre_raza} value={item.id_raza} defaultValue={item.nombre_raza} >
                    {item.nombre_raza}
                  </MenuItem>
                ))
                :
                raceData.map(item => (
                  <MenuItem key={item.nombre_raza} value={item.id_raza} defaultValue={item.nombre_raza}>
                    {item.nombre_raza}
                  </MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">Genéro De Macota</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              name="genero_mascota"
              // value={age}
              label="Genéro De Mascota"
              onChange={handleChange}
              defaultValue={genero_mascota}
            >
              {/* <MenuItem>
                <em>Seleccione:</em>
              </MenuItem> */}
              <MenuItem value={1} onClick={saveData}>Macho</MenuItem>
              <MenuItem value={2} onClick={saveData}>Hembra</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">Color De Mascota</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              name="id_color"
              // value={age}
              label="Color De Mascota"
              onChange={handleChange}
              defaultValue={id_color}
            >
              {/* <MenuItem>
                <em>Seleccione:</em>
              </MenuItem> */}
              <MenuItem value={1} onClick={saveData}>Café</MenuItem>
              <MenuItem value={2} onClick={saveData}>Negro</MenuItem>
              <MenuItem value={3} onClick={saveData}>Gris</MenuItem>
              <MenuItem value={4} onClick={saveData}>Blanco</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
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
        <Grid item xs={12} sm={6}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">Departamento</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              name="id_unde"
              label="Departamento"
              onChange={handleChange}
              defaultValue={id_unde}
            >
              {/* <MenuItem>
                <em>Seleccione:</em>
              </MenuItem> */}
              {
                departments.map(item => (
                  <MenuItem key={item.id_codigo} value={item.id_codigo}>
                    {item.descripcion}
                  </MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">Ciudad o municipio</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              name="id_codigo"
              label="Ciudad o municipio"
              onChange={handleChange}
              disabled={allowCities === false}
              defaultValue={id_codigo}
            >
              {/* <MenuItem>
                <em>Seleccione:</em>
              </MenuItem> */}
              {
                cities.map(item => (
                  <MenuItem key={item.id_codigo} value={item.id_codigo}>
                    {item.descripcion}
                  </MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            variant="outlined"
            name="descripcion_mascota"
            placeholder="Descripción De Mascota"
            multiline
            rows={4}
            onChange={handleChange}
            defaultValue={descripcion_mascota}
          />
        </Grid>
      </Grid>
    </form>
  )
};
