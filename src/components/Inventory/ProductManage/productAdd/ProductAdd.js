import React from 'react';
import { useForm } from "react-hook-form";


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
                data.target.reset();
            })

    }



    return (
        <div className='mb-5'>
            <h1>Add your Product</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Photo Url' type="text" {...register("img")} />
                <input className='mb-2' placeholder='Product Name' {...register("name")} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Supplier Name' {...register("supplier Name")} />
                <input className='mb-2' type="submit" value="add products" />
            </form>
        </div>
    );
};

export default ProductAdd;