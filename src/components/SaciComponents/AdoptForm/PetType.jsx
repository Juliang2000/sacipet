import React, { useState } from 'react'
import Lottie from 'react-lottie';
import { Grid, IconButton, Typography, Hidden, Button, Box } from '@material-ui/core'
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

    cards: {

        width: 200,
        height: 200,
        borderRadius: '100%',

    },

    cards2: {

        width: 200,
        height: 200,
        borderRadius: '100%',
        border: 'solid #4CB333',
        boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
    },

    root: {
        marginBottom: '10%',
        marginLeft: '10%',
        marginRight: '10%',

    },

    spacing: {
        // padding: "50px",
        // margin: "20%",
    },
    title: {
        marginBotton: '20px',
    }

}))

export default function PetType() {

    const [click, setClick] = useState(false);

    const classes = useStyles();

    // Local State
    const [playLottie, setPlayLottie] = useState({
        dogPet: true,
        catPet: true,
        hamsterPet: true,
    });

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

    // let selection = classes.cards;

    //State to select pet
    const [classSelectDog, setClassSelectDog] = useState(classes.cards);
    const [classSelectCat, setClassSelectCat] = useState(classes.cards);
    const [classSelectHamster, setClassSelectHamster] = useState(classes.cards);
    // const classSelect = classes.cards;
    const selectClassDog = classSelectDog;
    const selectClassCat = classSelectCat;
    const selectClassHamster = classSelectHamster;

    const handleClickDog = () => {
        setClassSelectDog(classes.cards2);
        setClassSelectCat(classes.cards);
        setClassSelectHamster(classes.cards);
        const newPet = 1;
        console.log(newPet)
    };

    const handleClickCat = () => {
        setClassSelectDog(classes.cards);
        setClassSelectCat(classes.cards2);
        setClassSelectHamster(classes.cards);
        const newPet = 2;
        console.log(newPet)
    
    };

    const handleClickHamster = () => {
        setClassSelectDog(classes.cards);
        setClassSelectCat(classes.cards);
        setClassSelectHamster(classes.cards2);
        const newPet = 3;
        console.log(newPet)
        registroDatos(newPet);
      
    };

    const datos = () => {
        console.log(registroDatos)
    }

    return (
        <div className={classes.root}>
            <Grid container>
                <Hidden>
                    <Grid container justify="center" alignItems="flex-start">
                        <Box mb={8}>
                            <Typography variant="h5">
                                ¿Qué tipo de mascota deseas dar en adopción?
                            </Typography>
                        </Box>
                    </Grid>
                </Hidden>
                <Button onClick={datos}>
                    Hola carebola
                </Button>
                <br />
                <br />
                <Grid item xs={12} sm={4} md={4} spacing={10}>
                    <Typography variant='h6' align='center'>
                        Perro
                    </Typography>
                    <Button onClick={handleClickDog} className={selectClassDog}>
                        <Lottie
                            options={dogPetOptions}
                            height={150}
                            width={150}
                            isPaused={playLottie.dogPet}
                        />
                    </Button>
                </Grid>
                <Grid item xs={12} sm={4} md={4} spacing={10}>
                    <Typography variant='h6' align='center'>
                        Gato
                    </Typography>
                    <Button onClick={handleClickCat} className={selectClassCat}>
                        <Lottie
                            options={catPetOptions}
                            height={150}
                            width={150}
                            isPaused={playLottie.CatPet}
                        />
                    </Button>

                </Grid>
                <Grid item xs={12} sm={4} md={4} spacing={10}>
                    <Typography variant='h6' align='center'>
                        Hámster
                    </Typography>
                    <Button onClick={handleClickHamster} className={selectClassHamster}>
                        <Lottie
                            options={hamsterPetOptions}
                            height={150}
                            width={150}
                            isPaused={playLottie.hamsterPet}
                        />
                    </Button>

                </Grid>


            </Grid>
            
        </div>
    )
}


