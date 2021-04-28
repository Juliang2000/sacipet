import { Box, Checkbox, FormControl, Grid, InputLabel, ListItemText, MenuItem, Select, TextField, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { get_form_data_action, save_user_contact_data_action, set_checkbox_contactData_action } from '../../../redux/actions/adoptFormAction';
import { save_selected_pet_data_action } from '../../../redux/actions/userPetsAction';

export default function UserDescription() {
    const dispatch = useDispatch();
    const { nombres, telefono } = useSelector(state => state.login.user);
    const { contactData } = useSelector(state => state.adoptFormData);
    const { descriptionData } = useSelector(state => state.adoptFormData);
    const { userPetData } = useSelector(state => state.userPets)
    const correo_store = useSelector(state => state.login.user.correo);
    const { showUserPets, checkBoxContactData } = useSelector(state => state.adoptFormData);
    const [userData, setUserData] = useState({
        nombre: contactData.nombre?.length ? `${contactData.nombre}` : `${nombres}`,
        telefono1: contactData.telefono1?.length ? `${contactData.telefono1}` : `${telefono}`,
        telefono2: contactData.telefono2?.length ? `${contactData.telefono2}` : '',
        correo: contactData.correo?.length ? `${contactData.correo}` : `${correo_store}`
    });
    const { nombre, telefono1, telefono2, correo } = userData;
    const checkboxTelefono_1 = checkBoxContactData.telefono1;
    const checkboxTelefono_2 = checkBoxContactData.telefono2;
    const checkboxCorreo = checkBoxContactData.correo;
    const [inputsCheckBox, setInputsCheckBox] = useState({
        telefono1: checkboxTelefono_1,
        telefono2: checkboxTelefono_2,
        correo: checkboxCorreo
    });

    useEffect(() => {
        if (showUserPets) {
            setUserData({
                nombre: userPetData.nombre ? `${userPetData.nombre}` : '',
                telefono1: userPetData.telefono1 ? `${userPetData.telefono1}` : '',
                telefono2: userPetData.telefono2 ? `${userPetData.telefono2}` : '',
                correo: userPetData.correo ? `${userPetData.correo}` : ''
            });
        } else {
            if (contactData.telefono1?.length) {
                setUserData({
                    nombre: `${contactData.nombre}`,
                    telefono1: `${contactData.telefono1}`,
                    telefono2: contactData.telefono2 ? `${contactData.telefono2}` : '',
                    correo: `${contactData.correo}`
                })
            } else {
                dispatch(get_form_data_action({
                    ...descriptionData,
                    nombre: nombres,
                    telefono1: telefono,
                    correo: correo_store
                }));
                setUserData({
                    nombre: `${nombres}`,
                    telefono1: `${telefono}`,
                    correo: `${correo_store}`
                });
            }
        }
    }, []);

    useEffect(() => {
        if (userPetData.telefono1?.length === 0) {
            dispatch(set_checkbox_contactData_action({ ...checkBoxContactData, telefono1: false }));
        };
    }, []);
    useEffect(() => {
        if (userPetData.telefono2?.length === 0) {
            dispatch(set_checkbox_contactData_action({ ...checkBoxContactData, telefono2: false }));
        } else {
            dispatch(set_checkbox_contactData_action({ ...checkBoxContactData, telefono2: true }));
        }
    }, []);
    useEffect(() => {
        if (userPetData.correo?.length === 0) {
            setInputsCheckBox({ ...inputsCheckBox, correo: false })
        }
    }, []);

    const handleChange = ({ target }) => {
        setUserData({
            ...userData,
            [target.name]: target.value
        });
    }
    const handleChangeCheckBox = ({ target }) => {
        setInputsCheckBox({ ...inputsCheckBox, [target.name]: target.checked });
        dispatch(set_checkbox_contactData_action({ ...checkBoxContactData, [target.name]: target.checked }));
    };
    useEffect(() => {
        if (inputsCheckBox.telefono1 === false) {
            dispatch(get_form_data_action({
                ...descriptionData,
                telefono1: '',
            }));
        }
        dispatch(save_user_contact_data_action({
            nombre: nombre,
            telefono1: telefono1,
            telefono2: telefono2,
            correo: correo
        }));
    }, [userData]);

    useEffect(() => {
        if (showUserPets) {
            if (inputsCheckBox.telefono1 === false) {
                dispatch(save_selected_pet_data_action({
                    ...userPetData,
                    telefono1: '',
                }));
            } else {
                dispatch(save_selected_pet_data_action({
                    ...userPetData,
                    telefono1: telefono1,
                }));
            }
        } else {
            if (checkboxTelefono_1 === false) {
                dispatch(get_form_data_action({
                    ...descriptionData,
                    telefono1: '',
                }));
            } else {
                dispatch(get_form_data_action({
                    ...descriptionData,
                    telefono1: telefono1,
                }));
            }
        }
    }, [telefono1, checkboxTelefono_1]);

    useEffect(() => {
        if (showUserPets) {
            dispatch(save_selected_pet_data_action({
                ...userPetData,
                telefono2: '',
            }));
        } else {
            if (checkboxTelefono_1) {
                dispatch(get_form_data_action({
                    ...descriptionData,
                    telefono2: telefono2,
                }));
            } else {
                dispatch(get_form_data_action({
                    ...descriptionData,
                    telefono2: '',
                }));
            }
        }
    }, [telefono2, checkboxTelefono_2]);

    useEffect(() => {
        if (showUserPets) {
            dispatch(save_selected_pet_data_action({
                ...userPetData,
                correo: '',
            }));
        } else {
            if (checkboxCorreo) {
                dispatch(get_form_data_action({
                    ...descriptionData,
                    correo: correo
                }));
            } else {
                dispatch(get_form_data_action({
                    ...descriptionData,
                    correo: ''
                }));
            }
        }
    }, [correo, checkboxCorreo]);

    return (
        <>

            <Grid
                container
                spacing={2}
                style={{
                    paddingLeft: '200px',
                    paddingRight: '200px'
                }}
            >
                <Grid
                    item
                    xs={12}>
                    <Typography
                        variant="h4"
                        gutterBottom
                    >
                        Datos de contacto
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={12}>
                    <Typography
                        gutterBottom
                    >
                        Ingresa datos de contacto adicionales,
                        al activar las casillas indicas
                        que permites que otros usuarios
                        te puedan contactar por dichos medios
                    </Typography>
                </Grid>
                {/* <Grid
                    item
                    xs={12}
                    sm={5}
                    md={6}
                    xl={1}
                >
                    <Box />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={5}
                    md={6}
                    xl={11}
                >
                    <TextField
                        label="Nombres y Apellidos"
                        type="text"
                        name="nombre"
                        variant="outlined"
                        fullWidth
                        value={nombre}
                        onChange={handleChange}

                    />
                </Grid> */}
                <Grid item xs={12} sm={5} md={6} xl={1}>
                    <Checkbox
                        color='primary'
                        name="telefono1"
                        checked={inputsCheckBox.telefono1}
                        onChange={handleChangeCheckBox}

                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={5}
                    md={6}
                    xl={11}>
                    <TextField
                        label="Teléfono Principal"
                        type="text"
                        name="telefono1"
                        variant="outlined"
                        fullWidth
                        value={telefono1}
                        disabled={inputsCheckBox.telefono1 === false}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={5}
                    md={6}
                    xl={1}
                >
                    <Checkbox
                        color='primary'
                        name="telefono2"
                        checked={inputsCheckBox.telefono2}
                        onChange={handleChangeCheckBox}
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={5}
                    md={6}
                    xl={11}>
                    <TextField
                        label="Teléfono Secundario"
                        type="text"
                        name="telefono2"
                        variant="outlined"
                        fullWidth
                        value={telefono2}
                        disabled={inputsCheckBox.telefono2 === false}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid
                    item xs={12}
                    sm={5} md={6}
                    xl={1}
                >
                    <Checkbox
                        color='primary'
                        name="correo"
                        checked={inputsCheckBox.correo}
                        onChange={handleChangeCheckBox}
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={5}
                    md={6}
                    xl={11}
                >
                    <TextField
                        label="Correo"
                        type="email"
                        name="correo"
                        variant="outlined"
                        fullWidth
                        value={correo}
                        disabled={inputsCheckBox.correo === false}
                        onChange={handleChange}
                    />
                </Grid>
            </Grid>

        </>
    )


}
