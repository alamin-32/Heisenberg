import React from 'react';
import useProducts from '../../../Hook/UseProducts';
import './DeleteProductCart.css'

const DeleteProductCArt = ({ product }) => {
    const { img, name } = product
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

                    </div>
                </div>
                <div >
                    <button onClick={() => handleProductsDelete(product._id)} className='remove-btn ms-3'>Remove</button>
                </div>
            </div>

        </div>
    );
};

export default DeleteProductCArt;