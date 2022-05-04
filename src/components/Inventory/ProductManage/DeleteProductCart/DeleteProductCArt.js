import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../Hook/UseProducts';
import './DeleteProductCart.css'

const DeleteProductCArt = ({ product }) => {
    const { img, name, description, price, quantity } = product
    const { products, setProducts } = useProducts()

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
        <div className='col-sm-12'>
            <div className=' dlt-cart'>
                <div className='dlt-img-container '>
                    <img className='dlt-img' src={img} alt="" />
                    <div>
                        <h3>{name}</h3>
                        {/* <h6>Price: {price}</h6>
                        <h6>Quantity: {quantity}</h6> */}
                    </div>
                </div>
                <div >
                    <Link to={`/updateProduct/${product._id}`}><button className='update-btn ms-3'>Update</button></Link>
                    <button onClick={() => handleProductsDelete(product._id)} className='remove-btn ms-3'>Remove</button>
                </div>
            </div>

        </div>
    );
};

export default DeleteProductCArt;