import React/* , { Suspense, lazy } */ from 'react'
import { makeStyles } from '@material-ui/core';
import Header from '../components/SaciComponents/Header'
import CardsPets from '../components/SaciComponents/Adoption/CardsPets'
import FiltersPets from '../components/SaciComponents/Adoption/FiltersPets'
import FiltersPetsResponsive from '../components/SaciComponents/Adoption/FiltersPetsResponsive'
import { Grid, Hidden } from '@material-ui/core';
import Pagination from '../components/SaciComponents/Pagination'
import AdoptMeForm from '../components/SaciComponents/Adoption/AdoptMeForm';

const useStyles = makeStyles((theme) => ({
    pageContainer: {
        marginTop: '1%',
        marginBottom: '1%',
    }
}))




export default function SaciDashboard() {
    const classes = useStyles();

    return (
        <>
            <Header />
            <Grid container>

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
                    <CardsPets />
                </Grid>

                <AdoptMeForm />

            </Grid>
            <Grid container justify='center' className={classes.pageContainer}>
                <Pagination />
            </Grid>
        </>
    )
}

