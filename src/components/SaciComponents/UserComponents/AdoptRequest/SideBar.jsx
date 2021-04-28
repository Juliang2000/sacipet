import { Button, Divider, Grid, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { set_selected_request_action } from '../../../../redux/actions/userPetsAction';

export default function SideBar() {
    const { petRequestArray } = useSelector(state => state.userPets);
    const [requestId, setRequestId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (requestId !== null) {
            let selectedRequest = petRequestArray.filter(item => item.id_formulario === requestId)[0];
            dispatch(set_selected_request_action(selectedRequest));
        }
    }, [requestId])
    return (
        <div
            style={{
                overflowY: 'scroll',
                overflowX: 'hidden'
            }}
        >{petRequestArray.length ?
            petRequestArray.map(item => (
                <Grid key={item.id_formulario} container spacing={3}>
                    <Grid item xs={6}>
                        <Typography >
                            {item.nombres}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            color='primary'
                            variant='contained'
                            style={{ textTransform: 'none', color: '#fff' }}
                            onClick={() => setRequestId(item.id_formulario)}
                        >
                            Ver Datos
                            </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                </Grid>
            ))

            :
            <Grid container>
                <Typography>No hay solicitudes entrantes</Typography>
            </Grid>
            }
        </div>
    )
}
