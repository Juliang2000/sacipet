const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles((theme) => ({

    mailicon: {
        color: '#ffff',
      },
    
      grow: {
        flexGrow: 1,
    
      },
      menuButton: {
        // marginRight: theme.spacing(4),
        color: '#ffff',
      },
      upper: {
        // marginLeft: '2%',
    
      },
      title: {
        color: '#ffff',
        fontSize: '1.2rem',
        [theme.breakpoints.up('xs')]: {
          display: 'block',
        },
      },
      search: {
        // alignItems: 'flex-end',
        // justifyContent: 'right',
        display: 'flex',
        alignItems: 'flex-end',
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
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
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

}))