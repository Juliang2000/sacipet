import { Card, CardHeader, CardMedia, Dialog, Grid, IconButton, Menu, MenuItem, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_pets_by_user_action, save_user_pet_id_action, set_user_pet_modal_data_action, save_selected_user_pet_action, save_selected_pet_data_action } from '../../../redux/actions/userPetsAction';
//icons
import CloseIcon from '@material-ui/icons/Close';
import userPetsModalStyles from '../../../assets/css/js/userPetsModalStyles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useHistory } from 'react-router';

export default function UserPets() {
    const dispatch = useDispatch();
    const [petId, setPetId] = useState(null);
    const history = useHistory();
    const { userPetsModal } = useSelector(state => state.userPets)
    const { id } = useSelector(state => state.login.user)
    const { userPetsRegistered } = useSelector(state => state.userPets)
    const classes = userPetsModalStyles();
    const theme = useTheme();
    const userId = {
        id_usuario: `${id}`
    }
    const baseURL = process.env.REACT_APP_BACKEND_URL;
    const [petMenu, setPetMenu] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'), {
        defaultMatches: true,
    });

    useEffect(() => {
        if (id) {
            dispatch(get_pets_by_user_action(userId))
        }
    }, [id])

    const handleOpenMenu = event => {
        setAnchorEl(event.currentTarget);
    }
    const handlePetMenuClose = () => {
        setAnchorEl(null);
    }
    const fullScreenResponsive = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpenData = () => {
        dispatch(set_user_pet_modal_data_action(true));
        setAnchorEl(null);
    }

    useEffect(() => {
        const userPetData = userPetsRegistered.filter(pet => pet.id_mascota === petId);
        dispatch(save_selected_pet_data_action(userPetData[0]));
    }, [petId])

    useEffect(() => {
        if (petId !== null) {
            dispatch(save_user_pet_id_action(petId))
        }
    }, [petId])

}

