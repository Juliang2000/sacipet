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
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Dispach Redux
import { useDispatch, useSelector } from 'react-redux';
import {
  big_size_action,
  medium_size_action,
  small_size_action,
  get_pet_size_data,
} from '../../../redux/actions/petSizeAction';
import { get_hamster_race_action } from '../../../redux/actions/getHamsterRaceAction';

import {
  get_city_data_action,
  get_department_data_action,
  update_form_data_action,
  full_pet_description_action,
  get_form_data_action,
  push_data_action,
  not_full_pet_description_action,
  reset_city_action,
} from '../../../redux/actions/adoptFormAction';
// import { StarRateOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  formPetDescription: {
    marginTop: 20,
    marginBottom: 20,
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function PetDescription() {
  // redux Actions
  const dispatch = useDispatch();
  const { petType } = useSelector((store) => store.petType);
  const [sendHamsterData, setSendHamsterData] = useState(true);
  const [racesContent, setRacesContent] = useState(false);
  const [allowCities, setAllowCities] = useState(false);
  const [allowRaces, setAllowRaces] = useState(false);

  ///////////////////////INSERTS
  const raceData = useSelector((store) => store.raceData.raceData);
  const hamsterRaceData = useSelector(
    (store) => store.hamsterRaceData.hamsterRaceData
  );
  const hamster = useSelector((state) => state.petType.hamster);
  const { departments, cities } = useSelector((state) => state.adoptFormData);
  const { procedure } = useSelector((state) => state.login);
  const { id } = useSelector((state) => state.login.user);
  // const { editPetDialog } = useSelector(state => state.adoptFormData);
  const { userPetData } = useSelector(state => state.userPets);
  const [/* checkUserPetData, */ setCheckUserPetData] = useState(false);
  const { showUserPets } = useSelector(state => state.saciPets);
  const { descriptionData } = useSelector(state => state.adoptFormData)

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
    id_vacuna_Rinotraque??tis,
    id_vacuna_Parvovirus,
    id_vacuna_Moquillo,
    id_codigo,
    id_unde,
    descripcion_mascota,
    vacunas
  } = useSelector(state => state.adoptFormData.updateDescriptionData);

  const [newPet, setnewPet] = useState({
    id_usuario: id,
    tipo_tramite: procedure,
    nombre_mascota: `${nombre_mascota}`,
    edad_mascota: `${edad_mascota}`,
    escala_edad: `${escala_edad}`,
    esterilizado: `${esterilizado}`,
    id_tamanio: `${id_tamanio}`,
    id_raza: `${id_raza}`,
    genero_mascota: `${genero_mascota}`,
    id_color: `${id_color}`,
    id_vacuna_Rabia: id_vacuna_Rabia,
    id_vacuna_Rinotraque??tis: id_vacuna_Rinotraque??tis,
    id_vacuna_Parvovirus: id_vacuna_Parvovirus,
    id_vacuna_Moquillo: id_vacuna_Moquillo,
    id_codigo: `${id_codigo}`,
    id_unde: `${id_unde}`,
    descripcion_mascota: `${descripcion_mascota}`,
    vacunas: `${vacunas}`
  });

  useEffect(() => {
    if (showUserPets) {
      dispatch(get_form_data_action(userPetData));
    }
  }, [showUserPets]);

  useEffect(() => {
    if (showUserPets) {
      dispatch(update_form_data_action()); 
    }
  }, [descriptionData])

  useEffect(() => {
    if (hamster === true) {
      setnewPet({ ...newPet, id_tamanio: 2 });
    }
  }, [hamster]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setnewPet({ ...newPet, [name]: value });
    setDepData({ ...depData, [name]: value });
  };

  useEffect(() => {
    dispatch(get_department_data_action());
  }, []);

  const [petData, setPetData] = useState({
    id_tipo_mascota: petType,
    id_tamanio: '',
  });

  const hamsterData = {
    id_tipo_mascota: petType,
  };

  const [depData, setDepData] = useState({
    id_unde: '',
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
  };

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
      dispatch(get_city_data_action(depData), reset_city_action());
      setAllowCities(true);
    }
  }, [newPet.id_unde]);

  if (racesContent === true) {
    if (id_tamanio !== 0) {
      dispatch(get_form_data_action(newPet));
      dispatch(update_form_data_action());
    }
    setRacesContent(false);
  }

  useEffect(() => {
    dispatch(get_pet_size_data(petData));
  }, [newPet.id_tamanio]);

  if (sendHamsterData === true) {
    if (hamster === true) {
      dispatch(get_hamster_race_action(hamsterData));
      setRacesContent(true);
    }
    setSendHamsterData(false);
  }

  // const [checkAge, setCheckAge] = useState(true);

  // if (checkAge === true)
  //   if (edad_mascota.length !== 0) {
  //     dispatch(push_data_action());
  //     setSendPetData(true);
  //     setRacesContent(true);
  //     dispatch(get_form_data_action(newPet));
  //     dispatch(update_form_data_action());
  //     setCheckAge(false);
  //   }

  const classes = useStyles();

  const schema = yup.object().shape({
    nombre_mascota: yup
      .string()
      .required('??Campo Obligatorio!')
      .min(4, '??M??nimo 4 car??cteres!')
      .max(20, '??Maximo 20 car??cteres!')
      .matches(/^[a-zA-Z??-??\s]+$/, '??Solo letras may??sculas y min??sculas!'),

    edad_mascota: yup
      .number()
      .typeError('??Obligatorio!')
      .min(1, '??Edad m??nima 1!')
      .max(25, '??m??xima 25!')
      .integer('!Solo n??meros enteros!'),
  });

  const { handleSubmit, register, errors } = useForm({
    defaultValues: {
      nombre_mascota: nombre_mascota,
      edad_mascota: edad_mascota,
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (newPet.id_tamanio.length !== 0) {
      setAllowRaces(true);
    }
  }, [newPet.id_tamanio]);

  useEffect(() => {
    switch (petType) {
      case 3:
        setAllowRaces(true);
        if (!errors.nombre_mascota && !errors.edad_mascota) {
          if (
            newPet.nombre_mascota.length &&
            newPet.edad_mascota.length &&
            newPet.escala_edad &&
            newPet.esterilizado.length &&
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
        break;
      default:
        if (!errors.nombre_mascota && !errors.edad_mascota) {
          if (
            newPet.nombre_mascota.length &&
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
    }
  }, [
    newPet.nombre_mascota,
    newPet.descripcion_mascota,
    newPet.id_codigo,
    newPet.id_unde,
    errors,
    newPet.edad_mascota,
    newPet.escala_edad,
    newPet.id_tamanio,
    newPet.id_raza,
    newPet.id_color,
    newPet.esterilizado,
  ]);

  const handleChange3 = (event) => {
    setnewPet({ ...newPet, [event.target.name]: event.target.checked });
    dispatch(get_form_data_action({...descriptionData, [event.target.name]: event.target.checked }));
  };

  const [checkUserPetSize, setCheckUserPetSize] = useState(false);
  // const [userPetVaccines, setUserPetVaccines] = useState([]);
  // useEffect(() => {
  //   if (showUserPets) {
  //     let vaccines = vacunas.split(",")
  //     setUserPetVaccines(vaccines);
  //   }
  // }, [showUserPets]);

  // useEffect(() => {
  //   if (userPetVaccines.length !== 0) {
  //     let rabia = userPetVaccines.indexOf("Rabia");
  //     let moquillo = userPetVaccines.indexOf("Moquillo");
  //     let rinotraqueitis = userPetVaccines.indexOf("Rinotraque??tis");
  //     let parvovirus = userPetVaccines.indexOf("Parvovirus");
  //     if (rabia > -1) {
  //       dispatch(get_form_data_action({ ...descriptionData, id_vacuna_Rabia: true }))
  //       console.log("vacunado contra rabia")
  //     }
  //     if (moquillo > -1) {
  //       dispatch(get_form_data_action({ ...descriptionData, id_vacuna_Moquillo: true }))
  //       console.log("vacunado contra moquillo")
  //     }
  //     if (rinotraqueitis > -1) {
  //       setnewPet({ ...newPet, id_vacuna_Rinotraque??tis: true })
  //       console.log("vacunado contra rinotraque??tis")
  //     }
  //     if (parvovirus > -1) {
  //       setnewPet({ ...newPet, id_vacuna_Parvovirus: true })
  //       console.log("vacunado contra parvovirus")
  //     }
  //   }
  // }, [userPetVaccines]);

  useEffect(() => {
    if (showUserPets === true) {
      dispatch(get_city_data_action({ id_unde: id_unde }));
      switch (id_tamanio) {
        case "2": dispatch(medium_size_action());
          setCheckUserPetSize(true);
          break;
        case "1": dispatch(big_size_action());
          setCheckUserPetSize(true);
          break;
        case "3": dispatch(small_size_action());
          setCheckUserPetSize(true);
          break;
        default:
      }
    }
  }, [showUserPets])

  useEffect(() => {
    if (checkUserPetSize) {
      dispatch(get_pet_size_data({
        id_tipo_mascota: petType,
        id_tamanio: parseInt(id_tamanio)
      }))
    }
  }, [checkUserPetSize]);

  return (
    <form onSubmit={handleSubmit()} autocomplete="off">
      <Grid container spacing={2} className={classes.formPetDescription}>
        <Grid item xs={12}>
          {procedure === 1 ? (
            <Typography variant="h4" gutterBottom>
              Describe La Mascota Adoptiva
            </Typography>
          ) : procedure === 2 ? (
            <Typography variant="h4" gutterBottom>
              Describe La Mascota Encontrada
            </Typography>
          ) : procedure === 3 ? (
            <Typography variant="h4" gutterBottom>
              Describe La Mascota Perdida
            </Typography>
          ) : <Typography variant="h5" gutterBottom>
            Actualiza los datos
              </Typography>
          }
        </Grid>
        <Grid item xs={12} sm={5} md={6}>
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
        <Grid item xs={12} sm={3} md={2}>
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
        <Grid item xs={12} sm={4} md={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">
              Escala Edad
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              name="escala_edad"
              label="Escala Edad"
              onChange={handleChange}
              value={newPet.escala_edad}
              defaultValue={escala_edad}
            >
              {/* <MenuItem>
                <em>Seleccione:</em>
              </MenuItem> */}
              <MenuItem value={1} onClick={saveData}>
                Semanas
              </MenuItem>
              <MenuItem value={2} onClick={saveData}>
                Meses
              </MenuItem>
              <MenuItem value={3} onClick={saveData}>
                A??os
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">
              Mascota esterilizada
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              name="esterilizado"
              label="Mascota esterilizada"
              onChange={handleChange}
              value={newPet.esterilizado}
              defaultValue={esterilizado}
            >
              {/* <MenuItem>
                <em>Seleccione:</em>
              </MenuItem> */}
              <MenuItem value="1" onClick={saveData}>
                Si
              </MenuItem>
              <MenuItem value="0" onClick={saveData}>
                No
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">
              Tama??o De Mascota
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              name="id_tamanio"
              // value={age}
              label="Tama??o De Mascota"
              onChange={petSizeChange}
              disabled={hamster === true}
              value={newPet.id_tamanio}
              defaultValue={id_tamanio}
            >
              {/* <MenuItem>
                <em>Seleccione:</em>
              </MenuItem> */}
              <MenuItem value={1} onClick={saveBigSize}>
                Grande
              </MenuItem>
              <MenuItem value={2} onClick={saveMediumSize}>
                Mediano
              </MenuItem>
              <MenuItem value={3} onClick={saveSmallSize}>
                Peque??o
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">
              Raza De Mascota
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              name="id_raza"
              label="Raza De Mascota"
              onChange={handleChange}
              disabled={allowRaces === false}
              defaultValue={id_raza}
            >
              {hamster
                ? hamsterRaceData.map((item) => (
                  <MenuItem
                    key={item.nombre_raza}
                    value={item.id_raza}
                  // defaultValue={item.nombre_raza}
                  >
                    {item.nombre_raza}
                  </MenuItem>
                ))
                : raceData.map((item) => (
                  <MenuItem
                    key={item.nombre_raza}
                    value={item.id_raza}
                  // defaultValue={item.id_raza}
                  >
                    {item.nombre_raza}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">
              Gen??ro De Macota
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              name="genero_mascota"
              label="Gen??ro De Mascota"
              onChange={handleChange}
              value={newPet.genero_mascota}
              defaultValue={genero_mascota}
            >
              {/* <MenuItem>
                <em>Seleccione:</em>
              </MenuItem> */}
              <MenuItem value={1} onClick={saveData}>
                Macho
              </MenuItem>
              <MenuItem value={2} onClick={saveData}>
                Hembra
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">
              Color De Mascota
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              name="id_color"
              label="Color De Mascota"
              onChange={handleChange}
              value={newPet.id_color}
              defaultValue={id_color}
            >
              {/* <MenuItem>
                <em>Seleccione:</em>
              </MenuItem> */}
              <MenuItem value={1} onClick={saveData}>
                Caf??
              </MenuItem>
              <MenuItem value={2} onClick={saveData}>
                Negro
              </MenuItem>
              <MenuItem value={3} onClick={saveData}>
                Gris
              </MenuItem>
              <MenuItem value={4} onClick={saveData}>
                Blanco
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-mutiple-checkbox-label">
              Vacunas De Mascota
            </InputLabel>
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
                /* checked={personName.indexOf(name) > -1} */
                />
                Rabia
                <ListItemText /* primary={name} */ />
              </MenuItem>
              {/* ))} */}

              <MenuItem>
                <Checkbox
                  color="primary"
                  name="id_vacuna_Rinotraque??tis"
                  onChange={handleChange3}
                  checked={newPet.id_vacuna_Rinotraque??tis}
                />
                Rinotraque??tis
                <ListItemText />
              </MenuItem>

              <MenuItem>
                <Checkbox
                  color="primary"
                  name="id_vacuna_Parvovirus"
                  onChange={handleChange3}
                  checked={newPet.id_vacuna_Parvovirus}
                />
                Parvovirus
                <ListItemText />
              </MenuItem>

              <MenuItem>
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
        <Grid item xs={12} sm={6} md={6}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">
              Departamento
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              name="id_unde"
              label="Departamento"
              onChange={handleChange}
              defaultValue={id_unde}
            >
              {departments.map((item) => (
                <MenuItem key={item.id_codigo} value={item.id_codigo}>
                  {item.descripcion}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">
              Ciudad o municipio
            </InputLabel>
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
              {cities.map((item) => (
                <MenuItem key={item.id_codigo} value={item.id_codigo}>
                  {item.descripcion}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            fullWidth
            variant="outlined"
            name="descripcion_mascota"
            placeholder="Descripci??n De Mascota"
            multiline
            rows={4}
            onChange={handleChange}
            defaultValue={descripcion_mascota}
          />
        </Grid>
      </Grid>
    </form>
  );
}
