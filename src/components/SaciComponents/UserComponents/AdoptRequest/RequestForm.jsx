import { Button, Divider, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react'
//icons
import InfoIcon from '@material-ui/icons/Info';
import adoptRequestStyles from '../../../../assets/css/js/adoptRequestStyles';
import { useSelector } from 'react-redux';

export default function RequestForm() {
    const [displayData, setDisplayData] = useState(true);
    const { selectRequestData } = useSelector(state => state.userPets);
    const classes = adoptRequestStyles();
    const baseURL = process.env.REACT_APP_BACKEND_URL;
    console.log(selectRequestData)
    return (
        <>
            <div>
                {selectRequestData ?
                    (
                        <div style={{
                            paddingLeft: '300px',
                            paddingRight: '300px'
                        }}>
                            <Grid container spacing={2} alignContent='center' justify='center' alignItems='center'>
                                <Grid item xl={4}>
                                    <Typography variant='h5'>
                                        {selectRequestData.nombres}
                                    </Typography>
                                </Grid>
                                <Grid item xl={12}>
                                    <Divider />
                                </Grid>
                                <Grid item xl={12} style={{ marginBottom: '30px' }}>
                                    {/* <img src={`${baseURL}219.jpg`} className={classes.profilePet} /> */}
                                </Grid>
                                <Grid item xl={12}>
                                    <Typography variant='h6'>
                                        Mascota solicitada: {selectRequestData.nombre_mascota}
                                    </Typography>
                                </Grid>
                                <Grid item xl={12}>
                                    <Typography variant='h6'>
                                        Email: {selectRequestData.correo}
                                    </Typography>
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
