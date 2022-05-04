import React from 'react';
import { useForm } from "react-hook-form";
import './ProductAdd.css'


const ProductAdd = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        fetch('http://localhost:5000/products', {
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
                // data.target.reset();
            })

    }



    return (
        <div className='add-container'>
            <div className='container  col-md-6 add-container'>
                <h1 className='text-center my-4'>Add your Product</h1>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className=' add-form' placeholder='Photo Url' type="text" {...register("img")} />
                    <input className=' add-form' placeholder='Product Name' {...register("name")} />
                    <textarea className='add-form' placeholder='Description' {...register("description")} />
                    <input className='add-form' placeholder='Price' type="number" {...register("price")} />
                    <input className='add-form' placeholder='Quantity' type="number" {...register("quantity")} />
                    <input className='add-form' placeholder='Supplier Name' {...register("supplier Name")} />
                    <input className='mb-2 w-50 mx-auto add-product' type="submit" value="Add products" />
                </form>
            </div>
        </div>
    );
};

export default ProductAdd;