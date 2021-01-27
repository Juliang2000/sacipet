import React, { useState } from 'react';
import { IconButton, makeStyles, withStyles } from '@material-ui/core'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
//icons
import AccountCircle from '@material-ui/icons/AccountCircle';
import findPetIconWhite from '../../assets/icons/drawer/findPetWhite.svg'
import Home from '@material-ui/icons/Home';
import Person from '@material-ui/icons/Person';
import PersonAdd from '@material-ui/icons/PersonAdd';


const useStyles = makeStyles((theme) => ({

    accountCircle: {
        color: '#fff'
    }
}))


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

    ///////////////Constantes Botón Encuentra tu mascota////////////////
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    ////////////////////////////////////////////////////////////////////

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const classes = useStyles();

    // const isMenuOpen = Boolean(anchorEl);
    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const [anchorElement, setAnchorElement] = React.useState(null);

    // const handleClick = (event) => {
    //     setAnchorElement(event.currentTarget);
    // };

    // const handleClose = () => {
    //     setAnchorElement(null);
    // };

    return (
        <div>
            <IconButton
                edge="end"
                aria-label="account of current user"
                // aria-controls={menuId}
                aria-haspopup="true"
                color="inherit"
                onClick={handleClick}
            >
                <AccountCircle className={classes.accountCircle} />


            </IconButton>

            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem>
                    <ListItemIcon>
                        <Home/>
                    </ListItemIcon>
                    <ListItemText primary="Inicio" />
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemIcon>
                        <Person/>
                    </ListItemIcon>
                    <ListItemText primary="Ingresar" />
                </StyledMenuItem>
            </StyledMenu>

            {/* <Menu
                anchorEl={anchorElement}
                keepMounted
                open={Boolean(anchorElement)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Perfil</MenuItem>
                <MenuItem onClick={handleClose}>Mi cuenta</MenuItem>
                <MenuItem onClick={handleClose}>Cerrar sesión</MenuItem>
            </Menu> */}

        </div>
    )
}

