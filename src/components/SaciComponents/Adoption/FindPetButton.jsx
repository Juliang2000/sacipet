import React from 'react'
import { Button, makeStyles, withStyles, Hidden, Typography, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import PetsIcon from '@material-ui/icons/Pets';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SvgIcon from '@material-ui/core/SvgIcon';


//icons
import petIcon from '../../../assets/icons/drawer/pet.svg'
import findPetIcon from '../../../assets/icons/drawer/findPet.svg'
import findPetIconWhite from '../../../assets/icons/drawer/findPetWhite.svg'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


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
  },
  mobile: {
    width: '25rem',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    marginTop: '5px',
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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  ////////////////////////////////////////////////////////////////////

  const classes = useStyles();
  return (
    <div>
      <Hidden xsDown>
        <Button
          className={classes.findPetButtonDesktop}
          onClick={handleClick}
          startIcon={<img src={findPetIconWhite} alt="LogIn" style={{ width: '40px' }} />}

        >

          Encuentra tu mascota
                </Button>
        <StyledMenu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <StyledMenuItem>
            <ListItemIcon>
              <img src={findPetIconWhite} alt="Lost Pets" style={{ width: '40px' }} />
            </ListItemIcon>
            <ListItemText primary="Mascotas recuperadas" />
          </StyledMenuItem>
          <StyledMenuItem>
            <ListItemIcon>
              <img src={findPetIconWhite} alt="Lost Pets" style={{ width: '40px' }} />
            </ListItemIcon>
            <ListItemText primary="Publica tu mascota como perdida" />
          </StyledMenuItem>
        </StyledMenu>
      </Hidden>
      <Hidden mdUp>
        <div className={classes.mobile}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >

              <img src={findPetIcon} alt="Lost Pets" style={{ width: '30px' }} />


              <Typography
                className={classes.heading}
              // className={classes.findPetButton}
              // onClick={handleClick2}

              >

                Encuentra tu mascota
                </Typography>


            </AccordionSummary>
            <AccordionDetails>

              <Typography
                className={classes.heading}
              >
                <img src={findPetIcon} alt="Lost Pets" style={{ width: '40px' }} />
                Mascotas recuperadas
                </Typography>

            </AccordionDetails>
            <AccordionDetails>
              <Typography
                className={classes.heading}
              >
                <img src={findPetIcon} alt="Lost Pets" style={{ width: '40px' }} />
                Publica tu mascota perdida
                </Typography>
            </AccordionDetails>


          </Accordion>
        </div>
      </Hidden>


    </div>
  )
}

