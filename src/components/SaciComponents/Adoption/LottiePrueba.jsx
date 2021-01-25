import React, { useState } from 'react'

import Lottie from 'react-lottie';

import dog from '../../../assets/lotties/lottieDog.json';
import Button from '@material-ui/core/Button'





export default function GmailTreeView() {

    const defaultOptions = {
        loop: true,
        autoplay: false,
        rendererSettings: {
            preserveAespectRatio: 'xMidYMid slice'
        }
    }
    
    
    const [isStart, setIsStart] = useState(false);
    
    const handleStart = () => {
        setIsStart(true)
    }

    return (
        <div>
            <Lottie options={{ animationData: dog, ...defaultOptions }}/* className={classes.lottieSize} */
                style={{ width: '40px', marginRight: '10px' }}
                //  isStopped={isStopeed}
                //  isPaused={isPaused}
                autoplay={isStart}
            />

            <Button variant="text" color="default" onClick={handleStart}>
                prueba Componente
                </Button>
        </div>
    )


}