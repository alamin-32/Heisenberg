import React, { useEffect, useState } from 'react';
import DeleteProductCArt from '../DeleteProductCart/DeleteProductCArt';



const ProductDelete = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(' https://glacial-coast-36884.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])
    return (
        <div>
            {
                products.map(product => <DeleteProductCArt key={product._id}
                    product={product}></DeleteProductCArt>)
            }
        </div>
    );
};

export default ProductDelete;