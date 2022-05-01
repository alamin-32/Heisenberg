import React from 'react';
import { Button, Card } from 'react-bootstrap';

import { Link, useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, img, name, description, quantity, supplier, price
    } = product;
    const navigate = useNavigate();

    const updateProducts = id => {
        navigate(`/updateProduct/${id}`)
    }
    return (
        <div className='col-lg-4 mb-3 ml-3 container'>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                        <p>Quantity:{quantity}</p>
                        <p>Price:{price}</p>
                        <p>Supplier: {supplier}</p>
                    </Card.Text>
                    <Button onClick={() => updateProducts(_id)} variant="primary"><Link className='text-white' to='/updateProduct/:id'>Deliver</Link></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;