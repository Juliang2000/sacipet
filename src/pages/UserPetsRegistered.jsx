import React/* , { Suspense, lazy } */ from 'react'
import { makeStyles } from '@material-ui/core';
import Header from '../components/SaciComponents/Header'
import CardsPets from '../components/SaciComponents/Adoption/CardsPets'
import FiltersPets from '../components/SaciComponents/Adoption/FiltersPets'
import FiltersPetsResponsive from '../components/SaciComponents/Adoption/FiltersPetsResponsive'
import { Grid, Hidden } from '@material-ui/core';
import UserPets from '../components/SaciComponents/UserComponents/UserPets';
import UserPetModalData from '../components/SaciComponents/UserComponents/UserPetModalData';


const useStyles = makeStyles((theme) => ({
    pageContainer: {
        marginTop: '1%',
        marginBottom: '1%',
    }
}))

export default function UserPetsRegistered() {
    const classes = useStyles();

    return (
        <>
            <Header />
            <Grid container>
                <UserPets />
            </Grid>
            <UserPetModalData />
        </>
    )
}

