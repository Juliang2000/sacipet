import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Drawer from '@material-ui/core/Drawer';
import { Hidden, Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box'



//components
import AdoptStepper from './AdoptForm/AdoptStepper';
import FindPetButton from './Adoption/FindPetButton';
import SectionDesktop from './SectionDesktop';
import SectionMobile from './SectionMobile';




//icons
// import logo from './../../assets/svg/Pininawhite.png'
import logo from './../../assets/svg/logo-pinina.svg';
import servicesIcon from '../../assets/icons/drawer/services.svg'
import storeIcon from '../../assets/icons/drawer/store.svg'

import iconMenu from '../../assets/icons/menu-final.svg'




const useStyles = makeStyles((theme) => ({

  mailicon: {
    color: '#ffff',
  },

  grow: {
    // flexGrow: 1,
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
    // width: '100%',
    [theme.breakpoints.up('sm')]: {
      // width: 'auto',
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
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('md')]: {
      // width: '5rem',
    },
    [theme.breakpoints.up('sm')]: {
      width: '5rem',
      // alignItems: 'left'
    },
    [theme.breakpoints.up('lg')]: {
      // width: '35rem',
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
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },

    upperdrawer: {
      marginRight: '100px',
    },

    draweritem: {
      alignItems: 'center',
      display: 'flex',
      margin: '50%',
    },
    modal: {
      position: 'absolute',
      width: 400,
      backgroundColor: 'white',
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      //padding: theme.spacing(2,4,3),
      padding: "16px 32px 24px",
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },


  }
}));



export default function PrimarySearchAppBar() {

  const classes = useStyles();
  // const match = useMediaQuery('(min-width:768px)');
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
              <Grid container xs={11} sm={11} md={3} lg={3} xl={2} alignItems="center">
                {/* <Grid item xs={1}> */}
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                >

                  <img src={iconMenu} alt="Menu" style={{ width: '25px' }} />

                </IconButton>

                {/* </Grid> */}



                <IconButton><img width={40} src={logo} alt="logo"></img></IconButton>

                <Hidden only={'xs'}>

                  <Typography className={classes.title} variant="h5">PET</Typography>

                  <Typography className={classes.title2} variant="h5">SACI</Typography>

                </Hidden>
              </Grid>
              <Hidden smDown>
                <Grid item xs={1} sm={2} md={4} lg={3} xl={4} >

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
                  {/* </Grid> */}
                </Grid>
              </Hidden>
              <Grid container justify="flex-end" alignItems="center" xs={1} sm={1} md={5} lg={6} xl={6}>
                <Hidden smDown>

                  <Grid item sm={2} md={3} lg={2} xl={2}>
                    <FindPetButton />
                  </Grid>
                  <Grid item sm={2} md={3} lg={2} xl={2}>
                    <AdoptStepper />
                  </Grid>
                  <Grid item sm={4} md={3} lg={2} xl={2}>
                    <SectionDesktop />
                  </Grid>

                </Hidden>

                <Hidden mdUp>
                  {/* <Grid container justify="flex-end"> */}
                  <SectionMobile />
                  {/* </Grid> */}
                </Hidden>
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
              <img src={iconMenu} alt="Menu" style={{ width: '25px' }}/>
            </IconButton>
            <IconButton className={classes.upper}><img width={40} src={logo} alt="logo"></img></IconButton>
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

