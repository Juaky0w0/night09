import React from 'react';
import { Carousel } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import './CarouselContainer.css';
import image1 from '../img/1.png';
import './service.css'
import { SliderServi } from './sliderServi';


export function Servicio1() {
    return (
    <>        
    <div>
        <Carousel fade={true} pause={false}>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide" />
                <Carousel.Caption>
                    <div className='tituloSe'>
                        <h2>Nuestros Servicios</h2>
                        <p>Garantizamos la mejor experiencia a nuestros clientes</p>
                    </div>                    
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
    <div className="PService">
    <h4>Principales Servicios</h4>
    <h1>Mantenimientos y pruebas</h1>
    <p>Manejamos tecnología sólida y contamos con una alta experiencia en nuestros proyectos.
     Nuestro servicio de mantenimiento y pruebas de trasformadores de potencia y distribución 
     lo realizamos en el lugar o en nuestro taller de Puente Piedra.</p>
    </div>    
    <div>
      <SliderServi />  
    </div>
    </>
    );
}