import React, { useState, useEffect } from 'react'

// Carousel
import Carousel from 'react-material-ui-carousel'
import { CardMedia } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

//iconos de Carousel
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

//test images
import pug1 from '../../../assets/images/cardsModal/pug1.jpg'
import pug2 from '../../../assets/images/cardsModal/pug2.jpg'
import pug3 from '../../../assets/images/cardsModal/pug3.png'
import pug4 from '../../../assets/images/cardsModal/pug4.jpg'
import pug5 from '../../../assets/images/cardsModal/pug5.jpg'

const useStyles = makeStyles(() => ({
    media: {
        height: 450,
    },
}));

export default function CarouselPhotos({ itemPets }) {

    const baseURL = process.env.REACT_APP_BACKEND_URL;
    const classes = useStyles();
    const petPhotos = itemPets;
    const [photo_1, setPhoto_1] = useState(petPhotos.split(',')[0])
    const [photo_2, setPhoto_2] = useState(petPhotos.split(',')[1])
    const [photo_3, setPhoto_3] = useState(petPhotos.split(',')[2])
    const [photo_4, setPhoto_4] = useState(petPhotos.split(',')[3])
    const [photo_5, setPhoto_5] = useState(petPhotos.split(',')[4])
    const [items, setItems] = useState([
        {
            imgPath: `${baseURL}${photo_1}.jpg`,
        }
    ])

    useEffect(() => {
        if (photo_2 > 0) {
            console.log("si hay numero")
            setItems(...items, [
                {
                    imgPath: `${baseURL}${photo_1}.jpg`,
                },
                {
                    imgPath: `${baseURL}${photo_2}.jpg`,
                }
            ])
            if (photo_3 > 0) {
                setItems([
                    {
                        imgPath: `${baseURL}${photo_1}.jpg`,
                    },
                    {
                        imgPath: `${baseURL}${photo_2}.jpg`,
                    },
                    {
                        imgPath: `${baseURL}${photo_3}.jpg`,
                    }
                ])
                if (photo_4 > 0) {
                    setItems([
                        {
                            imgPath: `${baseURL}${photo_1}.jpg`,
                        },
                        {
                            imgPath: `${baseURL}${photo_2}.jpg`,
                        },
                        {
                            imgPath: `${baseURL}${photo_3}.jpg`,
                        },
                        {
                            imgPath: `${baseURL}${photo_4}.jpg`,
                        }
                    ])
                    if (photo_5 > 0) {
                        setItems([
                            {
                                imgPath: `${baseURL}${photo_1}.jpg`,
                            },
                            {
                                imgPath: `${baseURL}${photo_2}.jpg`,
                            },
                            {
                                imgPath: `${baseURL}${photo_3}.jpg`,
                            },
                            {
                                imgPath: `${baseURL}${photo_4}.jpg`,
                            },
                            {
                                imgPath: `${baseURL}${photo_5}.jpg`,
                            }
                        ])
                    }
                }
            }
        }
    }, [])


    function Item(props) {
        return (
            <>
                <CardMedia
                    // component="img"
                    className={classes.media}
                    title="Pinina"
                    // item={props.item.imgPath}
                    // onClick={handleClickOpen}
                    image={props.item.imgPath}
                >
                </CardMedia>
            </>
        )

    }

    return (
        <>
            <Carousel
                animation="fade"
                autoPlay={false}
                cycleNavigation={false}
                // IndicatorIcon={<PetsIcon/>}
                indicatorIconButtonProps={{
                    style: {
                        padding: '5px',
                        color: 'white'
                    }
                }}

                activeIndicatorIconButtonProps={{
                    style: {
                        color: '#63C132'
                    }
                }}

                indicatorContainerProps={{
                    style: {
                        marginTop: '-50px',
                    }
                }}

                navButtonsProps={{
                    style: {
                        // backgroundColor: 'cornflowerblue',
                        // borderRadius: 0,
                        width: 10,
                        height: 10
                    }
                }}

                NextIcon={<KeyboardArrowRight />}
                PrevIcon={<KeyboardArrowLeft />}
            >
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
        </>
    )
}
