import { withStyles, Switch, FormGroup, Box, Button, Dialog, FormControlLabel, Grid, Hidden, IconButton, Step, StepLabel, Stepper, TextField, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adopt_me_dialog_action } from '../../../redux/actions/saciPets';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

//styles
import adoptMeFormStyles from '../../../assets/css/js/adoptMeFormStyles';
//icons
import CloseIcon from '@material-ui/icons/Close';
import useStyles from '../../../assets/css/js/styles';

// const ColorlibConnector = withStyles({
//     alternativeLabel: {
//         top: 22,
//     },
//     active: {
//         '& $line': {
//             backgroundImage:
//                 'linear-gradient( 20deg,rgb(99, 193, 50) 100%,rgb(99, 193, 50) 50%,rgb(197, 232, 183) 100%)',
//         },
//     },
//     completed: {
//         '& $line': {
//             backgroundImage:
//                 'linear-gradient( 20deg,rgb(99, 193, 50) 100%,rgb(99, 193, 50) 50%,rgb(197, 232, 183) 100%)',
//         },
//     },
//     line: {
//         height: 3,
//         border: 0,
//         backgroundColor: '#eaeaf0',
//         borderRadius: 1,
//     },
// })(StepConnector);

const IOSSwitch = withStyles((theme) => ({
    root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: theme.spacing(1),
    },
    switchBase: {
        padding: 1,
        '&$checked': {
            transform: 'translateX(16px)',
            color: theme.palette.common.white,
            '& + $track': {
                backgroundColor: '#63c132',
                opacity: 1,
                border: 'none',
            },
        },
        '&$focusVisible $thumb': {
            color: '#63c132',
            border: '6px solid #fff',
        },
    },
    thumb: {
        width: 24,
        height: 24,
    },
    track: {
        borderRadius: 26 / 2,
        border: `1px solid ${theme.palette.grey[400]}`,
        backgroundColor: theme.palette.grey[50],
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
}))(({ classes, ...props }) => {
    return (
        <Switch
            focusVisibleClassName={classes.focusVisible}
            disableRipple
            classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked,
            }}
            {...props}
        />
    );
});

