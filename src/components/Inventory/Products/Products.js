import React from 'react';
import useProducts from '../../Hook/UseProducts';
import Product from './Product/Product';
import './Products.css'

const Products = ({ home }) => {
    const { products } = useProducts()

    return (
        <div className='products-container'>
            <h1 className='text-center my-5'>Our Products</h1>
            <div className='row'>
                {home ?
                    products.slice(0, 6).map(product => <Product
                        key={product._id}
                        product={product}>
                    </Product>)
                    :

                    products.map(product => <Product
                        key={product._id}
                        product={product}>
                    </Product>)
                }
            </div>

        </div>
    );
};

export default Products;