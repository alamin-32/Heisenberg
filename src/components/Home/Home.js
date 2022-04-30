import React from 'react';
import { Carousel } from 'react-bootstrap';
import Products from '../Inventory/Products/Products';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='slide'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block container img"
                            src="https://capricathemes.com/prestashop/PRS13/PRS130306/PRS02/modules/cz_imageslider/views/img/sample-2.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block container img"
                            src="https://capricathemes.com/prestashop/PRS13/PRS130306/PRS02/modules/cz_imageslider/views/img/sample-1.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <Products></Products>
        </div>
    );
};

export default Home;