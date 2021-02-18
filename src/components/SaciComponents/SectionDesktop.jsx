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
import { useSelector } from 'react-redux';

import { Dialog, /* AppBar, Toolbar, IconButton */ } from '@material-ui/core';

import Login from '../../pages/Login'
import Register from '../../pages/Register'


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


    const { user } = useSelector(state => state.login);


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
    const [openLogin, setOpenLogin] = React.useState(false);

    const handleClickOpenLogin = () => {
        setOpenLogin(true);
    };

    const handleClickCloseLogin = () => {
        setOpenLogin(false);
    };
    //////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////
    const [openRegister, setOpenRegister] = React.useState(false);

    const handleClickOpenRegister = () => {
        setOpenRegister(true);
    };

    const handleClickCloseRegister = () => {
        setOpenRegister(false);
    };
    //////////////////////////////////////////////////////////////////////


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
                            {`${user.nombres}`}
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
                open={openLogin}
                onClose={handleClickCloseLogin}
                // style={{ zIndex: 2 }}
            >
                {/* <AppBar>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClickClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar> */}
                <Login/>

            </Dialog>

            <Dialog
                open={openRegister}
                onClose={handleClickCloseRegister}
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


