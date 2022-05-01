import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const handleUpdateProducts = event => {
        event.preventDefault();

        const price = event.target.price.value;

        const updateProduct = { price };

        fetch(`http://localhost:5000/products/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                alert("Product Updated");
                event.target.reset();
            })
    }


    return (
        <div>
            <h1>Product Update : {product.name}</h1>
            <form onSubmit={handleUpdateProducts}>
                <input type="number" name="Quantity" id="" />
                <input type="submit" value="Update Product" />
            </form>
        </div>
    );
};

export default UpdateProduct;