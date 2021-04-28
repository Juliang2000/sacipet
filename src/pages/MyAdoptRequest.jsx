import React, { useEffect } from 'react'

//components
import Header from '../components/SaciComponents/Header'
import SideBar from '../components/SaciComponents/UserComponents/AdoptRequest/SideBar'
import RequestForm from '../components/SaciComponents/UserComponents/AdoptRequest/RequestForm'
import { Divider, Grid, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import UserPetFilter from '../components/SaciComponents/UserComponents/UserPetFilter'


export default function MyAdoptRequest() {
    const { nombres } = useSelector(state => state.login.user);
    const history = useHistory();

    useEffect(() => {
        if (nombres.length === 0) {
            history.push('/')
        }
    }, [nombres]);

    return (
        <>
            <div /* style={{ minHeight: '100vh' }} */>
                <div>
                    <Header />

                </div>

                <Grid container style={{ paddingTop: '20px' }} justify='center'>
                    <Grid item style={{ paddingLeft: '40px', height: '600px', alignContent: 'center' }} xs={2} lg={3} xl={2} >
                        <Typography
                            // style={{ paddingBottom: '30px' }}
                            variant="h5">
                            Solicitudes entrantes
                            </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <SideBar />
                            </Grid>
                            <Grid item xs={12}>
                                <UserPetFilter />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={10} lg={9} xl={10} >
                        <RequestForm />
                    </Grid>
                </Grid>
            </div>

        </>

    )
}
