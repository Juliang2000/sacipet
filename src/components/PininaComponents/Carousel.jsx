import React from "react";
import Carousel from "react-bootstrap/Carousel";


import Slide1 from "../../assets/images/perros_alegres.jpg";
import Slide2 from "../../assets/images/perro_alegre3.jpg";
import Slide3 from "../../assets/images/gatos.jpg";
import Slide4 from "../../assets/images/gato.jpg";
import Slide5 from "../../assets/images/conejo.jpg";
import Slide6 from "../../assets/images/pecez.jpg";
import Slide7 from "../../assets/images/perro_motociclista.jpg";
import Slide8 from "../../assets/images/pig_guitarra.jpg";
import Slide9 from "../../assets/images/pig.jpg";
import Slide10 from "../../assets/images/loro.jpg";

const MySlider = () => {

    return (
        <React.Fragment>
            <div className="Slider d-flex justify-content-center my-5">
                <Carousel className="Carousel w-75">
                    <Carousel.Item interval={3000}>
                        <img
                            style={{ height: '50vh' }}
                            className="w-100"
                            src={Slide1}
                            alt="Primer Slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            style={{ height: '50vh' }}
                            className="d-block w-100"
                            src={Slide2}
                            alt="Segundo Slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            style={{ height: '50vh' }}
                            className="d-block w-100"
                            src={Slide3}
                            alt="Tercer Slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            style={{ height: '50vh' }}
                            className="d-block w-100"
                            src={Slide4}
                            alt="Tercer Slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            style={{ height: '50vh' }}
                            className="d-block w-100"
                            src={Slide5}
                            alt="Tercer Slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            style={{ height: '50vh' }}
                            className="d-block w-100"
                            src={Slide6}
                            alt="Tercer Slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            style={{ height: '50vh' }}
                            className="d-block w-100"
                            src={Slide7}
                            alt="Tercer Slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            style={{ height: '50vh' }}
                            className="d-block w-100"
                            src={Slide8}
                            alt="Tercer Slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            style={{ height: '50vh' }}
                            className="d-block w-100"
                            src={Slide9}
                            alt="Tercer Slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            style={{ height: '50vh' }}
                            className="d-block w-100"
                            src={Slide10}
                            alt="Tercer Slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </React.Fragment>
    );
};

export default MySlider;