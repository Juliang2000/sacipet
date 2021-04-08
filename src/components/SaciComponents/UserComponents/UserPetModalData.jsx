import { Box, Button, Card, CardHeader, CardMedia, Dialog, Divider, FormControl, Grid, IconButton, InputLabel, Menu, MenuItem, Select, TextField, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { user_pets_modal_action, set_user_pet_modal_data_action } from '../../../redux/actions/userPetsAction';
//icons
import CloseIcon from '@material-ui/icons/Close';
import userPetsModalStyles from '../../../assets/css/js/userPetsModalStyles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/CheckCircleRounded';
import CancelIcon from '@material-ui/icons/CancelRounded';

export default function UserPetModalData() {
    const dispatch = useDispatch();
    const { userPetId } = useSelector(state => state.userPets)
    const { userPetModalData } = useSelector(state => state.userPets)
    const { userPetData } = useSelector(state => state.userPets)
    const [petData, setPetData] = useState({
        id_mascota: "",
        nombre_mascota: "",
        edad_mascota: "",
        escala_edad: "",
        descripcion_mascota: "",
        tipo_tramite: "",
        esterilizado: "",
        id_codigo: "",
        id_municipio: "",
        municipio: "",
        id_departamento: "",
        departameto: "",
        id_pais: "",
        pais: "",
        id_color: "",
        color: "",
        id_raza: "",
        raza: "",
        id_tipo_mascota: "",
        id_tamanio: "",
        tamanio: "",
        genero_mascota: "",
        tipo: "",
        id_usuario: "",
        nombres: "",
        id_mascotaa: "",
        fotos: "",
        vacunas: ""
    });
    const classes = userPetsModalStyles();
    const [editData, setEditData] = useState({
        name: false,
        age: false,
        race: false,
        color: false,
        genre: false,
        sterilized: false,
        department: false,
        city: false,
        vaccines: false,
        description: false
    });
    const { name,
        age,
        race,
        color,
        genre,
        sterilized,
        department,
        city,
        vaccines,
        description } = editData;
    const [actionType, setActionType] = useState(null);
    const theme = useTheme();
    const baseURL = process.env.REACT_APP_BACKEND_URL;
    const [petMenu, setPetMenu] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'), {
        defaultMatches: true,
    });
    useEffect(() => {
        if (userPetId !== null) {
            setPetData(userPetData)
        }
    }, [userPetId]);
    useEffect(() => {
        switch (actionType) {
            case "edit-name": setEditData({ ...editData, name: true });
                break;
            case "edit-age": setEditData({ ...editData, age: true });
                break;
            case "edit-race": setEditData({ ...editData, race: true });
                break;
            case "edit-color": setEditData({ ...editData, color: true });
                break;
            case "edit-genre": setEditData({ ...editData, genre: true });
                break;
            case "edit-sterilized": setEditData({ ...editData, sterilized: true });
                break;
            case "edit-department": setEditData({ ...editData, department: true });
                break;
            case "edit-city": setEditData({ ...editData, city: true });
                break;
            case "edit-vaccines": setEditData({ ...editData, vaccines: true });
                break;
            case "edit-description": setEditData({ ...editData, description: true });
                break;
            case "cancel-name": setEditData({ ...editData, name: false });
                break;
            case "cancel-age": setEditData({ ...editData, age: false });
                break;
            case "cancel-race": setEditData({ ...editData, race: false });
                break;
            case "cancel-color": setEditData({ ...editData, color: false });
                break;
            case "cancel-genre": setEditData({ ...editData, genre: false });
                break;
            case "cancel-sterilized": setEditData({ ...editData, sterilized: false });
                break;
            case "cancel-department": setEditData({ ...editData, department: false });
                break;
            case "cancel-city": setEditData({ ...editData, city: false });
                break;
            case "cancel-vaccines": setEditData({ ...editData, vaccines: false });
                break;
            case "cancel-description": setEditData({ ...editData, description: false });
                break;
            default:
        }
    }, [actionType])
    const handleClickSave = () => {

    }
    const handleClickCancel = () => {

    }
    const fullScreenResponsive = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            {userPetData ?
                <Dialog fullScreen={fullScreenResponsive} open={userPetModalData === true} onClose={() => dispatch(set_user_pet_modal_data_action(false))}>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <IconButton
                                className={classes.closeIconButton}
                                edge="end"
                                color="primary"
                                aria-label="close"
                                onClick={() => dispatch(set_user_pet_modal_data_action(false))}
                            >
                                <CloseIcon className={classes.closeButton} />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.root}>

                        <Grid container justify="center" /*  style={{ height: '800px', width: '600px' }} */>
                            <img src={`${baseURL}219.jpg`} className={classes.profilePet} />
                            <Grid item xs={12} >
                                <Typography style={{ textAlign: 'center', marginTop: '10px', marginBottom: '10px' }} color="secondary" variant="h5">{petData.nombre_mascota}</Typography>
                            </Grid>
                            <Grid item xs={12} >
                                <Divider style={{ marginBottom: '5px' }} variant="middle" />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid style={{ marginBottom: '20px' }} container justify="center">
                                <Grid item>
                                    <Button className={classes.infoButton} variant="outlined" color="primary">
                                        <Typography>
                                            Información
                                    </Typography>
                                    </Button>
                                </Grid>
                                <Grid style={{ width: '2px' }} item>

                                </Grid>
                                <Grid item>
                                    <Button className={classes.infoButton} variant="inherit" color="primary" >
                                        <Typography>
                                            Fotos
                                    </Typography>
                                    </Button>
                                </Grid>
                            </Grid>

                        </Grid>
                        <Grid container spacing={1} justify="center" style={{ display: 'flex' }}>
                            <Grid item xs={4} sm={4} md={4} lg={4} xl={3}>
                                <Box className={classes.editField}>
                                    <Typography color="primary">Nombre</Typography>
                                    {name ?
                                        <Box>
                                            <IconButton onClick={() => setActionType("save-name")} size="small" className={classes.saveIcon}>
                                                <CheckIcon fontSize="small" />
                                            </IconButton>
                                            <IconButton onClick={() => setActionType("cancel-name")} size="small" className={classes.cancelIcon}>
                                                <CancelIcon fontSize="small" />
                                            </IconButton>
                                        </Box>
                                        :
                                        <IconButton onClick={() => setActionType("edit-name")} size="small" className={classes.editIcon}>
                                            <EditIcon fontSize="small" />
                                        </IconButton>
                                    }
                                </Box>
                                {name ?
                                    <TextField
                                        defaultValue={petData.nombre_mascota} />
                                    :
                                    <Typography variant="h6">
                                        {petData.nombre_mascota}
                                    </Typography>
                                }
                            </Grid>
                            <Grid item xs={3} sm={3} md={3} lg={3} xl={4}>
                                <Box className={classes.editField}>
                                    <Typography color="primary">Edad</Typography>
                                    {age ?
                                        <Box>
                                            <IconButton onClick={() => setActionType("save-age")} size="small" className={classes.saveIcon}>
                                                <CheckIcon fontSize="small" />
                                            </IconButton>
                                            <IconButton onClick={() => setActionType("cancel-age")} size="small" className={classes.cancelIcon}>
                                                <CancelIcon fontSize="small" />
                                            </IconButton>
                                        </Box>
                                        :
                                        <IconButton onClick={() => setActionType("edit-age")} size="small" className={classes.editIcon}>
                                            <EditIcon fontSize="small" />
                                        </IconButton>
                                    }
                                </Box>
                                {age ?
                                    <Box style={{ display: 'flex' }}>
                                        <Grid item xl={3}>
                                            <TextField
                                                type="number"
                                                defaultValue={petData.edad_mascota} />
                                        </Grid>
                                        <Grid item xl={9}>
                                            <FormControl fullWidth>
                                                <Select
                                                    labelId="demo-simple-select-outlined-label"
                                                    id="demo-simple-select-outlined"
                                                    name="escala_edad"
                                                    label="Escala Edad"
                                                    defaultValue="Años"
                                                >
                                                    {/* <MenuItem>
                                     <em>Seleccione:</em>
                                   </MenuItem> */}
                                                    <MenuItem value={1}>Semanas</MenuItem>
                                                    <MenuItem value={2}>Meses</MenuItem>
                                                    <MenuItem value={3}>Años</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>

                                    </Box>
                                    :
                                    <Typography variant="h6">
                                        {petData.edad_mascota}
                                    </Typography>
                                }
                            </Grid>
                            <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                                <Box className={classes.editField}>
                                    <Typography color="primary">Raza</Typography>
                                    {race ?
                                        <Box>
                                            <IconButton onClick={() => setActionType("save-race")} size="small" className={classes.saveIcon}>
                                                <CheckIcon fontSize="small" />
                                            </IconButton>
                                            <IconButton onClick={() => setActionType("cancel-race")} size="small" className={classes.cancelIcon}>
                                                <CancelIcon fontSize="small" />
                                            </IconButton>
                                        </Box>
                                        :

                                        <IconButton onClick={() => setActionType("edit-race")} size="small" className={classes.editIcon}>
                                            <EditIcon fontSize="small" />
                                        </IconButton>
                                    }
                                </Box>
                                {race ?
                                    <TextField
                                        defaultValue={petData.raza} />
                                    :
                                    <Typography variant="h6">
                                        {petData.raza}
                                    </Typography>
                                }
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Divider style={{ marginBottom: '5px' }} variant="middle" />
                            </Grid>
                            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                                <Box className={classes.editField}>
                                    <Typography color="primary">Color</Typography>
                                    {color ?
                                        <Box>
                                            <IconButton onClick={() => setActionType("save-color")} size="small" className={classes.saveIcon}>
                                                <CheckIcon fontSize="small" />
                                            </IconButton>
                                            <IconButton onClick={() => setActionType("cancel-color")} size="small" className={classes.cancelIcon}>
                                                <CancelIcon fontSize="small" />
                                            </IconButton>
                                        </Box>
                                        :
                                        <IconButton onClick={() => setActionType("edit-color")} size="small" className={classes.editIcon}>
                                            <EditIcon fontSize="small" />
                                        </IconButton>
                                    }
                                </Box>
                                {color ?
                                    // <TextField
                                    //     defaultValue={petData.color} />
                                    <FormControl fullWidth>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            name="id_color"
                                            // value={age}
                                            label="Color De Mascota"
                                            defaultValue={petData.color}
                                        >
                                            <MenuItem value={1}>Café</MenuItem>
                                            <MenuItem value={2}>Negro</MenuItem>
                                            <MenuItem value={3}>Gris</MenuItem>
                                            <MenuItem value={4}>Blanco</MenuItem>
                                        </Select>
                                    </FormControl>
                                    :
                                    <Typography variant="h6">
                                        {petData.color}
                                    </Typography>
                                }
                            </Grid>
                            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                                <Box className={classes.editField}>
                                    <Typography color="primary">Género</Typography>
                                    {genre ?
                                        <Box>
                                            <IconButton onClick={() => setActionType("save-genre")} size="small" className={classes.saveIcon}>
                                                <CheckIcon fontSize="small" />
                                            </IconButton>
                                            <IconButton onClick={() => setActionType("cancel-genre")} size="small" className={classes.cancelIcon}>
                                                <CancelIcon fontSize="small" />
                                            </IconButton>
                                        </Box>
                                        :
                                        <IconButton onClick={() => setActionType("edit-genre")} size="small" className={classes.editIcon}>
                                            <EditIcon fontSize="small" />
                                        </IconButton>
                                    }
                                </Box>
                                {genre ?
                                    <TextField
                                        defaultValue={petData.tipo} />
                                    :
                                    <Typography variant="h6">
                                        {petData.tipo}
                                    </Typography>
                                }
                            </Grid>
                            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                                <Box className={classes.editField}>
                                    <Typography color="primary">Esterilizado</Typography>
                                    {sterilized ?
                                        <Box>
                                            <IconButton onClick={() => setActionType("save-sterilized")} size="small" className={classes.saveIcon}>
                                                <CheckIcon fontSize="small" />
                                            </IconButton>
                                            <IconButton onClick={() => setActionType("cancel-sterilized")} size="small" className={classes.cancelIcon}>
                                                <CancelIcon fontSize="small" />
                                            </IconButton>
                                        </Box>
                                        :
                                        <IconButton onClick={() => setActionType("edit-sterilized")} size="small" className={classes.editIcon}>
                                            <EditIcon fontSize="small" />
                                        </IconButton>
                                    }
                                </Box>
                                {sterilized ?
                                    <TextField
                                        defaultValue={petData.esterilizado} />
                                    :
                                    <Typography variant="h6">
                                        Si
                                    </Typography>
                                }
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Divider style={{ marginBottom: '5px' }} variant="middle" />
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                <Box className={classes.editField}>
                                    <Typography color="primary">Departamento</Typography>
                                    {department ?
                                        <Box>
                                            <IconButton onClick={() => setActionType("save-department")} size="small" className={classes.saveIcon}>
                                                <CheckIcon fontSize="small" />
                                            </IconButton>
                                            <IconButton onClick={() => setActionType("cancel-department")} size="small" className={classes.cancelIcon}>
                                                <CancelIcon fontSize="small" />
                                            </IconButton>
                                        </Box>
                                        :
                                        <IconButton onClick={() => setActionType("edit-department")} size="small" className={classes.editIcon}>
                                            <EditIcon fontSize="small" />
                                        </IconButton>
                                    }
                                </Box>
                                {department ?
                                    <TextField
                                        defaultValue={petData.departameto} />
                                    :
                                    <Typography variant="h6">
                                        Bogotá
                                    </Typography>
                                }
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                <Box className={classes.editField}>
                                    <Typography color="primary">Ciudad o municipio</Typography>
                                    {city ?
                                        <Box>
                                            <IconButton onClick={() => setActionType("save-city")} size="small" className={classes.saveIcon}>
                                                <CheckIcon fontSize="small" />
                                            </IconButton>
                                            <IconButton onClick={() => setActionType("cancel-city")} size="small" className={classes.cancelIcon}>
                                                <CancelIcon fontSize="small" />
                                            </IconButton>
                                        </Box>
                                        :
                                        <IconButton onClick={() => setActionType("edit-city")} size="small" className={classes.editIcon}>
                                            <EditIcon fontSize="small" />
                                        </IconButton>
                                    }
                                </Box>
                                {city ?
                                    <TextField
                                        defaultValue={petData.municipio} />
                                    :
                                    <Typography variant="h6">
                                        {petData.municipio}
                                    </Typography>
                                }

                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Divider style={{ marginBottom: '5px' }} variant="middle" />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Box className={classes.editField}>
                                    <Typography color="primary">Vacunas registradas</Typography>
                                    {vaccines ?
                                        <Box>
                                            <IconButton onClick={() => setActionType("save-vaccines")} size="small" className={classes.saveIcon}>
                                                <CheckIcon fontSize="small" />
                                            </IconButton>
                                            <IconButton onClick={() => setActionType("cancel-vaccines")} size="small" className={classes.cancelIcon}>
                                                <CancelIcon fontSize="small" />
                                            </IconButton>
                                        </Box>
                                        :
                                        <IconButton onClick={() => setActionType("edit-vaccines")} size="small" className={classes.editIcon}>
                                            <EditIcon fontSize="small" />
                                        </IconButton>
                                    }
                                </Box>
                                {vaccines ?
                                    <TextField
                                        defaultValue={petData.vacunas} />
                                    :
                                    <Typography variant="h6">
                                        {petData.vacunas}
                                    </Typography>
                                }
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Divider style={{ marginBottom: '5px' }} variant="middle" />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Box className={classes.editField}>
                                    <Typography color="primary">Descripción</Typography>
                                    {description ?
                                        <Box>
                                            <IconButton onClick={() => setActionType("save-description")} size="small" className={classes.saveIcon}>
                                                <CheckIcon fontSize="small" />
                                            </IconButton>
                                            <IconButton onClick={() => setActionType("cancel-description")} size="small" className={classes.cancelIcon}>
                                                <CancelIcon fontSize="small" />
                                            </IconButton>
                                        </Box>
                                        :
                                        <IconButton onClick={() => setActionType("edit-description")} size="small" className={classes.editIcon}>
                                            <EditIcon fontSize="small" />
                                        </IconButton>
                                    }
                                </Box>
                                {description ?
                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={3}
                                        defaultValue={petData.descripcion_mascota} />
                                    :
                                    <Typography variant="h6">
                                        {petData.descripcion_mascota}
                                    </Typography>
                                }
                            </Grid>
                        </Grid>
                        <Divider style={{ marginBottom: '5px' }} variant="middle" />
                        <Grid container justify="center" >
                        </Grid>
                    </Grid>
                </Dialog>
                :
                null}

        </>
    )
}