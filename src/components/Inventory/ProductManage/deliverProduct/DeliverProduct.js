import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DeliverProduct = () => {
    const { id } = useParams()
    const [products, setProducts] = useState({})
    console.log(products);
    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])

    const handleDeliverProduct = (event) => {
        const quantity = parseInt(products.quantity) - 1
        fetch(`http://localhost:5000/products/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ quantity })
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                setProducts(result)
            })


    }



    return (
        <div className='mx-auto container'>
            <button onClick={handleDeliverProduct} className='deliver-btn'>Deliver Product</button>
        </div>
    );
};

export default DeliverProduct;