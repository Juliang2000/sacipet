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
        marginTop: '50rem',
        height: 450,
        paddingTop: '56.25%', // 16:9
        cursor: 'pointer',
    },
    title: {
        fontSize: '50px',
        color: 'red',
        transformText: 'none',
    }
}));

export default function CarouselPhotos({ itemPets }) {

    const classes = useStyles;
    const petPhotos = itemPets;
    const photo_1 = petPhotos.split(',')[0]
    const photo_2 = petPhotos.split(',')[1]
    const photo_3 = petPhotos.split(',')[2]
    const photo_4 = petPhotos.split(',')[3]
    const photo_5 = petPhotos.split(',')[4]
    console.log(photo_1)

    const [items, setItems] = useState([
        {
            imgPath: `http://localhost:3000/${photo_1}.jpg`,
        },
        {
            imgPath: `http://localhost:3000/${photo_2}.jpg`,
        },
        {
            imgPath: `http://localhost:3000/${photo_3}.jpg`,
        },
        {
            imgPath: `http://localhost:3000/${photo_4}.jpg`,
        },
        {
            imgPath: `http://localhost:3000/${photo_5}.jpg`,
        },
    ]);

    // switch (photo_1) {
    //     case 1 - 500: setItems([
    //         {
    //             imgPath: `http://localhost:3000/${photo_1}.jpg`,
    //         }
    //     ])
    //     setAllowContent(true)
    //         break;
    //     default:
    // }

    function Item(props) {
        return (
            <>{


                <CardMedia
                    // component="img"
                    className={classes.media}
                    style={{
                        height: 450
                    }}
                    title="Pinina"
                    // item={props.item.imgPath}
                    // onClick={handleClickOpen}
                    image={props.item.imgPath}
                >
                </CardMedia>

                }
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
