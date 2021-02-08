// import React, { useState } from 'react'
// import {
//   makeStyles,
//   Grid,
//   TextField,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Checkbox,
//   ListItemText,
//   Typography
// } from '@material-ui/core'

// const useStyles = makeStyles((theme) => ({
//   formPetDescription: {
//     marginTop: 20,
//     marginBottom: 20
//   }
// }));

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250
//     }
//   }
// };

// const names = [
//   "Moquillo",
//   "Hepatitis",
//   "Parvovirosis",
//   "Leptospirosis",
//   "Rabia",
//   "Leucemia",
//   "Rinotraqueitis",
//   "Panleucopenia",
//   "Calcivirosis",
// ];

// export default function PetDescription() {

//   const classes = useStyles();

//   // const [personName, setPersonName] = useState([]);

//   // const handleChange2 = (event) => {
//   //   setPersonName(event.target.value);
//   // };


//   const [newPet, setnewPet] = useState({
//     nombre_mascota: '',
//     edad_mascota: '',
//     escala_edad: '',
//     esterilizado: '',
//     id_tamanio: '',
//     id_raza: '',
//     genero_mascota: '',
//     id_color: '',
//     id_vacuna_Rabia: false,
//     id_vacuna_Rinotraqueítis: false,
//     id_vacuna_Parvovirus: false,
//     id_vacuna_Moquillo: false,
//     id_codigo: '',
//     descripcion_mascota: ''
//   })

//   const handleChange = (event) => {
//     const { name, value } = event.target
//     setnewPet({ ...newPet, [name]: value })
//   }

//   const handleChange3 = (event) => {
//     setnewPet({ ...newPet, [event.target.name]: event.target.checked });
//   };

//   return (
//     <Grid container spacing={2} className={classes.formPetDescription}>
//       <Grid item xs={12}>
//         <Typography variant="h4" gutterBottom>
//           Describe Tu Mascota
//       </Typography>
//       </Grid>
//       <Grid item xs={6}>
//         <TextField
//           label="Nombre De Mascota"
//           type="text"
//           name="nombre_mascota"
//           variant="outlined"
//           fullWidth
//           onChange={handleChange}
//         />
//       </Grid>
//       <Grid item xs={2}>
//         <TextField
//           label="Edad"
//           type="number"
//           name="edad_mascota"
//           variant="outlined"
//           fullWidth
//           onChange={handleChange}
//         />
//       </Grid>
//       <Grid item xs={4}>
//         <FormControl variant="outlined" fullWidth>
//           <InputLabel id="demo-simple-select-outlined-label">Seleccione</InputLabel>
//           <Select
//             labelId="demo-simple-select-outlined-label"
//             id="demo-simple-select-outlined"
//             name="escala_edad"
//             // value={age}
//             label="Seleccione"
//             onChange={handleChange}
//           >
//             <MenuItem value="">
//               <em>Seleccione:</em>
//             </MenuItem>
//             <MenuItem value={1}>Semanas</MenuItem>
//             <MenuItem value={2}>Meses</MenuItem>
//             <MenuItem value={3}>Años</MenuItem>
//           </Select>
//         </FormControl>
//       </Grid>

//       <Grid item xs={4}>
//         <FormControl variant="outlined" fullWidth>
//           <InputLabel id="demo-simple-select-outlined-label">Esterelización De Mascota</InputLabel>
//           <Select
//             labelId="demo-simple-select-outlined-label"
//             id="demo-simple-select-outlined"
//             name="esterilizado"
//             // value={age}
//             label="Esterelización De Mascota"
//             onChange={handleChange}
//           >
//             <MenuItem value="" >
//               <em>Seleccione:</em>
//             </MenuItem>
//             <MenuItem value={1}>Si</MenuItem>
//             <MenuItem value={0}>No</MenuItem>
//           </Select>
//         </FormControl>
//       </Grid>

