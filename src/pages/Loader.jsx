import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Lottie from 'react-lottie';

import logo from '../assets/lotties/pinina.json';

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
        backgroundColor: 'rgba(0, 0, 0, .9)',
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

    const [playLottie, setPlayLottie] = useState({
        logo: false,
        
    });
    
     // LottieFiles configuration
    
     const logoOptions = {
        loop: true,
        autoplay: true,
        animationData: logo,
    };

    // Styles Instance
    const classes = useStyles();

    return (
        <>
            <div className={ classes.blackScreen }></div>
            <div className={ classes.loader}>
                <div className={ classes.root} >
                <Lottie
                        options={logoOptions}
                        height={150}
                        width={150}
                        isPaused={playLottie.logo}
                    />
                    {/* <CircularProgress style={{ color: '#006937' }} /> */}
                </div>
            </div>
        </>
    )
}

export default Loader
