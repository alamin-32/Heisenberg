import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    const { _id, img, name, description, quantity, supplier, price
    } = product;
    const navigate = useNavigate();

    const updateProducts = id => {
        navigate(`/updateProduct/${id}`)
    }
    return (
        <div className='col-lg-4 mb-3 ml-3 container product-container-details'>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title><h3>{name}</h3></Card.Title>
                    <Card.Text>
                        <p>{description}</p>
                        <h6>Quantity: {quantity}</h6>
                        <h6>Price: {price}</h6>
                        <h6>Supplier: {supplier}</h6>
                    </Card.Text>
                    <Button onClick={() => updateProducts(_id)} className="order-btn"><Link className='btn-text' to='/updateProduct/:id'>Order</Link></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;