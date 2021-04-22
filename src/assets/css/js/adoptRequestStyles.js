import { makeStyles } from '@material-ui/core/styles';

const adoptRequestStyles = makeStyles((theme) => ({

    root: {

        padding: theme.spacing(0, 5, 8, 5)
    },
    cardsPets: {
        borderRadius: '20px',
        background: '#ffffff',
        boxShadow: '10px 10px 10px #a6a6a6, -10px -10px 10px #ffffff',
        '&:hover': {
            boxShadow: 'inset 5px 5px 28px #787878, inset -5px -5px 28px #ffffff',
        },
    },
    title: {
        margin: theme.spacing(4, 0, 0, 0)
    },
    profilePet: {
        borderRadius: '50%',
        width: '150px',
        height: '150px'

    },
    editField: {
        display: "flex"
    },
    editIcon: {
        marginLeft: "20px",
        color: "#a6a6a6"
    },
    saveIcon: {
        marginLeft: "20px",
        color: "#63c132"
    },
    cancelIcon: {
        color: "#EC4F4F"
    },

    infoBody: {
        padding: theme.spacing(0, 5, 2, 5),
    },

    ModalDataContainer: {
        margin: theme.spacing(5, 20, 5, 20)
    },
    media: {
        [theme.breakpoints.down('xs')]: {
            height: 300,
            paddingTop: '56.25%', // 16:9
            cursor: 'pointer',
        },
        [theme.breakpoints.up('md')]: {
            height: 300,
            paddingTop: '56.25%', // 16:9
            cursor: 'pointer',
        },
        [theme.breakpoints.up('sm')]: {
            height: 150,
            paddingTop: '56.25%', // 16:9
            cursor: 'pointer',
        },
        [theme.breakpoints.up('lg')]: {
            height: 200,
            paddingTop: '56.25%', // 16:9
            cursor: 'pointer',
        },
        [theme.breakpoints.up('xl')]: {
            height: 200,
            paddingTop: '56.25%', // 16:9
            cursor: 'pointer',
        },
    },
    body: {
        [theme.breakpoints.up('sm')]: {
            margin: theme.spacing(5, 20, 5, 20)
        },
        [theme.breakpoints.up('sm')]: {
            margin: theme.spacing(5, 20, 5, 20)
        },
        [theme.breakpoints.down('xs')]: {
            margin: theme.spacing(5, 0, 0, 0)
        },

    },
    infoButton: {
        textTransform: 'none',
    },
    button: {
        marginRight: theme.spacing(1),
        alignItems: 'center',
    },
    closeButton: {
        color: '#808080',
        width: 30,
        height: 30,
    },
    titleDialogStart: {
        marginBottom: '5%',
    },
    closeIconButton: {
        marginRight: 5,
        marginTop: 5,
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
    header: {
        display: 'flex'
    },
}));

export default adoptRequestStyles;