import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

import {
    makeStyles,
    withStyles,
    Button,
    Grid,
    Dialog,
    Hidden,
    Toolbar,
    IconButton,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText,
    useMediaQuery
} from '@material-ui/core'

import { useTheme } from '@material-ui/core/styles';


//icons
import Person from '@material-ui/icons/Person';
import petUser from '../../assets/icons/drawer/petUser-final.svg';
import CloseIcon from '@material-ui/icons/Close';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

//Redux
import { useSelector, useDispatch } from 'react-redux';

// Swal Alerts
import Swal from 'sweetalert2';

import Login from '../../pages/Login'
import Register from '../../pages/Register'
import { LoginRegisteredAction, login_dialog_close_action, login_dialog_open_action, adopt_dialog_close_action, adoptstepper_dialog_open_action, check_login_action } from '../../redux/actions/loginAction';
import { register_dialog_close_action } from '../../redux/actions/registerAction';
import { reset_pets_action, set_active_pets_action, user_pets_modal_action } from '../../redux/actions/userPetsAction';
import { show_out_request_pets_action, show_user_pets_action } from '../../redux/actions/saciPets';


const useStyles = makeStyles((theme) => ({

    accountCircle: {
        color: '#fff',
        textTransform: 'none',
        fontSize: '15px',
        [theme.breakpoints.between('xs', 'sm')]: {
            color: '#000',
        }
    },
    loginButton: {
        color: '#fff',
        textTransform: 'none',
        fontSize: '15px',
        [theme.breakpoints.between('xs', 'sm')]: {
            color: '#000',
        }
    },
    accountIcon: {
        width: '40px',
    },

    menuIcons: {
        width: '40px',
        [theme.breakpoints.only('xs')]: {
            width: '30px',
        }
    },
}));


