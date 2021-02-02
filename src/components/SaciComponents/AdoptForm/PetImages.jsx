import React, { useRef, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid, CardActionArea, CardMedia, Button, IconButton } from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';


import petImage1 from '../../../assets/images/cardsPets/pet1.png';
import petImage2 from '../../../assets/images/cardsPets/pet2.png';
import petImage3 from '../../../assets/images/cardsPets/pet3.png';
import petImage4 from '../../../assets/images/cardsPets/pet4.png';
import petImage5 from '../../../assets/images/cardsPets/pet5.png';


const useStyles = makeStyles({
    root: {
        maxWidth: 145,
    },
    media: {
        height: 100,
        objectFit: 'cover'
    },


});

const PetImages = () => {

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


    useEffect(() => {
        if (petimage1) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview1(reader.result);
            };
            reader.readAsDataURL(petimage1);
        } else {
            setPreview1(null);
        }
    }, [petimage1]);


    useEffect(() => {
        if (petimage2) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview2(reader.result);
            };
            reader.readAsDataURL(petimage2);
        } else {
            setPreview2(null);
        }
    }, [petimage2]);


    useEffect(() => {
        if (petimage3) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview3(reader.result);
            };
            reader.readAsDataURL(petimage3);
        } else {
            setPreview3(null);
        }
    }, [petimage3]);


    useEffect(() => {
        if (petimage4) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview4(reader.result);
            };
            reader.readAsDataURL(petimage4);
        } else {
            setPreview3(null);
        }
    }, [petimage4]);


    useEffect(() => {
        if (petimage5) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview5(reader.result);
            };
            reader.readAsDataURL(petimage5);
        } else {
            setPreview3(null);
        }
    }, [petimage5]);


    return (
        <>
            <Grid container spacing={2} xs={12}
                alignItems="center"
                justify="center"
                style={{ marginTop: '50px', marginBottom: '50px' }}>


                {preview1 ? (
                    <Grid item xs={2}>
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
                        <Grid item xs={2}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        onClick={(event) => {
                                            event.preventDefault();
                                            fileInputRef1.current.click();
                                        }}
                                        className={classes.media}
                                        image={petImage1}
                                        title="Contemplative Reptile"
                                    />
                                </CardActionArea>
                            </Card>
                        </Grid>
                    )}

                {preview2 ? (
                    <Grid item xs={2}>
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
                        <Grid item xs={2}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        onClick={(event) => {
                                            event.preventDefault();
                                            fileInputRef2.current.click();
                                        }}
                                        className={classes.media}
                                        image={petImage2}
                                        title="Contemplative Reptile"
                                    />
                                </CardActionArea>
                            </Card>
                        </Grid>
                    )}

                {preview3 ? (
                    <Grid item xs={2}>
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
                        <Grid item xs={2}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        onClick={(event) => {
                                            event.preventDefault();
                                            fileInputRef3.current.click();
                                        }}
                                        className={classes.media}
                                        image={petImage3}
                                        title="Contemplative Reptile"
                                    />
                                </CardActionArea>
                            </Card>
                        </Grid>
                    )}

                {preview4 ? (
                    <Grid item xs={2}>
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
                        <Grid item xs={2}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        onClick={(event) => {
                                            event.preventDefault();
                                            fileInputRef4.current.click();
                                        }}
                                        className={classes.media}
                                        image={petImage4}
                                        title="Contemplative Reptile"
                                    />
                                </CardActionArea>
                            </Card>
                        </Grid>
                    )}


                {preview5 ? (
                    <Grid item xs={2}>
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
                        <Grid item xs={2}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        onClick={(event) => {
                                            event.preventDefault();
                                            fileInputRef5.current.click();
                                        }}
                                        className={classes.media}
                                        image={petImage5}
                                        title="Contemplative Reptile"
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