import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
        marginLeft: theme.spacing(2),
        },
    },
    blackScreen: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, .3)',
        width: '100%',
        height: '100%',
        zIndex: 1000,
    },
    loader: {
        position: 'absolute',
        top: '30%',
        left: '48%',
        zIndex: 1000
    }
}));

const Loader = () => {

    // Styles Instance
    const classes = useStyles();

    return (
        <>
            <div className={ classes.blackScreen }></div>
            <div className={ classes.loader}>
                <div className={ classes.root} >
                    <CircularProgress style={{ color: '#006937' }} />
                </div>
            </div>
        </>
    )
}

export default Loader
