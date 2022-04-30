import React from 'react';
import './DeleteProductCart.css'

const DeleteProductCArt = ({ product }) => {
    const { img, name } = product

    return (
        <div>
            <div className='dlt-cart'>
                <img className='dlt-img' src={img} alt="" />
                <h3>{name}</h3>
                <button className='btn btn-primary ms-3'>Remove</button>
            </div>

        </div>
    );
};

export default DeleteProductCArt;