import React from 'react';
import { Link } from 'react-router-dom';
import './ExPart.css'

const ExPart = () => {
    return (
        <div className='extra-1 container'>
            <h1>Where All</h1>
            <h1>Athletes Belong</h1>
            <h6 className='mt-2'>Things are better as a Heisenberg Member. Get first and exclusive access to the newest styles & innovation, free shipping, birthday rewards and more.</h6>
            <div >
                <Link to='/signup'> <button className='mx-2 mt-4 join'>Join us</button></Link>
                <Link to='/login'> <button className='join'>Sign In</button></Link>
            </div>
        </div>
    );
};

export default ExPart;