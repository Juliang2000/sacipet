import { Button, Divider, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
//icons
import InfoIcon from '@material-ui/icons/Info';
import adoptRequestStyles from '../../../../assets/css/js/adoptRequestStyles';
import { useSelector } from 'react-redux';

export default function RequestForm() {
    const [displayData, setDisplayData] = useState(true);
    const { selectRequestData } = useSelector(state => state.userPets);
    const { departments } = useSelector(state => state.adoptFormData);
    const classes = adoptRequestStyles();
    const baseURL = process.env.REACT_APP_BACKEND_URL;
    console.log(selectRequestData)
    useEffect(() => {
        if (selectRequestData) {
            const departmentData = departments.filter(item => item.id_codigo === selectRequestData.id_codigo);
            console.log(departmentData);
        }
    }, [selectRequestData])

    return (
        <>
            <div>
                {selectRequestData ?
                    (
                        <div style={{
                            paddingLeft: '300px',
                            paddingRight: '300px'
                        }}>
                            <Grid container spacing={2}
                                alignContent='center'
                                justify='center'
                                alignItems='center'
                            >
                                <Grid item xl={12}>
                                    <Divider />
                                </Grid>
                                <Grid item xl={4}>
                                    <Typography variant='h4'>
                                        {selectRequestData.nombres}
                                    </Typography>
                                </Grid>
                                <Grid item xl={12}>
                                    <Divider />
                                </Grid>
                                <Grid item xl={12}
                                // style={{ marginBottom: '30px' }}
                                >
                                    {/* <img src={`${baseURL}219.jpg`} className={classes.profilePet} /> */}
                                </Grid>
                                <Grid item xl={4}>
                                    <Typography
                                        color='primary'
                                    >
                                        Mascota solicitada
                                    </Typography>
                                    <Typography
                                        variant='h6'
                                    >
                                        {selectRequestData.nombre_mascota}
                                    </Typography>
                                </Grid>
                                <Grid item xl={4}>
                                    <Typography
                                        color='primary'
                                    >
                                        Email
                                    </Typography>
                                    <Typography
                                        variant='h6'
                                    >
                                        {selectRequestData.correo_user}
                                    </Typography>
                                </Grid>
                                <Grid item xl={4}>
                                    <Typography
                                        color='primary'
                                    >
                                        Teléfono
                                    </Typography>
                                    <Typography
                                        variant='h6'
                                    >
                                        {selectRequestData.telefono}
                                    </Typography>
                                </Grid>
                                <Grid item xl={12}>
                                    <Divider />
                                </Grid>
                                <Grid item xl={4}>
                                    <Typography
                                        color='primary'
                                    >
                                        Estado civil
                                    </Typography>
                                    <Typography
                                        variant='h6'
                                    >
                                        {selectRequestData.estado_civil}
                                    </Typography>
                                </Grid>
                                <Grid item xl={4}>
                                    <Typography
                                        color='primary'
                                    >
                                        Ocupación
                                    </Typography>
                                    <Typography
                                        variant='h6'
                                    >
                                        {selectRequestData.ocupacion}
                                    </Typography>
                                </Grid>
                                <Grid item xl={4}>
                                    <Typography
                                        color='primary'
                                    >
                                        Ubicación
                                    </Typography>
                                    <Typography
                                        variant='h6'
                                    >
                                        {selectRequestData.localidad}
                                    </Typography>
                                </Grid>
                                <Grid item xl={12}>
                                    <Divider />
                                </Grid>
                                {selectRequestData.pregunta_1 ?
                                    (
                                        <>
                                            <Grid item xl={12}>
                                                <Typography
                                                    color='primary'
                                                >
                                                    Pregunta: ¿Por qué desea adoptar a una mascota?
                                            </Typography>
                                                <Typography
                                                    variant='h6'
                                                >
                                                    {selectRequestData.pregunta_1}
                                                </Typography>
                                            </Grid>
                                            <Grid item xl={12}>
                                                <Divider />
                                            </Grid>
                                        </>
                                    )
                                    : null
                                }
                                {
                                    selectRequestData.pregunta_2 ?
                                        (
                                            <>
                                                <Grid item xl={12}>
                                                    <Typography
                                                        color='primary'
                                                    >
                                                        Pregunta: ¿Tiene más mascotas?
                                            </Typography>
                                                    <Typography
                                                        variant='h6'
                                                    >
                                                        {selectRequestData.pregunta_2}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xl={12}>
                                                    <Divider />
                                                </Grid>
                                            </>
                                        )
                                        : null
                                }
                                {
                                    selectRequestData.pregunta_3 ?
                                        (
                                            <>
                                                <Grid item xl={12}>
                                                    <Typography
                                                        color='primary'
                                                    >
                                                        Pregunta: ¿Tiene espacio suficiente para la comodidad de la mascota?
                                                    </Typography>
                                                    <Typography
                                                        variant='h6'
                                                    >
                                                        {selectRequestData.pregunta_3}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xl={12}>
                                                    <Divider />
                                                </Grid>
                                            </>
                                        )
                                        : null
                                }
                                {
                                    selectRequestData.pregunta_4 ?
                                        (
                                            <>
                                                <Grid item xl={12}>
                                                    <Typography
                                                        color='primary'
                                                    >
                                                        Pregunta: ¿Si se ausenta puede dejarla a cargo con alguien más?
                                            </Typography>
                                                    <Typography
                                                        variant='h6'
                                                    >
                                                        {selectRequestData.pregunta_4}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xl={12}>
                                                    <Divider />
                                                </Grid>
                                            </>
                                        )
                                        : null
                                }
                                {
                                    selectRequestData.pregunta_5 ?
                                        (
                                            <>
                                                <Grid item xl={12}>
                                                    <Typography
                                                        color='primary'
                                                    >
                                                        Pregunta: ¿Estaría a disposición para llevar periódicamente a la mascota con un veterinario?
                                            </Typography>
                                                    <Typography
                                                        variant='h6'
                                                    >
                                                        {selectRequestData.pregunta_5}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xl={12}>
                                                    <Divider />
                                                </Grid>
                                            </>
                                        )
                                        : null
                                }
                                {
                                    selectRequestData.pregunta_6 ?
                                        (
                                            <>
                                                <Grid item xl={12}>
                                                    <Typography
                                                        color='primary'
                                                    >
                                                        Pregunta: ¿Estaría dispuesto a vacunarla?
                                            </Typography>
                                                    <Typography
                                                        variant='h6'
                                                    >
                                                        {selectRequestData.pregunta_6}
                                                    </Typography>
                                                </Grid>
                                            </>
                                        )
                                        : null
                                }
                                <Grid item xl={2}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        style={{
                                            color: '#fff',
                                            textTransform: 'none'
                                        }}
                                    >
                                        Aceptar
                                    </Button>
                                </Grid>
                                <Grid item xl={2}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        style={{
                                            color: '#fff',
                                            textTransform: 'none'
                                        }}
                                    >
                                        Rechazar
                                    </Button>
                                </Grid>
                            </Grid>

                            {/* <Grid container alignContent='center' justify='center' alignItems='center'>
                                
                            </Grid> */}
                        </div>
                    )
                    :
                    (
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ marginLeft: 'auto', marginRight: 'auto', /* alignItems: 'center', display: 'flex'  */ }}>
                                <InfoIcon />
                                <Typography
                                    variant='h6'>
                                    Selecciona alguna solicitud para ver los detalles.
                                </Typography>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}
