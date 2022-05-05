import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import './ProductAdd.css'


const ProductAdd = () => {
    const { register, handleSubmit } = useForm();
    const [products, setProducts] = useState({})
    useEffect(() => {
        const url = ` https://glacial-coast-36884.herokuapp.com/products`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])
    // console.log(products);

    const onSubmit = (event) => {
        const name = event => event.target.name.value
        const price = event => event.target.price.value
        const img = event => event.target.img.value
        const quantity = event => event.target.quantity.value
        const description = event => event.target.description.value
        const supplier = event => event.target.supplier.value
        const data = {
            name: name,
            price: price,
            img: img,
            quantity: quantity,
            description: description,
            supplier: supplier
        }

        fetch(' https://glacial-coast-36884.herokuapp.com/products', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                alert("Product Updated");

            })
        event.target.reset()

    }



    return (
        <div className='add-container'>
            <div className='container  col-md-6 add-container'>
                <h1 className='text-center my-4'>Add your Product</h1>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className=' add-form' name='img' placeholder='Photo Url' type="text" {...register("img")} />
                    <input className=' add-form' name='name' placeholder='Product Name' {...register("name")} />
                    <textarea className='add-form'
                        name='description' placeholder='Description' {...register("description")} />
                    <input className='add-form' name='price' placeholder='Price' type="number" {...register("price")} />
                    <input className='add-form' name='quantity' placeholder='Quantity' type="number" {...register("quantity")} />
                    <input className='add-form' name='supplier name' placeholder='Supplier Name' {...register("supplier Name")} />
                    <input className='mb-2 w-50 mx-auto add-product' type="submit" value="Add products" />
                </form>
            </div>
        </div>
    );
};

export default ProductAdd;