import React, { useRef, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid, CardActionArea, CardMedia, IconButton } from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';

//redux
import { useDispatch } from 'react-redux';


import petImage1 from '../../../assets/images/cardsPets/pet1.png';
import petImage2 from '../../../assets/images/cardsPets/pet2.png';
import petImage3 from '../../../assets/images/cardsPets/pet3.png';
import petImage4 from '../../../assets/images/cardsPets/pet4.png';
import petImage5 from '../../../assets/images/cardsPets/pet5.png';
// import { ImageOutlined } from '@material-ui/icons';
import { save_pet_image_1, save_pet_image_2, save_pet_image_3, save_pet_image_4, save_pet_image_5 } from '../../../redux/actions/adoptFormAction';


const useStyles = makeStyles((theme) => ({
    root: {
        "&:hover": {
            border: '3px dashed  #63C132',
            transition: 'border 0.8s linear 0.2s',
        },
        maxWidth: 145,
        border: '3px solid  #fff',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    media: {
        "&:hover": {
            transform: 'scale(1.2)',
            '-webkit-transition': 'all 500ms ease-in-out',
            objectFit: 'cover',
        },
        height: 100,
        objectFit: 'cover',
        '-webkit-transition': 'all 500ms ease-in-out',
        transform: 'scale(1)',
    },

    containerPetimages: {
        // marginTop: 50,
        // marginBottom: 50,
        // height: 200,
        [theme.breakpoints.between('sm', 'xl')]: {
            height: 200
        },
    },

}));

const PetImages = () => {

    const dispatch = useDispatch();
    const classes = useStyles();

    const [petimage1, setPetimage1] = useState();
    const [preview1, setPreview1] = useState();

    const [petimage2, setPetimage2] = useState();
    const [preview2, setPreview2] = useState();

    const [petimage3, setPetimage3] = useState();
    const [preview3, setPreview3] = useState();

    const [petimage4, setPetimage4] = useState();
    const [preview4, setPreview4] = useState();

    const [petimage5, setPetimage5] = useState();
    const [preview5, setPreview5] = useState();

    const fileInputRef1 = useRef();
    const fileInputRef2 = useRef();
    const fileInputRef3 = useRef();
    const fileInputRef4 = useRef();
    const fileInputRef5 = useRef();

    const [checked1, setChecked1] = useState(false)
    const [checked2, setChecked2] = useState(false)
    const [checked3, setChecked3] = useState(false)
    const [checked4, setChecked4] = useState(false)
    const [checked5, setChecked5] = useState(false)

    useEffect(() => {
        if (petimage1) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview1(reader.result);

            };
            reader.readAsDataURL(petimage1);
            setChecked1(true);
        } else {
            setPreview1(null);
        }
    }, [petimage1]);

    if (checked1 === true) {
        dispatch(save_pet_image_1(petimage1))
        setChecked1(false)
    }

    useEffect(() => {
        if (petimage2) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview2(reader.result);

            };
            reader.readAsDataURL(petimage2);
            setChecked2(true);
            // dispatch(save_adopt_form_photos(petimage2))
        } else {
            setPreview2(null);
        }
    }, [petimage2]);

    if (checked2 === true) {
        dispatch(save_pet_image_2(petimage2))
        setChecked2(false)
    }

    useEffect(() => {
        if (petimage3) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview3(reader.result);

            };
            reader.readAsDataURL(petimage3);
            setChecked3(true);
            // dispatch(save_adopt_form_photos(petimage3))
        } else {
            setPreview3(null);
        }
    }, [petimage3]);

    if (checked3 === true) {
        dispatch(save_pet_image_3(petimage3))
        setChecked3(false)
    }

    useEffect(() => {
        if (petimage4) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview4(reader.result);

            };
            reader.readAsDataURL(petimage4);
            setChecked4(true);
            // dispatch(save_adopt_form_photos(petimage4))
        } else {
            setPreview4(null);
        }
    }, [petimage4]);

    if (checked4 === true) {
        dispatch(save_pet_image_4(petimage4))
        setChecked4(false)
    }

    useEffect(() => {
        if (petimage5) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview5(reader.result);

            };
            reader.readAsDataURL(petimage5);
            setChecked5(true);
            // dispatch(save_adopt_form_photos(petimage5))
        } else {
            setPreview5(null);
        }
    }, [petimage5]);

    if (checked5 === true) {
        dispatch(save_pet_image_5(petimage5))
        setChecked5(false)
    }



    return (
        <>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={2}
                className={classes.containerPetimages}
            >


                {preview1 ? (
                    <Grid item xs={12} sm={2}>
                        <Card className={classes.root} >
                            <IconButton aria-label="close"
                                onClick={() => {
                                    setPetimage1(null);
                                }}
                            >
                                <CloseIcon />
                            </IconButton>
                            <CardActionArea>
                                <img
                                    alt="imagen1"
                                    src={preview1}
                                    className={classes.media}
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                ) : (
                    <Grid item xs={12} sm={2}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    onClick={(event) => {
                                        event.preventDefault();
                                        fileInputRef1.current.click();
                                    }}
                                    className={classes.media}
                                    image={petImage1}
                                    title="Subir Imagen 1"
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                )}

                {preview2 ? (
                    <Grid item xs={12} sm={2}>
                        <Card className={classes.root} >
                            <IconButton aria-label="close"
                                onClick={() => {
                                    setPetimage2(null);
                                }}
                            >
                                <CloseIcon />
                            </IconButton>
                            <CardActionArea>
                                <img
                                    alt="imagen2"
                                    src={preview2}
                                    className={classes.media}
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                ) : (
                    <Grid item xs={12} sm={2}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    onClick={(event) => {
                                        event.preventDefault();
                                        fileInputRef2.current.click();
                                    }}
                                    className={classes.media}
                                    image={petImage2}
                                    title="Subir Imagen 2"
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                )}

                {preview3 ? (
                    <Grid item xs={12} sm={2}>
                        <Card className={classes.root} >
                            <IconButton aria-label="close"
                                onClick={() => {
                                    setPetimage3(null);
                                }}
                            >
                                <CloseIcon />
                            </IconButton>
                            <CardActionArea>
                                <img
                                    alt="imagen3"
                                    src={preview3}
                                    className={classes.media}
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                ) : (
                    <Grid item xs={12} sm={2}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    onClick={(event) => {
                                        event.preventDefault();
                                        fileInputRef3.current.click();
                                    }}
                                    className={classes.media}
                                    image={petImage3}
                                    title="Subir Imagen 3"
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                )}

                {preview4 ? (
                    <Grid item xs={12} sm={2}>
                        <Card className={classes.root} >
                            <IconButton aria-label="close"
                                onClick={() => {
                                    setPetimage4(null);
                                }}
                            >
                                <CloseIcon />
                            </IconButton>
                            <CardActionArea>
                                <img
                                    alt="imagen4"
                                    src={preview4}
                                    className={classes.media}
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                ) : (
                    <Grid item xs={12} sm={2}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    onClick={(event) => {
                                        event.preventDefault();
                                        fileInputRef4.current.click();
                                    }}
                                    className={classes.media}
                                    image={petImage4}
                                    title="Subir Imagen 4"
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                )}


                {preview5 ? (
                    <Grid item xs={12} sm={2}>
                        <Card className={classes.root} >
                            <IconButton aria-label="close"
                                onClick={() => {
                                    setPetimage5(null);
                                }}
                            >
                                <CloseIcon />
                            </IconButton>
                            <CardActionArea>
                                <img
                                    alt="imagen5"
                                    src={preview5}
                                    className={classes.media}
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                ) : (
                    <Grid item xs={12} sm={2}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    onClick={(event) => {
                                        event.preventDefault();
                                        fileInputRef5.current.click();
                                    }}
                                    className={classes.media}
                                    image={petImage5}
                                    title="Subir Imagen 5"
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                )}




                <input
                    type="file"
                    style={{ display: "none" }}
                    ref={fileInputRef1}
                    accept="image/*"
                    onChange={(event) => {
                        const file = event.target.files[0];
                        if (file && file.type.substr(0, 5) === "image") {
                            setPetimage1(file);
                        } else {
                            setPetimage1(null);
                        }
                    }}
                />

                <input
                    type="file"
                    style={{ display: "none" }}
                    ref={fileInputRef2}
                    accept="image/*"
                    onChange={(event) => {
                        const file = event.target.files[0];
                        if (file && file.type.substr(0, 5) === "image") {
                            setPetimage2(file);
                        } else {
                            setPetimage2(null);
                        }
                    }}
                />

                <input
                    type="file"
                    style={{ display: "none" }}
                    ref={fileInputRef3}
                    accept="image/*"
                    onChange={(event) => {
                        const file = event.target.files[0];
                        if (file && file.type.substr(0, 5) === "image") {
                            setPetimage3(file);
                        } else {
                            setPetimage3(null);
                        }
                    }}
                />

                <input
                    type="file"
                    style={{ display: "none" }}
                    ref={fileInputRef4}
                    accept="image/*"
                    onChange={(event) => {
                        const file = event.target.files[0];
                        if (file && file.type.substr(0, 5) === "image") {
                            setPetimage4(file);
                        } else {
                            setPetimage4(null);
                        }
                    }}
                />

                <input
                    type="file"
                    style={{ display: "none" }}
                    ref={fileInputRef5}
                    accept="image/*"
                    onChange={(event) => {
                        const file = event.target.files[0];
                        if (file && file.type.substr(0, 5) === "image") {
                            setPetimage5(file);
                        } else {
                            setPetimage5(null);
                        }
                    }}
                />

            </Grid>
        </>
    );
}

export default PetImages