const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
        marginTop: '5px',
    },
})((props) => (
    <Menu
        // elevation={2}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

export default function SectionDesktop() {

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const [cleanPets, setCleanPets] = useState(false);
    const dispatch = useDispatch();
    const { checkLogin } = useSelector(state => state.login);
    const { nombres } = useSelector(state => state.login.user);
    const { registerData } = useSelector(state => state.register);

    const { loginDialog } = useSelector(state => state.login);
    const { registerDialog } = useSelector(state => state.register);
    const { userPetsRegistered, showUserPets } = useSelector(state => state.userPets)
    const { outputRequestData } = useSelector(state => state.outputRequest)

    const newUser = useSelector(state => state.register.registerLoginData);

    ///////////////Constantes Botón Encuentra tu mascota////////////////
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    ////////////////////////////////////////////////////////////////////

    const classes = useStyles();

    const handleClickOpenLogin = () => {
        dispatch(adopt_dialog_close_action())
        dispatch(login_dialog_open_action())
    };

    const handleClickCloseLogin = () => {
        dispatch(login_dialog_close_action())
    };

    const handleClickCloseRegister = () => {
        dispatch(register_dialog_close_action())
    };

    useEffect(() => {
        if (nombres.length !== 0) {
            if (checkLogin === false) {
                Swal.fire({
                    icon: 'success',
                    title: `Bienvenid@ ${nombres}`,
                    text: 'Sesión Iniciada',
                    confirmButtonColor: '#63C132',
                }).then((result) => {
                    dispatch(login_dialog_close_action());
                    dispatch(register_dialog_close_action());
                    dispatch(adoptstepper_dialog_open_action());
                    if (result.isConfirmed) {
                        Swal.close();
                        dispatch(check_login_action());
                    }
                })
            }
        }
    }, [dispatch, nombres, checkLogin])

    useEffect(() => {
        if (registerData.length !== 0) {
            Swal.fire({
                icon: 'success',
                title: `Muy Bien! ${newUser.nombres}`,
                text: 'Registro Exitoso!',
                confirmButtonColor: '#63C132',
            }).then((result) => {
                dispatch(LoginRegisteredAction(newUser));
                dispatch(register_dialog_close_action());
                if (result.isConfirmed) {
                    Swal.close()
                }
            })
        }
    }, [registerData, dispatch, newUser])

    const handleclickMyPets = () => {
        setAnchorEl(null);
        if (userPetsRegistered?.length) {
            dispatch(show_user_pets_action(userPetsRegistered));
        } else {
            Swal.fire({
                icon: 'error',
                title: `Ooops!, no tienes mascotas publicadas`,
                confirmButtonColor: '#63C132',
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.close()
                }
            })
        }
    }

    const handleClickOutputRequest = () => {
        // if(outputRequestData?.length) {
            dispatch(show_out_request_pets_action(outputRequestData));
        // }
    }

    // Rediccionamiento a perfil de usuario con history push
    let history = useHistory();
    function handleclickMyProfile() {
        history.push("/Profile");
    }

    // useEffect(() => {
    //     if (cleanPets) {
    //         dispatch(show_user_pets_action(userPetsRegistered));
    //     }
    // }, [cleanPets])

    return (
        <>
            { nombres ?
                <>
                    <Hidden smDown>
                        <Button
                            className={classes.accountCircle}
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={handleClick}
                            startIcon={<img src={petUser} alt="Login" className={classes.menuIcons} />}
                        >
                            <ArrowDropDownIcon />
                            {`${nombres}`}
                        </Button>
                    </Hidden>

                    <Hidden mdUp>
                        <MenuItem
                            className={classes.accountCircle}
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={handleClick}
                        >
                            <img src={petUser} alt="Login" className={classes.menuIcons} />
                            <ArrowDropDownIcon />
                            {`${nombres}`}
                        </MenuItem>
                    </Hidden>

                    <StyledMenu
                        autoFocus={false}
                        id="customized-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <StyledMenuItem onClick={handleclickMyProfile}>
                            <ListItemIcon>
                                <Person />
                            </ListItemIcon>
                            <ListItemText primary="Ver Tu Perfil" />
                        </StyledMenuItem>
                        <StyledMenuItem onClick={handleclickMyPets}>
                            <ListItemIcon>
                                <Person />
                            </ListItemIcon>
                            <ListItemText primary="Mis mascotas publicadas" />
                        </StyledMenuItem>
                        <StyledMenuItem onClick={handleClickOutputRequest} >
                            <ListItemIcon>
                                <Person />
                            </ListItemIcon>
                            <ListItemText primary="Tus solicitudes de adopción" />
                        </StyledMenuItem>
                    </StyledMenu>
                </> :

                <>
                    <Hidden smDown>
                        <Button
                            // fullWidth
                            color="secondary"
                            className={classes.loginButton}
                            onClick={handleClickOpenLogin}
                            startIcon={<img src={petUser} alt="Login" className={classes.menuIcons} />}
                        >
                            <ArrowDropDownIcon />
                            Ingresar
                        </Button>
                    </Hidden>

                    <Hidden mdUp>
                        <MenuItem
                            color="secondary"
                            className={classes.loginButton}
                            onClick={handleClickOpenLogin}
                        >
                            <img src={petUser} alt="Login" className={classes.menuIcons} />
                            <ArrowDropDownIcon />
                            Ingresar
                        </MenuItem>
                    </Hidden>
                </>
            }

            <Dialog
                open={loginDialog === true}
                onClose={handleClickCloseLogin}
                style={{ zIndex: 1 }}
                fullScreen={fullScreen}
            >
                <Grid container justify="flex-end">
                    <Toolbar>
                        <IconButton edge="end" color="primary" aria-label="close" onClick={handleClickCloseLogin}>
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </Grid>
                <Login />
            </Dialog>
            <Dialog
                open={registerDialog === true}
                onClose={handleClickCloseRegister}
                style={{ zIndex: 1 }}
                fullScreen={fullScreen}
            >
                <Grid container justify="flex-end">
                    <Toolbar>
                        <IconButton edge="end" color="primary" aria-label="close" onClick={handleClickCloseRegister}>
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </Grid>
                <Register />
            </Dialog>
        </>

    )
}
