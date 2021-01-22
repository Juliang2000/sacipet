import React, { useState } from 'react';
import { fade, makeStyles, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
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
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Drawer from '@material-ui/core/Drawer';
import { useMediaQuery, Dialog, Hidden, Button, Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box'



import PetsIcon from '@material-ui/icons/Pets';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';


//components
import Stepper from '../SaciComponents/AdoptForm/Stepper'




//icons
import logo from './../../assets/svg/Pininawhite.png'
import servicesIcon from '../../assets/icons/drawer/services.svg'
import storeIcon from '../../assets/icons/drawer/store.svg'
import petIcon from '../../assets/icons/drawer/pet.svg'
import loginIcon from '../../assets/icons/drawer/login.svg'
import registerIcon from '../../assets/icons/drawer/register.svg'

const useStyles = makeStyles((theme) => ({

  mailicon: {
    color: '#ffff',
  },

  grow: {
    // flexGrow: 1,
    color: '#fff',

  },
  menuButton: {
    // marginRight: theme.spacing(4),
    color: '#ffff',
  },
  upper: {
    // marginLeft: '2%',

  },
  title: {
    // color: '#ffff',
    fontSize: '1.2rem',
    [theme.breakpoints.up('xs')]: {
      display: 'block',
    },
  },
  search: {
    // alignItems: 'flex-end',
    // justifyContent: 'right',
    // display: 'flex',
    // alignItems: 'flex-end',
    position: 'relative',
    color: '#ffff',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    // marginRight: theme.spacing(2),
    // marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      // marginLeft: theme.spacing(2),
      width: 'auto',
    },
    "& .MuiInputBase-input": {
      // width: "500px"
    }
  },

  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'center',
    color: '#ffff',
  },
  inputRoot: {
    // color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    // transition: theme.transitions.create('width'),
    [theme.breakpoints.up('md')]: {
      width: '20rem',
    },
      [theme.breakpoints.up('sm')]: {
        width: '15rem',
    },
    [theme.breakpoints.up('lg')]: {
      width: '30rem',
  },
    // [theme.breakpoints.up('lg')]: {
    //   width: '5rem',
    // },
    // [theme.breakpoints.up('sm')]: {
    //   width: '12ch',
    //   '&:focus': {
    //     width: '20ch',
    // },
    // },
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

/////////////////////////Botón Encuentra tu mascota//////////////////////////
const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5"
  }
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);
///////////////////////////////////////////////////////////////////////////

// const adoptIcons = createMuiTheme({
//   palette: {
//     primary: {
//       main: "#ffff",
//       dark: "#34b233",
//       contrastText: "white"
//     }
//   }
// });

export default function PrimarySearchAppBar() {

  const classes = useStyles();

  const [modal, setModal] = useState(false);

  const openCloseModal = () => {
    setModal(!modal);
  }

  const [openModal, setOpenModal] = React.useState(false);

  const handleClickOpenModal = () => {
   
    setOpenModal(true);
  };

  const handleClickCloseModal = () => {
    
    setOpenModal(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const [anchorElement, setAnchorElement] = React.useState(null);

  const handleClick = (event) => {
    setAnchorElement(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };


  ///////////////Constantes Botón Encuentra tu mascota////////////////
  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  ////////////////////////////////////////////////////////////////////


  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

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

  const match = useMediaQuery('(min-width:768px)');
  const [open, setOpen] = useState(match);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton className={classes.mailicon} aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="primary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div>
      <React.Fragment className={classes.grow}>
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
              <Grid container xs={1}>
                <Hidden only={'xs'}>
                  <Box mr={5}><Typography className={classes.title} variant="h5" noWrap>
                    SACI Pet
            </Typography></Box>
                </Hidden>
              </Grid>


             
                <Grid container justify="flex-center">
                  <div className={classes.grow} >
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
                    </div>
                    </Grid>
                    
            
           
                
                <Hidden smDown>
                  <Grid container justify="flex-end" spacing={0}>
                    <Grid item>
                    {/* <MuiThemeProvider theme={adoptIcons}> */}
                      <Button
                      className={classes.adoptionButton}
                        // aria-controls="customized-menu"
                        // aria-haspopup="true"
                        // variant="text"
                        // color="primary"
                        onClick={handleClick2}
                        startIcon={<img src={petIcon} alt="LogIn" style={{ width: '30px' }} />}
                      >
                        Encuentra tu mascota
              </Button>
              {/* </MuiThemeProvider> */}
                      <StyledMenu
                        id="customized-menu"
                        anchorEl={anchorEl2}
                        keepMounted
                        open={Boolean(anchorEl2)}
                        onClose={handleClose2}
                      >
                        <StyledMenuItem>
                          <ListItemIcon>
                            <PetsIcon fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary="Recuperados" />
                        </StyledMenuItem>
                        <StyledMenuItem>
                          <ListItemIcon>
                            <PetsIcon fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary="Perdidos" />
                        </StyledMenuItem>
                      </StyledMenu>
                    </Grid>
                    <Grid item>
                    {/* <MuiThemeProvider theme={adoptIcons}>
                      <Button
                        onClick={handleClickOpenModal}
                        className={classes.adoptionButton}                     
                        variant="text"
                        // color="primary"
                        startIcon={<img src={petIcon} alt="LogIn" style={{ width: '30px' }} />}
                      >
                        Adopciones
                </Button> */}
                {/* </MuiThemeProvider> */}
                <Stepper />
                    </Grid>
                    
                    {/* <Grid item>
                <Button
                  variant="contained"
                  color="default"
                  startIcon={<img src={petIcon} alt="LogIn"
                    style={{ width: '30px' }} />}>
                  Recuperados
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="default"
                  startIcon={<img src={petIcon} alt="LogIn"
                    style={{ width: '30px' }} />}>
                  Perdidos
                </Button>
              </Grid> */}
                  </Grid>
                </Hidden>




                <div className={classes.sectionDesktop}>
                  {/* <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="#ffff">
                  <MailIcon />
                </Badge>
              </IconButton> */}
                  <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    color="inherit"
                    onClick={handleClick}
                  >
                    <Badge badgeContent={4} color="#ffff">
                      <AccountCircle />
                    </Badge>

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
        </Box>
      </React.Fragment>

        <Drawer
          docked={false}
          width={500}
          // variant="temporary"
          // classes={{ paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose) }}
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
              {/* <MenuItem onClick={handleClickOpenModal}><img src={petIcon} style={{ width: '30px', marginRight: '15px' }} alt="Adopción" /><h6>Adopción mascota</h6></MenuItem>
            <MenuItem><img src={loginIcon} style={{ width: '30px', marginRight: '15px' }} alt="Ingresa" /><h6>Ingresa</h6></MenuItem>
            <MenuItem><img src={registerIcon} style={{ width: '30px', marginRight: '15px' }} alt="Regístrate" /><h6>Regístrate</h6></MenuItem> */}
            </Box>
          </div>

        </Drawer>

        {renderMobileMenu}
        {renderMenu}

        {/* <Dialog

          open={openModal}
          onclose={handleClickCloseModal}
        >
          <Stepper />
        </Dialog> */}


      </div>





  );
}


