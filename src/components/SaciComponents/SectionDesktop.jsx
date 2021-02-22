import React from 'react';
// import { useHistory } from 'react-router-dom';
import { makeStyles, withStyles, Button, Grid } from '@material-ui/core'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

//icons
import Home from '@material-ui/icons/Home';
import Person from '@material-ui/icons/Person';
// import CloseIcon from '@material-ui/icons/Close';
import petUser from '../../assets/icons/drawer/petUser.svg';

//Redux
import { useSelector, useDispatch } from 'react-redux';

import { Dialog, /* AppBar, Toolbar, IconButton */ } from '@material-ui/core';
import Swal from 'sweetalert2';

import Login from '../../pages/Login'
import Register from '../../pages/Register'
import { LoginRegisteredAction, LoginUserRegistered, login_dialog_action, login_dialog_close_action, login_dialog_open_action, register_to_login_action } from '../../redux/actions/loginAction';
import { register_dialog_close_action } from '../../redux/actions/registerAction';


const useStyles = makeStyles((theme) => ({

    accountCircle: {
        color: '#fff',
        textTransform: 'none',
        fontSize: '15px',
    },
    loginButton: {
        color: '#fff',
        textTransform: 'none',
        fontSize: '15px',
    },
    accountIcon: {
        width: '40px',
    }
}));


const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
        marginTop: '10px',
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

//  const [openRegister, setOpenRegister] = React.useState(false);

// export const HandleClickOpenRegister = () => {
//     setOpenRegister(true)
//     alert('hola')
// }


const SectionDesktop = () => {

    const dispatch = useDispatch();
    const { user } = useSelector(state => state.login);
    const { loginDialog } = useSelector(state => state.login);
    const { registerDialog } = useSelector(state => state.register);
    const registerError = useSelector(state => state.register.error);
    const userLog = useSelector(state => state.register.registerLoginData);


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


    //////////////////////////////////////////////////////////////////////
    // const [openLogin, setOpenLogin] = React.useState(false);

    const handleClickOpenLogin = () => {
        // setOpenLogin(true);
        dispatch(login_dialog_open_action())
    };

    const handleClickCloseLogin = () => {
        // setOpenLogin(false);
        dispatch(login_dialog_close_action())
    };
    //////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////
    // const [openRegister, setOpenRegister] = React.useState(false);

    // const handleClickOpenRegister = () => {
    //     setOpenRegister(true);
    // };

    const handleClickCloseRegister = () => {
        // setOpenRegister(false);
        dispatch(register_dialog_close_action())
    };
    //////////////////////////////////////////////////////////////////////

    const [checkLogin, setCheckLogin] = React.useState(true);
    const { ok } = useSelector(state => state.register);
    const { success, mensaje } = useSelector(state => state.login);
    const [registerToLogin, setRegisterToLogin] = React.useState(false)

    if (registerToLogin === true) {
        dispatch(LoginRegisteredAction(userLog));
        setRegisterToLogin(false);
    }

    if (checkLogin === true) {
        if (ok === false) {
            if (registerError === true) {
                Swal.fire({
                    icon: 'success',
                    title: `Usuario ya registrado`,
                    // text: 'Sesión Iniciada',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown',
                        icon: 'swal2-icon-show'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.close()
                    }
                })

                if (user.length !== 0) {
                    Swal.fire({
                        icon: 'success',
                        title: `Bienvenid@ ${user.data.user.nombres}`,
                        text: 'Sesión Iniciada',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            // setOpenLogin(false)
                            setCheckLogin(false);
                            dispatch(login_dialog_close_action())
                            Swal.close()
                        }
                    })
                }

                else if(ok === true) {
                    setRegisterToLogin(true);
                    setCheckLogin(false);
                    Swal.fire({
                        icon: 'success',
                        title: `Registro Exitoso`,
                        // text: 'Sesión Iniciada',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown',
                            icon: 'swal2-icon-show'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    }).then((result) => {
                        if (result.isConfirmed) {
                            // setOpenLogin(false)                    
                            dispatch(register_dialog_close_action())
                            // Swal.close()
                            Swal.fire({
                                icon: 'success',
                                title: `Sesión Iniciada`,
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    // setOpenLogin(false)
                                    setCheckLogin(false);
                                    dispatch(register_dialog_close_action())
                                    // Swal.close()
                                }
                            })
                        }
                    })
                }
            }
        }
    }











    // if (registerDialog === true) {
    //     setOpenLogin(false);
    //     setCheckLogin(false);
    // }        


    // if (checkRegister === true) {
    //     if (loginDialog === true) {
    //         setOpenRegister(false);
    //         setCheckRegister(false);
    //     }
    // }

    //////////////////////////////////////////////////////////////////////
    // const history = useHistory();

    // const [pushLogin, setPushLogin] = React.useState(null);

    // const handlePushLogin = () => {
    //     setPushLogin(history.push('/Login'));
    // };
    //////////////////////////////////////////////////////////////////////




    return (
        <>
            { user ?
                <>
                    <Grid container justify="center">
                        <Button
                            className={classes.accountCircle}
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={handleClick}
                            startIcon={<img src={petUser} alt="Login" style={{ width: '30px' }} />}
                        >
                            {`${user.data.user.nombres}`}
                        </Button>
                    </Grid>

                    <StyledMenu
                        id="customized-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <StyledMenuItem>
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary="Inicio" />
                        </StyledMenuItem>
                        <StyledMenuItem>
                            <ListItemIcon>
                                <Person />
                            </ListItemIcon>
                            <ListItemText primary="Cuenta" />
                        </StyledMenuItem>
                    </StyledMenu>
                </> :

                <>
                    <Button
                        color="secondary"
                        fullWidth
                        className={classes.loginButton}
                        onClick={handleClickOpenLogin}
                        startIcon={<img src={petUser} alt="Login" style={{ width: '30px' }} />}
                    >
                        Ingresar
                    </Button>
                </>

            }

            <Dialog
                open={loginDialog === true}
                onClose={handleClickCloseLogin}
                style={{ zIndex: 1 }}
            >
                {/* <AppBar>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClickClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar> */}
                <Login />

            </Dialog>

            <Dialog
                open={registerDialog === true}
                onClose={handleClickCloseRegister}
                style={{ zIndex: 1 }}
            >
                {/* <AppBar>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClickClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar> */}
                <Register />
            </Dialog>

        </>

    )
}

export default SectionDesktop


