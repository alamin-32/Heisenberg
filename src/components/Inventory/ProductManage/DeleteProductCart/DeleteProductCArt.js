import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../Hook/UseProducts';
import './DeleteProductCart.css'

const DeleteProductCArt = ({ product }) => {
    const { img, name } = product
    const { products, setProducts} = useProducts()

    const handleProductsDelete = id => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `http://localhost:5000/products/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = products.filter(product => product._id !== id)
                        setProducts(remaining)
                       
                    }

                })
        }




    }
    return (
        <div>
            <div className='dlt-cart'>
                <img className='dlt-img' src={img} alt="" />
                <h3>{name}</h3>
                <Link to={`/updateProduct/${product._id}`}><button className='btn btn-primary ms-3'>Update</button></Link>
                <button onClick={() => handleProductsDelete(product._id)} className='btn btn-primary ms-3'>Remove</button>
            </div>

        </div>
    );
};

export default DeleteProductCArt;