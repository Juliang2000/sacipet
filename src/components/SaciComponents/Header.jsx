import React, { useState } from 'react';

import AdoptStepper from './AdoptForm/AdoptStepper';
import FindPetButton from './Adoption/FindPetButton';
import SectionDesktop from './SectionDesktop';

import { fade, makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  MenuItem,
  Menu,
  Hidden,
  Drawer,
  Box
} from '@material-ui/core';

import MoreIcon from '@material-ui/icons/MoreVert';
import servicesIcon from '../../assets/icons/drawer/services.svg'
import storeIcon from '../../assets/icons/drawer/store.svg'
import logoIcon from './../../assets/svg/logo-pinina.svg';
import menuIcon from '../../assets/icons/menu-final.svg'
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({

  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  search: {
    color: '#fff',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },

  searchIcon: {
    color: '#fff',
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },

  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },

  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },


  logoIcon: {
    width: '40px',
    // [theme.breakpoints.only('xs')]: {
    //   width: '30px',
    // }
  },

  title: {
    color: '#ffff',
    fontSize: '1.2rem',
    marginRight: '5px',
    [theme.breakpoints.up('xs')]: {
      display: 'block',
    },
  },

  title2: {
    color: '#000',
    fontSize: '1.2rem',
    [theme.breakpoints.up('xs')]: {
      display: 'block',
    },
  },

}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // const handleProfileMenuOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const [open, setOpen] = useState();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Hidden mdUp>
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >

        <div onClick={handleMenuClose}>
          <SectionDesktop />
        </div>
        <div onClick={handleMenuClose}>
          <AdoptStepper />
        </div>
        <div>
          <FindPetButton />
        </div>

        {/* </MenuItem> */}
        {/* <MenuItem onClick={handleProfileMenuOpen} onClick={handleMenuClose}> */}
        {/* <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p> */}
        {/* </MenuItem> */}
      </Menu>
    </Hidden>
  );

  return (
    <div className={classes.grow} style={{ marginTop: 80 }}>
      <AppBar position="fixed" style={{ zIndex: 1 }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
          >
            <img src={menuIcon} alt="Menu" style={{ width: '25px' }} />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <img className={classes.logoIcon} src={logoIcon} alt="logo"></img>
          </IconButton>
          <Hidden only="xs">
            <Typography className={classes.title} variant="h5">PET</Typography>
            <Typography className={classes.title2} variant="h5">SACI</Typography>
          </Hidden>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Buscar…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <FindPetButton />
            <AdoptStepper />
            <SectionDesktop />
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}

      <Drawer
        docked={false}
        width={500}
        open={open}
        onClose={() => setOpen(false)}
      >
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerClose}
            >
              <img src={menuIcon} alt="Menu" style={{ width: '25px' }} />
            </IconButton>
            <IconButton
              className={classes.upper}
            >
              <img className={classes.logoIcon} src={logoIcon} alt="logo"></img>
            </IconButton>
            <Typography className={classes.title} variant="h5" noWrap>
              PET
          </Typography>
            <Typography className={classes.title2} variant="h5" noWrap>
              SACI
          </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.draweritem}>
          <Box m={2}>
            <MenuItem><img src={servicesIcon} style={{ width: '30px', marginRight: '15px' }} alt="servicios" /><h6>Servicios</h6></MenuItem>
            <MenuItem><img src={storeIcon} style={{ width: '30px', marginRight: '15px' }} alt="Tienda" /><h6>Tienda</h6></MenuItem>
          </Box>
        </div>
      </Drawer>
    </div>
  );
}
