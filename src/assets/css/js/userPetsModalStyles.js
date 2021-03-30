import { makeStyles } from '@material-ui/core/styles';

const userPetsModalStyles = makeStyles((theme) => ({

    cardsPets: {
        borderRadius: '20px',
        background: '#ffffff',
        boxShadow: '10px 10px 10px #a6a6a6, -10px -10px 10px #ffffff',
        '&:hover': {
            boxShadow: 'inset 5px 5px 28px #787878, inset -5px -5px 28px #ffffff',
        },
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
            height: 300,
            paddingTop: '56.25%', // 16:9
            cursor: 'pointer',
        },
        [theme.breakpoints.up('lg')]: {
            height: 250,
            paddingTop: '56.25%', // 16:9
            cursor: 'pointer',
        },

    },
    body: {
        [theme.breakpoints.up('sm')]: {
            margin: theme.spacing(5, 2, 2, 2)
        },
        [theme.breakpoints.down('xs')]: {
            margin: theme.spacing(5, 0, 0, 0)
        },

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

export default userPetsModalStyles;