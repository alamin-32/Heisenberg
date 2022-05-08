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

    const onSubmit = (data) => {


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
                    <input className='add-form' name='supplier' placeholder='Supplier' {...register("supplier")} />
                    <input className='mb-2 w-50 mx-auto add-product' type="submit" value="Add products" />
                </form>
            </div>
        </div>
    );
};

export default ProductAdd;