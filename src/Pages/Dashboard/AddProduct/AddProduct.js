import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Button } from '@mui/material';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        axios.post('https://gentle-everglades-82582.herokuapp.com/products', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div>
            <h2>Add Product</h2>
            <form style={{ margin: "20px" }} onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })}
                    style={{ width: '75%', margin: "5px", padding: "10px" }} placeholder="Name" />
                <input type="number" {...register("price")} style={{ width: '75%', margin: "5px", padding: "10px" }} placeholder="Price" />
                <textarea {...register("description")} style={{ width: '75%', margin: "5px", padding: "10px" }} placeholder="Description" />
                <input {...register("img")} style={{ width: '75%', margin: "5px", padding: "10px" }} placeholder="Image URL" />
                <Button sx={{ width: '40%', m: 2, mt: 4, mb: 5 }} variant="contained" type="submit">Add Product</Button>
            </form>
        </div>
    );
};

export default AddProduct;