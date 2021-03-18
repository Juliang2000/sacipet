const { makeStyles } = require("@material-ui/core");

const drawerWidth = 340;

const useStyles = makeStyles((theme) => ({


    toolbar: {
        paddingRight: 24, 
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '23px 8px',
        ...theme.mixins.toolbar,
    },

    menuButton: {
        margin: '100px',
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
        display: 'flex',
        color: '#fff',
        fontSize: '2rem',
        margin: '20px',
        // letterSpacing: '4px',
        textShadow: '5px 5px 5px green',


    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
        minWidth: 70,
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        // overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    image: {
        width: "230",
        height: "70"
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '20%',
        maxHeight: '20%',
    },

    actionArea: {
        borderRadius: 16,
        transition: '0.2s',

      },

    cards: {
        width: '100%',
    borderRadius: 16,
    boxShadow: '0 8px 16px 0 #BDC9D7',
    overflow: 'hidden',
    '&:hover': {
        boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
      },


    },
    cardmedia: {
 
        maxHeight: 240,
        // width: 300,
        display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"

    },
    groupcards: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '5px',
    },
    grid: {
        minHeight: '100vh',
        flexDirection: 'row',
        flexGrow: 1,
        marginBottom: theme.spacing(2),
        // margin: '10%',
    },
    bottom: {
        height: 80,
        marginHorizontal: 'auto',
        textAlign: 'center'
    },
    margin: {
        margin: theme.spacing(1),
    },
    appBarBanner: {
        position: 'relative',
        height: 650,
        backgroundColor: 'rgba(10, 82, 165, 1)',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    titleBanner: {
        marginLeft: theme.spacing(2),
        flex: 1,
        textAlign: 'center',
        marginHorizontal: 'auto',
        cursor: 'pointer'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        width: '95%',
        '& label.Mui-focused': {
            color: 'rgb(10, 82, 165)',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'rgb(10, 82, 165)',
        },
        '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
                borderColor: 'rgb(10, 82, 165)',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'rgb(10, 82, 165)',
            },
        },
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    rootNumberDocument: {
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
            width: '80%',
        },
    },
    rootLoader: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
    progressLoader: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    rootSnackBar: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    formControlLogin: {
        minWidth: 120,
        width: '95%',
        marginTop: 10,
        marginBottom: 30,
        color: '#fff'
    },
    formControl2Login: {
        minWidth: 120,
        width: '95%',
        marginTop: 10,
        marginBottom: 30,
        color: '#fff'
    },
    selectEmptyLogin: {
        marginTop: theme.spacing(2),
        color: '#fff'
    },
    formControlCorrespondece: {
        margin: theme.spacing(1),
        minWidth: 120,
        width: '95%',
        marginTop: 20
    },
    rootCloser: {
        height: 60,
        transform: 'translateZ(0px)',
        flexGrow: 1,
        marginHorizontal: 'auto',
        textAlign: 'center'
    },
    speedDialCloser: {
        position: 'absolute',
        bottom: 0,
        right: '42%',
    },
    input: {
        display: 'none'
    },
    rootStepper: {
        width: '100%',
    },
    buttonStepper: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },

    /// Pagination Component Styles

    PageButton: {
        textTransform: 'none',
        color: '#fff',
        fontSize: '16px',
        width: '100px'
    }

}));

export default useStyles;