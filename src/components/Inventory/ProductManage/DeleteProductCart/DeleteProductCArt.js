import React, { useState } from 'react';
import './DeleteProductCart.css'

const DeleteProductCArt = ({ product }) => {
    const { img, name } = product
    const [products, setProducts] = useState({})

    const handleProductsDelete = id => {
        const proceed = window.confirm('Are you sure?')
        // if (proceed) {

        // }

        const url = `http://localhost:5000/products/${id}`
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    console.log('deleted')
                    const remaining = products.filter(products => products._id !== id)
                    setProducts(remaining)
                }

            })


    }
    return (
        <div>
            <div className='dlt-cart'>
                <img className='dlt-img' src={img} alt="" />
                <h3>{name}</h3>
                <button onClick={() => handleProductsDelete(product._id)} className='btn btn-primary ms-3'>Remove</button>
            </div>

        </div>
    );
};

export default DeleteProductCArt;