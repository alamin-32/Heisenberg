import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DeliverProduct from '../deliverProduct/DeliverProduct';
import './UpdateProduct.css'

const UpdateProduct = () => {
    const { id } = useParams();
    const [products, setProducts] = useState({})
    useEffect(() => {
        const url = ` https://glacial-coast-36884.herokuapp.com/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])
    // console.log(products);

    const handleUpdateProducts = event => {
        event.preventDefault();

        const quantity = parseInt(event.target.quantity.value);
        // const newQuantity = (quantity + parseInt(product.quantity))
        console.log(quantity);

        fetch(` https://glacial-coast-36884.herokuapp.com/products/${id}`, {
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
        <div className='updateProduct-container col-lg-12 col-md-6'>
            <h3 className='text-center'>Product Update : {products.name}</h3>
            <h4 className='text-center'> Quantity:  {products.quantity}</h4>
            <div className='text-center'>
                <form onSubmit={handleUpdateProducts}>
                    <input type="number" name="quantity" id="" />
                    <input className='add-quantity' type="submit" value="Add Quantity" />
                </form>
            </div>

            <div className='deliver-product'>
                <div className='update-product-cart container'>

                    <div className='product-img-container'>
                        <img className='product-img mx-auto' src={products.img} alt="" />
                    </div>
                    <div className=' '>
                        <h3>{products.name}</h3>
                        <p> {products.description}</p>
                        <h6>Quantity: <span>{products.quantity}</span></h6>
                        <h6>Price: <span>{products.price}</span></h6>
                        <h6>Supplier: <span>{products.supplier}</span></h6>
                    </div>
                </div >
                <DeliverProduct></DeliverProduct>
            </div>
        </div >
    );
};

export default UpdateProduct;