import React, { useState } from 'react';
import { IconButton, makeStyles } from  '@material-ui/core'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
//icons
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
    
    accountCircle: {
        color: '#fff'
    }
}))

export default function SectionDesktop() {

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const classes = useStyles();

    // const isMenuOpen = Boolean(anchorEl);
    const [anchorEl, setAnchorEl] = React.useState(null);
    // const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  
    const [anchorElement, setAnchorElement] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorElement(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorElement(null);
    };
  
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
            <Menu
                anchorEl={anchorElement}
                keepMounted
                open={Boolean(anchorElement)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Perfil</MenuItem>
                <MenuItem onClick={handleClose}>Mi cuenta</MenuItem>
                <MenuItem onClick={handleClose}>Cerrar sesión</MenuItem>
            </Menu>

        </div>
    )
}

