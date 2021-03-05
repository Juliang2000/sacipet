import React, { useEffect } from 'react';

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
import { LoginRegisteredAction, login_dialog_close_action, login_dialog_open_action, adopt_dialog_close_action, adoptstepper_dialog_open_action } from '../../redux/actions/loginAction';
import { register_dialog_close_action } from '../../redux/actions/registerAction';


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

export default function SectionDesktop() {

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));

    const dispatch = useDispatch();

    const { user } = useSelector(state => state.login);
    const { registerData } = useSelector(state => state.register);

    const { loginDialog } = useSelector(state => state.login);
    const { registerDialog } = useSelector(state => state.register);

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
        if (user.length !== 0) {
            Swal.fire({
                icon: 'success',
                title: `Bienvenid@ ${user.nombres}`,
                text: 'Sesión Iniciada',
                confirmButtonColor: '#63C132',
            }).then((result) => {
                dispatch(login_dialog_close_action());
                dispatch(register_dialog_close_action());
                dispatch(adoptstepper_dialog_open_action());
                if (result.isConfirmed) {
                    Swal.close()
                }
            })
        }
    }, [dispatch, user])

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

    return (
        <>
            { user ?
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
                            {`${user.nombres}`}
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
                            {`${user.nombres}`}
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
                        <StyledMenuItem>
                            <ListItemIcon>
                                <Person />
                            </ListItemIcon>
                            <ListItemText primary="Ver Tu Perfil" />
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
                            {/* <Hidden mdDown> */}
                            Ingresar
                        {/* </Hidden> */}
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
