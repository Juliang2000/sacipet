import React, { useState } from 'react'
import Lottie from 'react-lottie';
import { Grid, IconButton, Typography, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

//icons
import dogIcon from '../../../assets/icons/petype/dog.svg'
import catIcon from '../../../assets/icons/petype/cat.svg'
import hamsterIcon from '../../../assets/icons/petype/hamster.svg'

//loties
import dogPet from '../../../assets/lotties/lottieDog.json'
import catPet from '../../../assets/lotties/lottieCat.json'
import hamsterPet from '../../../assets/lotties/lottieHamster.json'






//Styles

const useStyles = makeStyles(() => ({

    root: {
        margin: '10%',

    },

    spacing: {
        // padding: "50px",
        // margin: "20%",
    },
    title: {
        // marginBotton: '10x',
    }

}))

export default function PetType() {

    const [click, setClick] = useState(false);

    const classes = useStyles();


    // Props Animations
    const props = click ? 'animate__animated animate__zoomOut' : null

    // Functions for animations
    const handleClick = () => {

        // Scroll
        const behavior = document.querySelector('.behavior');
        behavior.scrollIntoView({ behavior: 'smooth' });

        // Animation
        setClick(true);

        //     // Redirect
        //     setTimeout(() => {
        //         history.push('/')
        //     }, 300);
    }

    // Local State
    const [playLottie, setPlayLottie] = useState({
        dogPet: true,
        catPet: true,
        hamsterPet: true,
    });

    // Function to manage hover Effect on cards
    const handleMouseEnter = (option) => {
        setPlayLottie({
            ...playLottie,
            [option]: false
        });
    }

    const handleMouseLeave = (option) => {
        setPlayLottie({
            ...playLottie,
            [option]: true
        });
    }

    // LottieFiles configuration

    const dogPetOptions = {
        loop: true,
        autoplay: true,
        animationData: dogPet,
    };

    const catPetOptions = {
        loop: true,
        autoplay: true,
        animationData: catPet,
    };

    const hamsterPetOptions = {
        loop: true,
        autoplay: true,
        animationData: hamsterPet,
    };




    return (
        <div className={classes.root}>
            <Grid
                container
                spacing={10}
                // direction="column"
                alignItems="center"
                justify="space-between"
            >
                <Hidden>
                    <Grid item xs={12} spacing={0} className={classes.title}>
                        <Typography variant="h6">
                            Selecciona el tipo de mascota
                        </Typography>
                    </Grid>
                </Hidden>
                <br />
                <br />
                <Grid item xs={12} sm={4} md={4} spacing={3}>
                    {/* <IconButton><img width={70} src={dogIcon}></img></IconButton> */}
                    <Lottie
                        options={dogPetOptions}
                        height={200}
                        width={200}
                        isPaused={playLottie.dogPet}
                    />
                    <Typography variant='h5' align='center'>Perro</Typography></Grid>
                <Grid item xs={12} sm={4} md={4} spacing={3}>
                    {/* <IconButton>
                        <img width={70} src={catIcon}></img>
                    </IconButton> */}
                    <Lottie
                        options={catPetOptions}
                        height={200}
                        width={200}
                        isPaused={playLottie.CatPet}
                    />
                    <Typography variant='h5' align='center'>
                        Gato
                        </Typography>
                </Grid>
                <Grid item xs={12} sm={4} md={4} spacing={3}>
                    {/* <IconButton>
                        <img width={70} src={hamsterIcon}></img>
                    </IconButton> */}
                    <Lottie
                        options={hamsterPetOptions}
                        height={200}
                        width={200}
                        isPaused={playLottie.hamsterPet}
                    />
                    <Typography variant='h5' align='center'>
                        Hámster
                            </Typography>
                </Grid>


            </Grid>
        </div>
    )
}


