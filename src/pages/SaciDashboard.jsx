import React from 'react'
import Header from '../components/SaciComponents/Header'
import CardsPets from '../components/SaciComponents/Adoption/CardsPets'
import FiltersPets from '../components/SaciComponents/Adoption/FiltersPets'
import FiltersPetsResponsive from '../components/SaciComponents/Adoption/FiltersPetsResponsive'
import { Grid, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({

    // adoption: {
    //     marginTop: '50px',
    //     display: 'flex',
    // }
}))


function SaciDashboard() {
    const classes = useStyles()
    return (
            <React.Fragment>
                <Header />
                <Grid container style={{ marginTop: '50px' }} className={classes.adoption}>

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
                </Grid>
            </React.Fragment>
    )
}

export default SaciDashboard