//       <Grid item xs={4}>
//         <FormControl variant="outlined" fullWidth>
//           <InputLabel id="demo-simple-select-outlined-label">Tamaño De Mascota</InputLabel>
//           <Select
//             labelId="demo-simple-select-outlined-label"
//             id="demo-simple-select-outlined"
//             name="id_tamanio"
//             // value={age}
//             label="Tamaño De Mascota"
//             onChange={handleChange}
//           >
//             <MenuItem value="" >
//               <em>Seleccione:</em>
//             </MenuItem>
//             <MenuItem value={1}>Grande</MenuItem>
//             <MenuItem value={2}>Mediano</MenuItem>
//             <MenuItem value={3}>Pequeño</MenuItem>
//           </Select>
//         </FormControl>
//       </Grid>
//       <Grid item xs={4}>
//         <FormControl variant="outlined" fullWidth>
//           <InputLabel id="demo-simple-select-outlined-label">Raza De Mascota</InputLabel>
//           <Select
//             labelId="demo-simple-select-outlined-label"
//             id="demo-simple-select-outlined"
//             name="id_raza"
//             // value={age}
//             label="Raza De Mascota"
//             onChange={handleChange}
//           >
//             <MenuItem value="">
//               <em>Seleccione:</em>
//             </MenuItem>
//             <MenuItem value={1}>Pastor Alemán</MenuItem>
//             <MenuItem value={2}>Rottweiler</MenuItem>
//             <MenuItem value={3}>Doberman</MenuItem>
//             <MenuItem value={4}>Schnauzer</MenuItem>
//             <MenuItem value={5}>Akita Inu</MenuItem>
//           </Select>
//         </FormControl>
//       </Grid>
//       <Grid item xs={4}>
//         <FormControl variant="outlined" fullWidth>
//           <InputLabel id="demo-simple-select-outlined-label">Genéro De Macota</InputLabel>
//           <Select
//             labelId="demo-simple-select-outlined-label"
//             id="demo-simple-select-outlined"
//             name="genero_mascota"
//             // value={age}
//             label="Genéro De Mascota"
//             onChange={handleChange}
//           >
//             <MenuItem value="">
//               <em>Seleccione:</em>
//             </MenuItem>
//             <MenuItem value={1}>Macho</MenuItem>
//             <MenuItem value={2}>Hembra</MenuItem>
//           </Select>
//         </FormControl>
//       </Grid>
//       <Grid item xs={4}>
//         <FormControl variant="outlined" fullWidth>
//           <InputLabel id="demo-simple-select-outlined-label">Color De Mascota</InputLabel>
//           <Select
//             labelId="demo-simple-select-outlined-label"
//             id="demo-simple-select-outlined"
//             name="id_color"
//             // value={age}
//             label="Color De Mascota"
//             onChange={handleChange}
//           >
//             <MenuItem value="">
//               <em>Seleccione:</em>
//             </MenuItem>
//             <MenuItem value={1}>Café</MenuItem>
//             <MenuItem value={2}>Negro</MenuItem>
//             <MenuItem value={3}>Gris</MenuItem>
//             <MenuItem value={4}>Blanco</MenuItem>
//           </Select>
//         </FormControl>
//       </Grid>
//       <Grid item xs={4}>
//         <FormControl variant="outlined" fullWidth>
//           <InputLabel id="demo-mutiple-checkbox-label">Vacunas De Mascota</InputLabel>
//           <Select
//             labelId="demo-mutiple-checkbox-label"
//             id="demo-mutiple-checkbox"
//             // name="prueba_vacunas"
//             // multiple
//             // value={personName}
//             // onChange={handleChange2}
//             label="Vacunas De Mascota"
//             // renderValue={(selected) => selected.join(', ')}
//             MenuProps={MenuProps}
//           >
//             {/* {names.map((name) => ( */}
//             <MenuItem /* key={name} value={name} */>
//               <Checkbox
//                 color="primary"
//                 name="id_vacuna_Rabia"
//                 onChange={handleChange3}
//                 checked={newPet.id_vacuna_Rabia}
//                 /* checked={personName.indexOf(name) > -1} */ />
//                 Rabia
//               <ListItemText /* primary={name} */ />
//             </MenuItem>
//             {/* ))} */}

//             <MenuItem >
//               <Checkbox
//                 color="primary"
//                 name="id_vacuna_Rinotraqueítis"
//                 onChange={handleChange3}
//                 checked={newPet.id_vacuna_Rinotraqueítis}
//               />
//                 Rinotraqueítis
//               <ListItemText />
//             </MenuItem>

//             <MenuItem >
//               <Checkbox
//                 color="primary"
//                 name="id_vacuna_Parvovirus"
//                 onChange={handleChange3}
//                 checked={newPet.id_vacuna_Parvovirus}
//               />
//                 Parvovirus
//               <ListItemText />
//             </MenuItem>

