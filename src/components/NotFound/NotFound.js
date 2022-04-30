import React from 'react';
import not from '../../images/not.jpg';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <img className='not-found' src={not} alt="" />
        </div>
    );
};

export default NotFound;