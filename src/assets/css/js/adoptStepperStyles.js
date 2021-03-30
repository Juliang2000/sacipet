import { makeStyles } from '@material-ui/core/styles';

const adoptStepperStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: '5%',
    },
    button: {
        marginRight: theme.spacing(1),
        alignItems: 'center',
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        alignItems: 'center',
        textAlign: 'center',
    },
    petprice: {
        alignItems: 'center',
    },
    adoptionButton: {
        color: '#fff',
        textTransform: 'none',
        fontSize: '15px',
        [theme.breakpoints.between('xs', 'sm')]: {
            color: '#000',
        },
    },
    adoptionMobileButton: {
        // color: 'black',
        textTransform: 'none',
        fontSize: '15px',
    },
    closeIconButton: {
        marginRight: 5,
        marginTop: 5,
    },
    closeButton: {
        color: '#808080',
        width: 30,
        height: 30,
    },
    titleDialogStart: {
        marginBottom: '5%',
    },
    rootDialogStart: {
        padding: theme.spacing(0, 5, 5, 5),
        textAlign: 'center',
        [theme.breakpoints.only('xs')]: {
            padding: theme.spacing(1, 1, 1, 1),
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
        },
    },
    buttonStart: {
        textTransform: 'none',
        color: '#ffff',
        fontSize: '15px',
    },
    buttonSecondary2: {
        textAlign: 'center',
        textTransform: 'none',
        fontSize: '15px',
    },
    menuIcons: {
        width: '40px',
        [theme.breakpoints.only('xs')]: {
            width: '30px',
        },
    },
}));

export default adoptStepperStyles;