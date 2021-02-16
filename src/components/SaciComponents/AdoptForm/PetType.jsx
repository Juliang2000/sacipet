import React, { useState } from 'react'
import Lottie from 'react-lottie';
import { Grid, Typography, Hidden, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

//Redux
import { useDispatch, useSelector } from 'react-redux';


//Redux Actions
import { dog_action, cat_action, hamster_action } from '../../../redux/actions/petTypeAction';
// import { sizePetData } from '../../../redux/actions/adoptFormAction';

//loties
import dogPet from '../../../assets/lotties/lottieDog.json'
import catPet from '../../../assets/lotties/lottieCat.json'
import hamsterPet from '../../../assets/lotties/lottieHamster.json'
import petType from '../../../redux/reducers/petTypeReducer';






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
        // position: 'absolute'


    },

    spacing: {
        // padding: "50px",
        // margin: "20%",
    },
    title: {
        margin: '5%',
    },
    petFont: {
        marginTop: '10%',
    },

}));

export default function PetType() {

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

    const dispatch = useDispatch();
    const petTypeState = useSelector(state => state.petType.petType);


    //State to select pet
    const [classSelectDog, setClassSelectDog] = useState(classes.cards);
    const [classSelectCat, setClassSelectCat] = useState(classes.cards);
    const [classSelectHamster, setClassSelectHamster] = useState(classes.cards);
    // const classSelect = classes.cards;
    const selectClassDog = classSelectDog;
    const selectClassCat = classSelectCat;
    const selectClassHamster = classSelectHamster;

    //Pet Validation
    // const [pet, setPet] = useState({
    //     petType: '',
    // });

    // const petTypeData = handleClickDog; 

    const handleClickDog = () => {
        setClassSelectDog(classes.cards2);
        setClassSelectCat(classes.cards);
        setClassSelectHamster(classes.cards);
        dispatch(dog_action(petType));
        console.log()

        // setPet({...pet})
        // dispatch(saveAdoptForm(newPet));
        // console.log(newPet)
    };

    // const _handleSubmit = async (data) => {
    //     dispatch(saveAdoptForm(data));
    // }

    const handleClickCat = () => {
        setClassSelectDog(classes.cards);
        setClassSelectCat(classes.cards2);
        setClassSelectHamster(classes.cards);
        dispatch(cat_action(petType));

    };

    const handleClickHamster = () => {
        setClassSelectDog(classes.cards);
        setClassSelectCat(classes.cards);
        setClassSelectHamster(classes.cards2);
        dispatch(hamster_action(petType));

    };

    const [checkClassSelected, setCheckClassSelected] = useState(true);

    if (petTypeState === 1)
        if (checkClassSelected === true) {
            setClassSelectCat(classes.cards2);
            setCheckClassSelected(false);
        }
    if (petTypeState === 2)
        if (checkClassSelected === true) {
            setClassSelectDog(classes.cards2);
            setCheckClassSelected(false);
        }
    if (petTypeState === 3)
        if (checkClassSelected === true) {
            setClassSelectHamster(classes.cards2);
            setCheckClassSelected(false);
        }


    return (
        <div className={classes.root} >
            <Grid container>
                <Hidden>
                    <Grid container justify="center" alignItems="flex-start">
                        <div className={classes.title}>


                            <Typography variant="h5">
                                ¿Qué tipo de mascota deseas dar en adopción?
                            </Typography>


                        </div>
                    </Grid>
                </Hidden>
                <br />
                <br />
                <Grid item xs={12} sm={4} md={4} spacing={10}>

                    <Button
                        className={selectClassDog}
                        onClick={handleClickDog}>
                        <Lottie
                            options={dogPetOptions}
                            height={150}
                            width={150}
                            isPaused={playLottie.dogPet}
                        />
                    </Button>
                    <div className={classes.petFont}>
                        <Typography variant='h6' align='center'>
                            Perro
                    </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4} md={4} spacing={10}>

                    <Button onClick={handleClickCat} className={selectClassCat}>
                        <Lottie
                            options={catPetOptions}
                            height={150}
                            width={150}
                            isPaused={playLottie.CatPet}
                        />
                    </Button>
                    <div className={classes.petFont}>
                        <Typography variant='h6' align='center'>
                            Gato
                    </Typography>
                    </div>

                </Grid>
                <Grid item xs={12} sm={4} md={4} spacing={10}>

                    <Button onClick={handleClickHamster} className={selectClassHamster}>
                        <Lottie
                            options={hamsterPetOptions}
                            height={150}
                            width={150}
                            isPaused={playLottie.hamsterPet}
                        />
                    </Button>
                    <div className={classes.petFont}>
                        <Typography variant='h6' align='center'>
                            Hámster
                    </Typography>
                    </div>

                </Grid>


            </Grid>

        </div>
    )
};