function CustomizedSwitch() {
    const classes = useStyles();
    const [state, setState] = useState({
        checkedB: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <FormGroup>

            <FormControlLabel
                // styles={{ width: '20px' }}
                control={<IOSSwitch checked={state.checkedB} onChange={handleChange} name="checkedB" />}
                label="Si"
            />
        </FormGroup>
    );
}

export function getSteps() {
    return ['Tus Datos Personales', 'Preguntas de interés', 'Preguntas Familiares', 'Sobre la Adopción', 'Registra tu Solicitud'];
}

export function getStepContent(step) {


    const classes = adoptMeFormStyles();

    switch (step) {
        case 0:
            return (
                <>
                    <Grid style={{ margin: '2%', marginLeft: '10%', marginRight: '10%' }}>
                        <Grid container justify='center'>
                            <Typography variant="h5">
                                Tus datos Personales (Campos requeridos)
                            </Typography>
                        </Grid>
                        <Grid container spacing={1} style={{ marginTop: '2%' }}>
                            <Grid item xl={6} lg={6}>
                                <TextField
                                    label="Nombres y Apellidos"
                                    type="text"
                                    name="nombre_adoptante"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xl={6} lg={6}>
                                <TextField
                                    label="Dirección"
                                    type="text"
                                    name="direccion_adoptante"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xl={3} lg={3}>
                                <TextField
                                    label="Ciudad o Municipio"
                                    type="text"
                                    name="id_codigo"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xl={3} lg={3}>
                                <TextField
                                    label="Localidad"
                                    type="text"
                                    name="localidad"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xl={3} lg={3}>
                                <TextField
                                    label="Teléfono"
                                    type="text"
                                    name="telefono"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xl={3} lg={3}>
                                <TextField
                                    label="E-mail"
                                    type="text"
                                    name="email"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xl={6} lg={6}>
                                <TextField
                                    label="Ocupación"
                                    type="text"
                                    name="ocupacion"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xl={6} lg={6}>
                                <TextField
                                    label="Estado Civil"
                                    type="text"
                                    name="estado_civil"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </>
            )
        case 1:
            return (
                <>
                    <Grid style={{ margin: '2%', marginLeft: '10%', marginRight: '10%' }}>
                        <Grid container justify='center'>
                            <Typography variant="h5">
                                Preguntas de interés
                            </Typography>
                        </Grid>
                        <Grid container spacing={1} style={{ marginTop: '2%' }}>
                            <Grid item xl={12} lg={12}>
                                <TextField
                                    label="¿Por qué deseas adoptar a una mascota?"
                                    type="text"
                                    name="pregunta_mascota_1"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xl={12} lg={12}>
                                <TextField
                                    label="¿Actualmente tienes más animales? ¿Cuáles?"
                                    type="text"
                                    name="pregunta_mascota_2"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xl={12} lg={12}>
                                <TextField
                                    label="¿Anteriormente has tenido mascotas?"
                                    type="text"
                                    name="pregunta_mascota_3"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                        {/* pregunta 4 */}
                        <Grid style={{ marginTop: '2%' }} container justify="center" alignItems="center">
                            <Grid item xl={6} lg={6}>
                                <Typography>
                                    ¿Estarías de acuerdo con realizar visitas para ver las condiciones de la mascota?
                                </Typography>
                            </Grid>
                            <Grid item xl={3} lg={3}>
                                <CustomizedSwitch />
                            </Grid>
                        </Grid>
                    </Grid>

                </>
            )
        case 2:
            return (
                <>
                    <Grid style={{ margin: '2%', marginLeft: '10%', marginRight: '10%' }}>
                        <Grid container justify='center'>
                            <Typography variant="h5">
                                Tu círculo Familiar
                            </Typography>
                        </Grid>
                        <Grid container spacing={1} style={{ marginTop: '2%' }}>
                            <Grid item xl={12} lg={12}>
                                <TextField
                                    label="¿Cuántas Personas viven en su casa?"
                                    type="text"
                                    name="pregunta_familia_1"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xl={12} lg={12}>
                                <TextField
                                    label="¿Están todos de acuerdo en adoptar? en el caso de que no, indica la razón"
                                    type="text"
                                    name="pregunta_familia_2"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xl={12} lg={12}>
                                <TextField
                                    label="¿Alguien que viva con usted es alérgico a los animales?"
                                    type="text"
                                    name="pregunta_familia_3"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xl={12} lg={12}>
                                <TextField
                                    label="¿En caso de alquiler ¿sus arrendadores permiten mascotas en el departamento?"
                                    type="text"
                                    name="pregunta_familia_4"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xl={12} lg={12}>
                                <TextField
                                    label="Si tuviera que cambiar de domicilio, ¿qué pasaría con la mascota?"
                                    type="text"
                                    name="nombre_mascota"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xl={12} lg={12}>
                                <TextField
                                    label="En caso de calamidad doméstica o la llegada de un nuevo familiar ¿Cuales serian los tratos hacie el animal adoptado?"
                                    type="text"
                                    name="pregunta_ultima"
                                    variant="outlined"
                                    fullWidth
                                    multiline
                                    rows={4}
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                </>
            )
        case 3:
            return (
                <>
                    <Grid style={{ margin: '2%', marginLeft: '10%', marginRight: '10%' }}>
                        <Grid container justify='center'>
                            <Typography variant="h5">
                                Preguntas sobre la adopción
                            </Typography>
                        </Grid>
                        <Grid container spacing={1} style={{ marginTop: '2%' }}>
                            <Grid item xl={12} lg={12}>
                                <TextField
                                    label="¿Qué tamaño de mascota prefiere, pequeño, mediano o grande?"
                                    type="text"
                                    name="nombre_mascota"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xl={12} lg={12}>
                                <TextField
                                    label="¿Cuántos años cree que vive un perro o gato en promedio?"
                                    type="text"
                                    name="nombre_mascota"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xl={12} lg={12}>
                                <TextField
                                    label="¿Cómo se ve con su mascota adoptada en 5 años?"
                                    type="text"
                                    name="nombre_mascota"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xl={12} lg={12}>
                                <TextField
                                    label="¿Tiene espacio suficiente para que su mascota se sienta cómoda?"
                                    type="text"
                                    name="nombre_mascota"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xl={12} lg={12}>
                                <TextField
                                    label="¿Dónde dormirá la mascota?"
                                    type="text"
                                    name="nombre_mascota"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xl={12} lg={12}>
                                <TextField
                                    label="cuantas horas al dia  pasaría sola la mascota?"
                                    type="text"
                                    name="pregunta_ultima"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xl={12} lg={12}>
                                <TextField
                                    label="Si el comportamiento de la mascota no es el deseado, ¿Qúe medidas tomaría?"
                                    type="text"
                                    name="pregunta_ultima"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xl={12} lg={12}>
                                <TextField
                                    label="¿Qúe energías debería tener la mascota?"
                                    type="text"
                                    name="pregunta_ultima"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xl={12} lg={12}>
                                <TextField
                                    label="¿Quién sera el responsable y se hara cargo de cubrir los gastos de la adoptada?"
                                    type="text"
                                    name="pregunta_ultima"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xl={12} lg={12}>
                                <TextField
                                    label="¿Está dispuesto a vacunar a su mascota?"
                                    type="text"
                                    name="pregunta_ultima"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xl={12} lg={12}>
                                <TextField
                                    label="¿Está dispuesto a llevar a su mascota a un veterinario periódicamente?"
                                    type="text"
                                    name="pregunta_ultima"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xl={12} lg={12}>
                                <TextField
                                    label="¿Qué tipo de alimentación le suministraría a la mascota?"
                                    type="text"
                                    name="pregunta_ultima"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xl={12} lg={12}>
                                <TextField
                                    label="¿Realizaría desparacitación de la mascota cuando se requiera?"
                                    type="text"
                                    name="pregunta_ultima"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xl={12} lg={12}>
                                <TextField
                                    label="¿Realizaría cepillado de Pelo a su máscota?"
                                    type="text"
                                    name="pregunta_ultima"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xl={12} lg={12}>
                                <TextField
                                    label="¿Realizaría aseo riguroso de la mascota?"
                                    type="text"
                                    name="pregunta_ultima"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xl={12} lg={12}>
                                <TextField
                                    label="¿Cuenta con los recursos sufucientes para cubrir los gastos de veterinaria?"
                                    type="text"
                                    name="pregunta_ultima"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xl={12} lg={12}>
                                <TextField
                                    label="¿Tienes alguna razón específica por la cual quieras adoptar a ésta mascota?"
                                    type="text"
                                    name="pregunta_ultima"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xl={12} lg={12}>
                                <TextField
                                    label="¿Dónde dejarías a la mascota si necesitas ausentarte por horas, días, semanas?"
                                    type="text"
                                    name="pregunta_ultima"
                                    variant="outlined"
                                    fullWidth
                                    multiline
                                    rows={2}
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                </>
            )
        case 4:
            return (
                <>
                    <Grid style={{ margin: '2%', marginLeft: '10%', marginRight: '10%' }}>
                        <Grid container justify='center'>
                            <Typography variant="h5">
                                Estás a un paso de realizar tu solicitud!
                            </Typography>
                        </Grid>
                        <Grid container style={{ marginTop: '5%' }} justify='center'>
                            <Typography>
                                Acepta los términos y condiciones del siguiente contrato
                            </Typography>
                        </Grid>
                        <Grid container style={{ marginTop: '2%', display: 'flex' }} justify="center" alignItems="center">
                            <Grid item xl={3} lg={3}>
                                <CustomizedSwitch />
                            </Grid>
                        </Grid>
                    </Grid>
                </>
            )
        default:
            return 'Unknown step';
    }
}

export default function AdoptMeForm() {
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();
    const classes = adoptMeFormStyles();
    // const fullScreenResponsive = useMediaQuery(theme.breakpoints.down('sm'));
    const dispatch = useDispatch();
    const { adoptMeDialog } = useSelector(state => state.saciPets)
    useEffect(() => {
        console.log(adoptMeDialog)
    }, [adoptMeDialog])

    const handleClickClose = () => {
        dispatch(adopt_me_dialog_action(false));
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return (
        <>
            <Dialog
                style={{ zIndex: 2 }}
                open={adoptMeDialog}
                onClose={handleClickClose}
                fullWidth
                maxWidth='md'
            >
                <Grid
                    container
                    justify="flex-end"
                    alignItems="flex-start">
                    <IconButton className={classes.closeIconButton} edge="end" color="inherit" aria-label="close" onClick={handleClickClose}>
                        <CloseIcon className={classes.closeButton} />
                    </IconButton>
                </Grid>
                <div className={classes.root}>
                    <Hidden only={'xs'}>
                        <Stepper alternativeLabel activeStep={activeStep}>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Hidden>
                    <div>
                        {activeStep === steps.length ? (
                            <div>
                                <Box m={10}>
                                    <Typography variant="h5" className={classes.instructions}>
                                        ¿Todo está listo?
                      </Typography>
                                    <Grid container justify="center">
                                        Pulsa el botón enviar para registrar tu formulario,
                        </Grid>
                                    <Grid container justify="center">
                                        Si deseas cambiar algún dato pulsa el botón de atrás
                        </Grid>
                                </Box>
                                <Grid container justify="center">
                                    <Button className={classes.button}>
                                        Atrás
                      </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={classes.button}>
                                        Enviar
                      </Button>
                                </Grid>
                            </div>
                        ) : (
                            <div>
                                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                                <div>
                                    <Grid container style={{ marginBottom: '10px' }} justify="center">
                                        <Button style={{ textTransform: 'none' }} disabled={activeStep === 0} className={classes.button} onClick={handleBack}>
                                            Atrás
                          </Button>
                                        <Button
                                            style={{ textTransform: 'none' }}
                                            variant="contained"
                                            color="primary"
                                            className={classes.button}
                                            onClick={handleNext}
                                        >
                                            {activeStep === steps.length - 1 ? 'Siguiente' : 'Siguiente'}
                                        </Button>
                                    </Grid>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Dialog>
        </>
    )
}