//             <MenuItem >
//               <Checkbox
//                 color="primary"
//                 name="id_vacuna_Moquillo"
//                 onChange={handleChange3}
//                 checked={newPet.id_vacuna_Moquillo}
//               />
//                 Moquillo
//               <ListItemText />
//             </MenuItem>

//           </Select>
//         </FormControl>
//       </Grid>
//       <Grid item xs={6}>
//         <FormControl variant="outlined" fullWidth>
//           <InputLabel id="demo-simple-select-outlined-label">Departamento De Mascota</InputLabel>
//           <Select
//             labelId="demo-simple-select-outlined-label"
//             id="demo-simple-select-outlined"
//             name="id_codigo"
//             // value={age}
//             label="Departamento De Mascota"
//             onChange={handleChange}
//           >
//             <MenuItem value="">
//               <em>Seleccione:</em>
//             </MenuItem>
//             <MenuItem value={1}>Cundinamarca</MenuItem>
//             <MenuItem value={2}>Antioquía</MenuItem>
//             <MenuItem value={3}>Valle del Cauca</MenuItem>
//           </Select>
//         </FormControl>
//       </Grid>
//       <Grid item xs={6}>
//         <FormControl variant="outlined" fullWidth>
//           <InputLabel id="demo-simple-select-outlined-label">Capital De Mascota</InputLabel>
//           <Select
//             labelId="demo-simple-select-outlined-label"
//             id="demo-simple-select-outlined"
//             // value={age}
//             label="Capital De Mascota"
//             onChange={handleChange}
//           >
//             <MenuItem value="">
//               <em>Seleccione:</em>
//             </MenuItem>
//             <MenuItem value={1}>Bogotá</MenuItem>
//             <MenuItem value={2}>Medellín</MenuItem>
//             <MenuItem value={3}>Cali</MenuItem>
//           </Select>
//         </FormControl>
//       </Grid>
//       <Grid item xs={12}>
//         <TextField
//           fullWidth
//           variant="outlined"
//           name="descripcion_mascota"
//           placeholder="Descripción De Mascota"
//           multiline
//           rows={4}
//           onChange={handleChange}
//         />
//       </Grid>
//     </Grid>
//   )
// };

/////////////////////////////////////pruebas

// import React, { useState } from 'react'
// import {
//   makeStyles,
//   Grid,
//   TextField,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Checkbox,
//   ListItemText,
//   Typography
// } from '@material-ui/core'

// const useStyles = makeStyles((theme) => ({
//   formPetDescription: {
//     marginTop: 20,
//     marginBottom: 20
//   }
// }));

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250
//     }
//   }
// };

// const names = [
//   "Moquillo",
//   "Hepatitis",
//   "Parvovirosis",
//   "Leptospirosis",
//   "Rabia",
//   "Leucemia",
//   "Rinotraqueitis",
//   "Panleucopenia",
//   "Calcivirosis",
// ];

// export default function PetDescription() {

//   const classes = useStyles();

//   const [personName, setPersonName] = useState([]);

//   const handleChange2 = (event) => {
//     setPersonName(event.target.value);


//   };




//   const [newPet, setnewPet] = useState({
//     nombre_mascota: '',
//     edad_mascota: '',
//     escala_edad: '',
//     esterilizado: '',
//     id_tamanio: '',
//     id_raza: '',
//     genero_mascota: '',
//     id_color: '',
//     prueba_vacunas: '',
//     id_codigo: '',
//     descripcion_mascota: '',
//     hepatitis: '',

//   })



//   const handleChange = (event) => {
//     const { name, value} = event.target
//     setnewPet({ ...newPet, [name]: value})
//   }
 


