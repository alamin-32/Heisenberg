import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('demo.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h1>Our Products</h1>
            <div className='row'>
                {

                    // products.map(product => <Product product={product}></Product>)
                    // :
                    products.map(product => <Product product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;