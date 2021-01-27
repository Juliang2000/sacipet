import React, { useState } from 'react';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Drawer from '@material-ui/core/Drawer';
import { useMediaQuery, Hidden, Button, Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box'


//components
import AdoptStepper from './AdoptForm/AdoptStepper';
import FindPetButton from './Adoption/FindPetButton';
import SectionDesktop from './SectionDesktop';
import SectionMobile from './SectionMobile';




//icons
import logo from './../../assets/svg/Pininawhite.png'
import servicesIcon from '../../assets/icons/drawer/services.svg'
import storeIcon from '../../assets/icons/drawer/store.svg'




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
  upper: {

  },
  title: {
    color: '#ffff',
    fontSize: '1.2rem',
    [theme.breakpoints.up('xs')]: {
      display: 'block',
    },
  },
  search: {
    alignItems:'left',
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
    // alignItems: 'center',
    // justifyContent: 'center',
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
      width: '5rem',
    },
    [theme.breakpoints.up('sm')]: {
      width: '5rem',
      // alignItems: 'left'
    },
    [theme.breakpoints.up('lg')]: {
      width: '15rem',
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
  const match = useMediaQuery('(min-width:768px)');
  const [open, setOpen] = useState(match);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  }
    return (
      <div className={classes.grow}>
        <Box mb={10}>
          <AppBar position="fixed">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
              >
                <MenuIcon
                  onClick={handleDrawerClose} />
              </IconButton>
              <IconButton className={classes.upper}><img width={40} src={logo} alt="logo"></img></IconButton>
              <Grid container>
                <Hidden only={'xs'}>
                  <Box><Typography className={classes.title} variant="h5" noWrap>
                    SACI Pet
            </Typography></Box>
                </Hidden>
              </Grid>
              
              <Hidden smDown>
              <Grid container justify='flex-start' spacing={0}>      
              <Grid item>          
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
              </Grid>
              </Hidden>

              <Hidden smDown>
                <Grid container justify="flex-end" spacing={0}>
                  <Grid item>
                    <FindPetButton />
                  </Grid>
                  <Grid item>
                    <AdoptStepper />
                  </Grid>
                  <Grid item>
                    <SectionDesktop />
                  </Grid>
                </Grid>
              </Hidden>

              <Hidden mdUp>
                <SectionMobile />
              </Hidden>
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
                <MenuIcon />
              </IconButton>
              <IconButton className={classes.upper}><img width={40} src={logo} alt="logo"></img></IconButton>
              <Typography className={classes.title} variant="h5" noWrap>
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
