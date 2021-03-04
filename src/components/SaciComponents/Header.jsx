import React, { useState } from 'react';

import { fade, makeStyles } from '@material-ui/core/styles';

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  MenuItem,
  Drawer,
  Hidden,
  Grid,
  Box
} from '@material-ui/core';

import AdoptStepper from './AdoptForm/AdoptStepper';
import FindPetButton from './Adoption/FindPetButton';
import SectionDesktop from './SectionDesktop';

import servicesIcon from '../../assets/icons/drawer/services.svg'
import storeIcon from '../../assets/icons/drawer/store.svg'
import logoIcon from './../../assets/svg/logo-pinina.svg';
import menuIcon from '../../assets/icons/menu-final.svg'
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({

  mailicon: {
    color: '#ffff',
  },

  grow: {
    color: '#fff',
  },

  menuButton: {
    color: '#ffff',
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
    color: '#black',
    fontSize: '1.2rem',
    [theme.breakpoints.up('xs')]: {
      display: 'block',
    },
  },

  search: {
    alignItems: 'left',
    position: 'relative',
    color: '#ffff',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    "& .MuiInputBase-input": {
    }
  },

  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffff',
  },

  inputRoot: {
    color: 'inherit',
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('md')]: {
      width: '15rem auto',
    },
    [theme.breakpoints.up('lg')]: {
      width: '25rem auto',
    },
    [theme.breakpoints.up('xl')]: {
      width: '35rem auto',
    },
  },

  adoptionButton: {
    color: '#fff',
    textTransform: 'none',
    fontSize: '15px',
  },

  sectionDesktop: {
    color: '#ffff',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },

  logoIcon: {
    width: '40px',
    [theme.breakpoints.only('xs')]: {
      width: '30px',
    }
  },

}));

export default function PrimarySearchAppBar() {

  const classes = useStyles();

  const [open, setOpen] = useState();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  }

  return (
    <div className={classes.grow}>
      <Box mb={10}>
        <AppBar position="fixed" style={{ zIndex: 1 }}>
          <Toolbar>
            <Grid container alignItems="center" xs={12}>
              <Grid container xs={4} sm={5} md={3} lg={3} xl={3} alignItems="center">
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                >
                  <img src={menuIcon} alt="Menu" style={{ width: '25px' }} />
                </IconButton>
                <IconButton>
                  <img className={classes.logoIcon} src={logoIcon} alt="logo"></img>
                </IconButton>
                <Hidden only="xs">
                  <Typography className={classes.title} variant="h5">PET</Typography>
                  <Typography className={classes.title2} variant="h5">SACI</Typography>
                </Hidden>
              </Grid>
              <Hidden smDown>
                <Grid item sm={2} md={2} lg={3} xl={3} >
                  <div className={classes.search} >
                    <div className={classes.searchIcon} >
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
                </Grid>
              </Hidden>
              <Grid container justify="flex-end" alignItems="center" xs={8} sm={7} md={7} lg={6} xl={6}>
                <Grid item xs={4} sm={3} md={4} lg={4} xl={3}>
                  <FindPetButton />
                </Grid>
                <Grid item xs={4} sm={3} md={4} lg={4} xl={3}>
                  <AdoptStepper />
                </Grid>
                <Grid item xs={4} sm={3} md={4} lg={4} xl={3}>
                  <SectionDesktop />
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
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
