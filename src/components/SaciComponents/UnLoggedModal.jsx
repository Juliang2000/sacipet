import { Button, Dialog, Grid, IconButton, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { unlogged_modal_action } from '../../redux/actions/saciPets';

//icons
import CloseIcon from '@material-ui/icons/Close';
import iconSend from '../../assets/icons/send.svg';
import adoptStepperStyles from '../../assets/css/js/adoptStepperStyles';
import { adoptstepper_dialog_close_action, login_dialog_open_action } from '../../redux/actions/loginAction';
import { register_dialog_open_action } from '../../redux/actions/registerAction';

function UnLoggedModal() {

    const { unloggedModal } = useSelector(state => state.saciPets);
    const dispatch = useDispatch();
    const classes = adoptStepperStyles();

    const handleClickCloseDialog = () => {
        dispatch(unlogged_modal_action(false))
    }

    const handleClickOpenLogin = () => {
        dispatch(unlogged_modal_action(false))
        dispatch(adoptstepper_dialog_close_action());
        dispatch(login_dialog_open_action());
    };

    const openRegister = () => {
        dispatch(unlogged_modal_action(false))
        dispatch(adoptstepper_dialog_close_action());
        dispatch(register_dialog_open_action());
    };

    return (
        <>
            <Dialog
                style={{ zIndex: 2 }}
                open={unloggedModal}
                onClose={handleClickCloseDialog}
            >
                <Grid container justify="flex-end">
                    <Toolbar>
                        <IconButton
                            edge="end"
                            color="primary"
                            aria-label="close"
                            onClick={handleClickCloseDialog}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </Grid>
                <div className={classes.rootDialogStart}>
                    <Grid container justify="center">
                        <Grid item className={classes.titleDialogStart}>
                            <Typography variant="h6">
                                ¡Hola! si ya tienes cuenta Inicia sesión o Regístrate
                  </Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                className={classes.buttonStart}
                                onClick={handleClickOpenLogin}
                                color="primary"
                                variant="contained"
                                size="large"
                                endIcon={
                                    <img
                                        src={iconSend}
                                        alt="LogIn"
                                        className={classes.icons2}
                                    />
                                }
                                fullWidth
                                type="submit"
                            >
                                Inicia Sesión
                  </Button>
                        </Grid>

                        <Grid item xs={12} /* spacing={3}  justifyContent="center" */>
                            <Button
                                variant="text"
                                size="small"
                                className={classes.buttonSecondary2}
                                onClick={openRegister}

                            >
                                ¿No tienes una cuenta? Regístrate
                  </Button>
                        </Grid>
                    </Grid>
                </div>
            </Dialog>
        </>
    )
}

export default UnLoggedModal
