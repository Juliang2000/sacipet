import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { IconButton, makeStyles, withStyles, Typography, Button, Grid } from '@material-ui/core'
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
import loginIcon from '../../assets/icons/drawer/login.svg';
import petUser from '../../assets/icons/drawer/petUser.svg';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import petIcon from '../../assets/icons/drawer/pet.svg'
//Redux
import { useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({

    accountCircle: {
        color: '#fff',
        textTransform: 'none',
        fontSize: '15px',
    },
    loginButton: {
        color: '#fff',
        textTransform: 'none',
        fontSize: '15px',
    },
    accountIcon: {
        width: '40px',
    }
}));


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


    const { user } = useSelector(state => state.login);


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

    //push to login if user is not logged
    const history = useHistory();
    const [pushLogin, setPushLogin] = React.useState(null);

    const handlePushLogin = () => {
        setPushLogin(history.push('/Login'));
    };



    return (
        <>
            { user ?
                ////Logged
                <>
                    <Grid container justify="center">
                        <Button
                            className={classes.accountCircle}
                            edge="end"
                            aria-label="account of current user"
                            // aria-controls={menuId}
                            aria-haspopup="true"
                            color="inherit"
                            onClick={handleClick}
                            startIcon={<img src={petUser} alt="Login" style={{ width: '30px' }} />}
                        >
                            {`${user.nombres}`}


                        </Button>
                    </Grid>

                    <StyledMenu
                        id="customized-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <StyledMenuItem>
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary="Inicio" />
                        </StyledMenuItem>
                        <StyledMenuItem>
                            <ListItemIcon>
                                <Person />
                            </ListItemIcon>
                            <ListItemText primary="Cuenta" />
                        </StyledMenuItem>
                    </StyledMenu>
                </> :
                ////Not Logged
                <>
                    {/* <Grid container justify="center"> */}
                        <Button
                        color="secondary"
                        fullWidth
                            // variant="contained"
                            className={classes.loginButton}
                            onClick={handlePushLogin}
                            startIcon={<img src={petUser} alt="Login" style={{ width: '30px' }} />}
                        >Ingresar
                        </Button>
                    {/* </Grid> */}
                </>
            }

        </>

    )
}

//             <Typography>{`${user}`}</Typography>
//             <IconButton
//                 edge="end"
//                 aria-label="account of current user"
//                 // aria-controls={menuId}
//                 aria-haspopup="true"
//                 color="inherit"
//                 onClick={handleClick}
//             >
//                 <AccountCircle className={classes.accountCircle} />


//             </IconButton>

//             <StyledMenu
//                 id="customized-menu"
//                 anchorEl={anchorEl}
//                 keepMounted
//                 open={Boolean(anchorEl)}
//                 onClose={handleClose}
//             >
//                 <StyledMenuItem>
//                     <ListItemIcon>
//                         <Home />
//                     </ListItemIcon>
//                     <ListItemText primary="Inicio" />
//                 </StyledMenuItem>
//                 <StyledMenuItem>
//                     <ListItemIcon>
//                         <Person />
//                     </ListItemIcon>
//                     <ListItemText primary="Ingresar" />
//                 </StyledMenuItem>
//             </StyledMenu>
//         }
//         </>
//     )
// }

