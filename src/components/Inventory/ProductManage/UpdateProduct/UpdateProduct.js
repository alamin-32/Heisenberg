import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './UpdateProduct.css'

const UpdateProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])

    const handleUpdateProducts = event => {
        event.preventDefault();

        const quantity = parseInt(event.target.quantity.value);
        // const newQuantity = (quantity + parseInt(product.quantity))
        console.log(quantity);

        fetch(`http://localhost:5000/products/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ quantity })
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
            <h1> Quantity:  {product.quantity}</h1>
            <div className='deliver-product'>
                <div className='col-lg-4 mb-3 ml-3 container'>
                    <Card>
                        <Card.Img variant="top" src={product.img} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>
                                {product.description}
                                <p>Quantity:{product.quantity}</p>
                                <p>Price:{product.price}</p>
                                <p>Supplier: {product.supplier}</p>
                            </Card.Text>
                            <Button
                                variant="primary">Deliver</Button >
                        </Card.Body >
                    </Card >
                </div >
                <div>
                    <form onSubmit={handleUpdateProducts}>
                        <input type="number" name="quantity" id="" />
                        <input type="submit" value="Update Product" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default UpdateProduct;