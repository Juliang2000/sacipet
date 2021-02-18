import React from 'react'
import { IconButton, makeStyles, Dialog, Grid } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

//components
import FindPetButton from './Adoption/FindPetButton'
import AdoptStepper from './AdoptForm/AdoptStepper'

//icons
import MoreIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({

  dialog: {
    marginTop:'65px',
  },

    appBar: {
        position: 'relative',
      },
      title: {

      },
    closeButton: {
      alignItems: 'right',
    }

}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
  });

export default function SectionMobile() {

    
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

      const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    

    // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    return (
        <div>
        <IconButton
          aria-label="show more"
        //   aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleClickOpen}
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
        
        <Dialog fullScreen open={open} onClose={handleClose}  TransitionComponent={Transition} className={classes.dialog} style={{ zIndex: 2 }}>
          <Toolbar>
            <IconButton className={classes.closeButton} edge="end" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Grid container justifyContent="center">
            <Typography className={classes.title}>
              Hola Usuario
            </Typography>
            </Grid>
          </Toolbar>
          <Divider />
        <List>
        <ListItem>
            <Typography>
                Inicio
            </Typography>
          </ListItem>
        <ListItem>
            <Typography>
                Mi Cuenta
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
                Cerrar sesión
            </Typography>
          </ListItem>
          <Divider />
          <ListItem>
            <FindPetButton/>
          </ListItem>
          <Divider />
          <ListItem>
            <AdoptStepper />
          </ListItem>
        </List>
      </Dialog>
     
      </div>
    )
}

