import React, { useEffect, useState } from 'react';
import useProducts from '../../Hook/UseProducts';
import Product from './Product/Product';

const Products = () => {
    const { products } = useProducts()

    return (
        <div>
            <h1 className='text-center my-5'>Our Products</h1>
            <div className='row'>
                {

                    // products.map(product => <Product product={product}></Product>)
                    // :
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