//   return (
//     <Grid container spacing={2} className={classes.formPetDescription}>
//       <Grid item xs={12}>
//         <Typography variant="h4" gutterBottom>
//           Describe Tu Mascota
//       </Typography>
//       </Grid>
//       <Grid item xs={6}>
//         <TextField
//           label="Nombre De Mascota"
//           type="text"
//           name="nombre_mascota"
//           variant="outlined"
//           fullWidth
//           onChange={handleChange}
//         />
//       </Grid>
//       <Grid item xs={2}>
//         <TextField
//           label="Edad"
//           type="number"
//           name="edad_mascota"
//           variant="outlined"
//           fullWidth
//           onChange={handleChange}
//         />
//       </Grid>
//       <Grid item xs={4}>
//         <FormControl variant="outlined" fullWidth>
//           <InputLabel id="demo-simple-select-outlined-label">Seleccione</InputLabel>
//           <Select
//             labelId="demo-simple-select-outlined-label"
//             id="demo-simple-select-outlined"
//             name="escala_edad"
//             // value={age}
//             label="Seleccione"
//             onChange={handleChange}
//           >
//             <MenuItem value="">
//               <em>Seleccione:</em>
//             </MenuItem>
//             <MenuItem value={1}>Semanas</MenuItem>
//             <MenuItem value={2}>Meses</MenuItem>
//             <MenuItem value={3}>Años</MenuItem>
//           </Select>
//         </FormControl>
//       </Grid>

//       <Grid item xs={4}>
//         <FormControl variant="outlined" fullWidth>
//           <InputLabel id="demo-simple-select-outlined-label">Esterelización De Mascota</InputLabel>
//           <Select
//             labelId="demo-simple-select-outlined-label"
//             id="demo-simple-select-outlined"
//             name="esterilizado"
//             // value={age}
//             label="Esterelización De Mascota"
//             onChange={handleChange}
//           >
//             <MenuItem value="" >
//               <em>Seleccione:</em>
//             </MenuItem>
//             <MenuItem value={1}>Si</MenuItem>
//             <MenuItem value={2}>No</MenuItem>
//           </Select>
//         </FormControl>
//       </Grid>

