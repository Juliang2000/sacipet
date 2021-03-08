import React/* , { Suspense, lazy } */ from 'react'
import Header from '../components/SaciComponents/Header'
import CardsPets from '../components/SaciComponents/Adoption/CardsPets'
import FiltersPets from '../components/SaciComponents/Adoption/FiltersPets'
import FiltersPetsResponsive from '../components/SaciComponents/Adoption/FiltersPetsResponsive'
import { Grid, Hidden } from '@material-ui/core';

// const CardsPets = lazy(() => import('../components/SaciComponents/Adoption/CardsPets'))


export default function SaciDashboard() {

    return (
        <>
            <Header />
            <Grid container /* style={{ marginTop: '50px' }} */>

                <Hidden smDown>
                    <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
                        <FiltersPets />
                    </Grid>
                </Hidden>

                <Hidden mdUp>
                    <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
                        <FiltersPetsResponsive />
                    </Grid>
                </Hidden>

                <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
                    {/* <Suspense fallback={<h1>Cargando ...</h1>}> */}
                        <CardsPets />
                    {/* </Suspense> */}
                </Grid>
            </Grid>
        </>
    )
}

