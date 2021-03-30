import { Card, CardHeader, CardMedia, Dialog, Grid, IconButton, Menu, MenuItem, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_pets_by_user_action, user_pets_modal_action } from '../../../redux/actions/userPetsAction';
//icons
import CloseIcon from '@material-ui/icons/Close';
import userPetsModalStyles from '../../../assets/css/js/userPetsModalStyles';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function UserPetsModal() {
    const dispatch = useDispatch();
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


    return (
        <>
            <Dialog fullScreen={fullScreenResponsive} maxWidth='lg' open={userPetsModal === true} onClose={() => dispatch(user_pets_modal_action(false))}>
                <Grid container alignItems="center">
                    <Grid container justify="flex-end">
                        <IconButton
                            className={classes.closeIconButton}
                            edge="end"
                            color="primary"
                            aria-label="close"
                            onClick={() => dispatch(user_pets_modal_action(false))}
                        >
                            <CloseIcon className={classes.closeButton} />
                        </IconButton>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography style={{ textAlign: 'center' }} variant="h5">Tus Mascotas Registradas</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={isMobile ? 1 : 2} justify='center' className={classes.body}>

                        {userPetsRegistered?.map(pet => (
                            <Grid item key={pet.id_mascota} xl={4} lg={3} md={4} sm={6} xs={12}>
                                <Card onClick={() => console.log(pet.id_mascota)} className={classes.cardsPets}>
                                    <CardHeader
                                        title={<Typography variant="h6" color="primary">{pet.nombre_mascota}</Typography>}
                                        subheader={<Grid style={{ height: '35px' }} container>{pet.raza}</Grid>}
                                        action={
                                            <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleOpenMenu} aria-label="settings">
                                                <MoreVertIcon />
                                            </IconButton>}
                                    />
                                    <CardMedia className={classes.media}
                                        image={`${baseURL}219.jpg`} />
                                </Card>
                            </Grid>

                        ))}

                    </Grid>

                </Grid>

                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handlePetMenuClose}
                >
                    <MenuItem>Ver Datos</MenuItem>
                    <MenuItem>Eliminar Mascota</MenuItem>
                </Menu>

            </Dialog>
        </>
    )
}