//       <Grid item xs={4}>
//         <FormControl variant="outlined" fullWidth>
//           <InputLabel id="demo-simple-select-outlined-label">Tamaño De Mascota</InputLabel>
//           <Select
//             labelId="demo-simple-select-outlined-label"
//             id="demo-simple-select-outlined"
//             name="id_tamanio"
//             // value={age}
//             label="Tamaño De Mascota"
//             onChange={handleChange}
//           >
//             <MenuItem value="" >
//               <em>Seleccione:</em>
//             </MenuItem>
//             <MenuItem value={1}>Grande</MenuItem>
//             <MenuItem value={2}>Mediano</MenuItem>
//             <MenuItem value={3}>Pequeño</MenuItem>
//           </Select>
//         </FormControl>
//       </Grid>
//       <Grid item xs={4}>
//         <FormControl variant="outlined" fullWidth>
//           <InputLabel id="demo-simple-select-outlined-label">Raza De Mascota</InputLabel>
//           <Select
//             labelId="demo-simple-select-outlined-label"
//             id="demo-simple-select-outlined"
//             name="id_raza"
//             // value={age}
//             label="Raza De Mascota"
//             onChange={handleChange}
//           >
//             <MenuItem value="">
//               <em>Seleccione:</em>
//             </MenuItem>
//             <MenuItem value={1}>Pastor Alemán</MenuItem>
//             <MenuItem value={2}>Rottweiler</MenuItem>
//             <MenuItem value={3}>Doberman</MenuItem>
//             <MenuItem value={4}>Schnauzer</MenuItem>
//             <MenuItem value={5}>Akita Inu</MenuItem>
//           </Select>
//         </FormControl>
//       </Grid>
//       <Grid item xs={4}>
//         <FormControl variant="outlined" fullWidth>
//           <InputLabel id="demo-simple-select-outlined-label">Genéro De Macota</InputLabel>
//           <Select
//             labelId="demo-simple-select-outlined-label"
//             id="demo-simple-select-outlined"
//             name="genero_mascota"
//             // value={age}
//             label="Genéro De Mascota"
//             onChange={handleChange}
//           >
//             <MenuItem value="">
//               <em>Seleccione:</em>
//             </MenuItem>
//             <MenuItem value={"Macho"}>Macho</MenuItem>
//             <MenuItem value={"Hembra"}>Hembra</MenuItem>
//           </Select>
//         </FormControl>
//       </Grid>
//       <Grid item xs={4}>
//         <FormControl variant="outlined" fullWidth>
//           <InputLabel id="demo-simple-select-outlined-label">Color De Mascota</InputLabel>
//           <Select
//             labelId="demo-simple-select-outlined-label"
//             id="demo-simple-select-outlined"
//             name="id_color"
//             // value={age}
//             label="Color De Mascota"
//             onChange={handleChange}
//           >
//             <MenuItem value="">
//               <em>Seleccione:</em>
//             </MenuItem>
//             <MenuItem value={1}>Café</MenuItem>
//             <MenuItem value={2}>Negro</MenuItem>
//             <MenuItem value={3}>Gris</MenuItem>
//             <MenuItem value={4}>Blanco</MenuItem>
//           </Select>
//         </FormControl>
//       </Grid>
//       <Grid item xs={4}>
//         <FormControl variant="outlined" fullWidth>
//           <InputLabel id="demo-mutiple-checkbox-label">Vacunas De Mascota</InputLabel>
//           <Select
//             labelId="demo-mutiple-checkbox-label"
//             id="demo-mutiple-checkbox"
//             name="prueba_vacunas"
//             multiple
//             value={personName}
//             onChange={handleChange2}
//             label="Vacunas De Mascota"
//             renderValue={(selected) => selected.join(', ')}
//             MenuProps={MenuProps}
//           >
//             {names.map((name) => (
//               <MenuItem key={name} value={name}>
//                 <Checkbox color="primary" checked={personName.indexOf(name) > -1} />
//                 <ListItemText primary={name} />
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//       </Grid>
//       <Grid item xs={6}>
//         <FormControl variant="outlined" fullWidth>
//           <InputLabel id="demo-simple-select-outlined-label">Departamento De Mascota</InputLabel>
//           <Select
//             labelId="demo-simple-select-outlined-label"
//             id="demo-simple-select-outlined"
//             name="id_codigo"
//             // value={age}
//             label="Departamento De Mascota"
//             onChange={handleChange}
//           >
//             <MenuItem value="">
//               <em>Seleccione:</em>
//             </MenuItem>
//             <MenuItem value={1}>Cundinamarca</MenuItem>
//             <MenuItem value={2}>Antioquía</MenuItem>
//             <MenuItem value={3}>Valle del Cauca</MenuItem>
//           </Select>
//         </FormControl>
//       </Grid>
//       <Grid item xs={6}>
//         <FormControl variant="outlined" fullWidth>
//           <InputLabel id="demo-simple-select-outlined-label">Capital De Mascota</InputLabel>
//           <Select
//             labelId="demo-simple-select-outlined-label"
//             id="demo-simple-select-outlined"
//             // value={age}
//             label="Capital De Mascota"
//             onChange={handleChange}
//           >
//             <MenuItem value="">
//               <em>Seleccione:</em>
//             </MenuItem>
//             <MenuItem value={1}>Bogotá</MenuItem>
//             <MenuItem value={2}>Medellín</MenuItem>
//             <MenuItem value={3}>Cali</MenuItem>
//           </Select>
//         </FormControl>
//       </Grid>
//       <Grid item xs={12}>
//         <TextField
//           fullWidth
//           variant="outlined"
//           name="descripcion_mascota"
//           placeholder="Descripción De Mascota"
//           multiline
//           rows={4}
//           onChange={handleChange}
//         />
//       </Grid>
//     </Grid>
//   )
// };

import React, { useState } from 'react'
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

// const names = [
//   "Moquillo",
//   "Hepatitis",
//   "Parvovirosis",
//   "Leptospirosis",
//   "Rabia",
//   "Leucemia",
//   "Rinotraqueitis",
//   "Panleucopenia",
//   "Calcivirosis",
// ];

export default function PetDescription() {

  const classes = useStyles();

  // const [personName, setPersonName] = useState([]);

  // const handleChange2 = (event) => {
  //   setPersonName(event.target.value);
  // };


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
            onChange={handleChange}
          >
            <MenuItem value="" >
              <em>Seleccione:</em>
            </MenuItem>
            <MenuItem value={1}>Grande</MenuItem>
            <MenuItem value={2}>Mediano</MenuItem>
            <MenuItem value={3}>Pequeño</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="demo-simple-select-outlined-label">Raza De Mascota</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            name="id_raza"
            // value={age}
            label="Raza De Mascota"
            onChange={handleChange}
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
          <InputLabel id="demo-simple-select-outlined-label">Departamento De Mascota</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            name="id_codigo"
            // value={age}
            label="Departamento De Mascota"
            onChange={handleChange}
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
            label="Capital De Mascota"
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
  )
};
