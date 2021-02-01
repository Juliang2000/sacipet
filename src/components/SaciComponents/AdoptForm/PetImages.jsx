import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid, CardActionArea, CardMedia, Button } from '@material-ui/core';


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
    },


});

const PetImages = () => {

    const [selectedImages, setSelectedImages] = useState([])

    const imageHandleChange = (e) => {
        // console.log(e.target.files)
        if (e.target.files) {
            const fileArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
            console.log(fileArray)

            setSelectedImages((prevImages) => prevImages.concat(fileArray))
            Array.from(e.target.files).map(
                (file) => URL.revokeObjectURL(file)
            )
        }
    }

    const renderPhotos = (source) => {
        return source.map((photo) => {
            return (
                <Grid item xs={2}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={photo}
                                title="Contemplative Reptile"
                            />
                            {/* <img src={photo} key={photo} alt={photo} /> */}
                        </CardActionArea>
                    </Card>
                </Grid>
            )

        })
    }


    const classes = useStyles();

    return (
        <>

            <Grid container spacing={2} xs={12} alignItems="center" justify="center" classname="containerImages" style={{ marginTop: '50px', marginBottom: '50px' }}>
                {/* 
                <Grid item xs={2}>
                    <Button
                        variant="contained"
                        component="label"
                        onChange={imageHandleChange}
                    >
                        Foto 1
                    <input
                            type="file"
                            hidden
                        />
                    </Button>

                </Grid>
                <Grid item xs={2}>
                    <Button
                        variant="contained"
                        component="label"
                        onChange={imageHandleChange}
                    >
                        Foto 2
                    <input
                            type="file"
                            hidden
                        />
                    </Button>

                </Grid>
                <Grid item xs={2}>
                    <Button
                        variant="contained"
                        component="label"
                        onChange={imageHandleChange}
                    >
                        Foto 3
                    <input
                            type="file"
                            hidden
                        />
                    </Button>

                </Grid>
                <Grid item xs={2}>
                    <Button
                        variant="contained"
                        component="label"
                        onChange={imageHandleChange}
                    >
                        Foto 4
                    <input
                            type="file"
                            hidden
                        />
                    </Button>

                </Grid>
                <Grid item xs={2}>
                    <Button
                        variant="contained"
                        component="label"
                        onChange={imageHandleChange}
                    >
                        Foto 5
                    <input
                            type="file"
                            hidden
                        />
                    </Button>
                </Grid> */}

                {/* <Grid item xs={2}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                title="Contemplative Reptile"
                            />
                        </CardActionArea>
                    </Card>
                </Grid> */}

                <Grid item xs={2}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={petImage1}
                                title="Contemplative Reptile"

                            />
                        </CardActionArea>
                        <Button
                            variant="contained"
                            color="primary"
                            component="label"
                            onChange={imageHandleChange}
                            fullWidth
                        >
                            Subir
                            <input
                                type="file"
                                hidden
                            />
                        </Button>
                    </Card>
                </Grid>




                <Grid item xs={2}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={petImage2}
                                title="Contemplative Reptile"
                            />
                        </CardActionArea>
                        <Button
                            variant="contained"
                            color="primary"
                            component="label"
                            onChange={imageHandleChange}
                            fullWidth
                        >
                            Subir
                            <input
                                type="file"
                                hidden
                            />
                        </Button>
                    </Card>
                </Grid>

                <Grid item xs={2}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={petImage3}
                                title="Contemplative Reptile"
                            />
                        </CardActionArea>
                        <Button
                            variant="contained"
                            color="primary"
                            component="label"
                            onChange={imageHandleChange}
                            fullWidth
                        >
                            Subir
                            <input
                                type="file"
                                hidden
                            />
                        </Button>
                    </Card>
                </Grid>

                <Grid item xs={2}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={petImage4}
                                title="Contemplative Reptile"
                            />
                        </CardActionArea>
                        <Button
                            variant="contained"
                            color="primary"
                            component="label"
                            onChange={imageHandleChange}
                            fullWidth
                        >
                            Subir
                            <input
                                type="file"
                                hidden
                            />
                        </Button>
                    </Card>
                </Grid>

                <Grid item xs={2}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={petImage5}
                                title="Contemplative Reptile"
                            />
                        </CardActionArea>
                        <Button
                            variant="contained"
                            color="primary"
                            component="label"
                            onChange={imageHandleChange}
                            fullWidth
                        >
                            Subir
                            <input
                                type="file"
                                hidden
                            />
                        </Button>
                    </Card>
                </Grid>


                {renderPhotos(selectedImages)}
            </Grid>

            {/* <div className="result">
                    {renderPhotos(selectedImages)}
            </div> */}
        </>
    );
}

export default PetImages