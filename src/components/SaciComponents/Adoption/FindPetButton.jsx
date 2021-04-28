import React, { useState } from 'react';
import { Button, makeStyles, withStyles, Hidden } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

//icons
import iconFind from '../../../assets/icons/drawer/iconFind-final.svg';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

//redux
import { useDispatch, useSelector } from 'react-redux';

import {
  // login_dialog_open_action,
  adoptstepper_dialog_open_action,
  // adoptstepper_dialog_close_action,
  adopt_dialog_open_action,
} from '../../../redux/actions/loginAction';
import { no_user_pets_action } from '../../../redux/actions/saciPets';

const useStyles = makeStyles((theme) => ({
  adoptionButton: {
    color: '#fff',
    textTransform: 'none',
    fontSize: '15px',
  },

  findPetButton: {
    textTransform: 'none',
    fontSize: '15px',
  },

  findPetButtonDesktop: {
    color: '#fff',
    textTransform: 'none',
    fontSize: '15px',
    [theme.breakpoints.between('xs', 'sm')]: {
      color: '#000',
    },
  },
  mobile: {
    width: '25rem',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  menuIcons: {
    width: '40px',
    [theme.breakpoints.only('xs')]: {
      width: '35px',
    },
  },
}));

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    marginTop: '7px',
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

export default function FindPetButton() {
  ///////////////Constantes Botón Encuentra tu mascota////////////////
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { showUserPets } = useSelector(state => state.saciPets)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  ////////////////////////////////////////////////////////////////////
  const dispatch = useDispatch();


  const [tramite2] = useState({
    tipo_tramite: 2
  })

  const handleClickOpenModalRecover = () => {
    setAnchorEl(null);
    dispatch(no_user_pets_action());
    dispatch(adopt_dialog_open_action(tramite2));
    dispatch(adoptstepper_dialog_open_action());
  };

  const [tramite3] = useState({
    tipo_tramite: 3
  })

  const handleClickOpenModalLost = () => {
    setAnchorEl(null);
    dispatch(no_user_pets_action());
    dispatch(adopt_dialog_open_action(tramite3));
    dispatch(adoptstepper_dialog_open_action());
  };

  const classes = useStyles();
  return (
    <>
      <Hidden smDown>
        {showUserPets ?
          null
          :
          <Button
            color="secondary"
            className={classes.findPetButtonDesktop}
            onClick={handleClick}
            startIcon={
              <img src={iconFind} alt="LogIn" className={classes.menuIcons} />
            }
          >
            <ArrowDropDownIcon />
            <Hidden only="md">Encontrar</Hidden>
          </Button>
        }
      </Hidden>

      <Hidden mdUp>
        <MenuItem
          color="secondary"
          className={classes.findPetButtonDesktop}
          onClick={handleClick}
        >
          <img src={iconFind} alt="LogIn" className={classes.menuIcons} />
          <ArrowDropDownIcon />
          Encontrar
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
        <StyledMenuItem onClick={handleClickOpenModalRecover}>
          <ListItemIcon>
            <img src={iconFind} alt="Lost Pets" className={classes.menuIcons} />
          </ListItemIcon>
          <ListItemText primary="Mascotas Recuperadas" />
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClickOpenModalLost}>
          <ListItemIcon>
            <img src={iconFind} alt="Lost Pets" className={classes.menuIcons} />
          </ListItemIcon>
          <ListItemText primary="Mascotas Perdidas" />
        </StyledMenuItem>
      </StyledMenu>
    </>
  );
}
