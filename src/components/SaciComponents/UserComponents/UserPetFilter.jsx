import { Button, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { show_user_pets_action } from '../../../redux/actions/saciPets';
import { set_active_pets_action } from '../../../redux/actions/userPetsAction';

export default function UserPetFilter() {
    const { userPetsRegistered } = useSelector(state => state.userPets);
    const [petState, setPetState] = useState("1");
    const { showUserPets } = useSelector(state => state.saciPets);
    const dispatch = useDispatch();
    useEffect(() => {
        if (petState !== null) {
            const userPet = userPetsRegistered.filter(pet => pet.publicado === petState);
            dispatch(show_user_pets_action(userPet));
        }
        if (petState === "1") {
            dispatch(set_active_pets_action(true));
        }
        if (petState === "0") {
            dispatch(set_active_pets_action(false));
        }
    }, [petState]);
    return (
        <>
            <Grid container style={{ marginTop: "100px", /* marginLeft: "10px", */ marginRight: "30px" }} spacing={2} alignItems="center" justify="center">
                <Grid item xs={8}>
                    <Button
                        onClick={() => setPetState("1")}
                        variant="contained"
                        fullWidth
                        color="primary"
                        style={{ color: "#fff", textTransform: "none" }}>
                        Mascotas Publicadas
                    </Button>
                </Grid>
                <Grid item xs={8}>
                    <Button
                        onClick={() => setPetState("0")}
                        variant="contained" color="primary"
                        fullWidth
                        style={{ color: "#fff", textTransform: "none" }}>
                        Publicaciones desactivadas
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}
