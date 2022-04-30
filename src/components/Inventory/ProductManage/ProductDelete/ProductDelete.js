import React, { useEffect, useState } from 'react';
import DeleteProductCArt from '../DeleteProductCart/DeleteProductCArt';



const ProductDelete = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h1>Remove Product</h1>
            {
                products.map(product => <DeleteProductCArt key={product._id}
                    product={product}></DeleteProductCArt>)
            }
        </div>
    );
};

export default ProductDelete;