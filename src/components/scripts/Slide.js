import React from 'react';
import propTypes from 'prop-types';
import '../Slider.scss';


const Slide = ({cover,children}) => {
    return(
        <div className='wrapper__slide'>
            <div className='slide__cover-container'>
                <img src={cover} className='cover-container__cover'/>
            </div>
            <div className='slide__content'>
                {children}
            </div>
        </div>
    )
}
export default Slide;

Slide.prototype = {
    children:propTypes.oneOfType([
        propTypes.arrayOf(propTypes.node),
        propTypes.node
    ]),
    cover:propTypes.string
}