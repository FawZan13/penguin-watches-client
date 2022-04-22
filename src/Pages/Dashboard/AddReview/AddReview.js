import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Button } from '@mui/material';


const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        axios.post('https://gentle-everglades-82582.herokuapp.com/reviews', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Add Review</h2>
            <form style={{ margin: "20px" }} onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })}
                    style={{ width: '75%', margin: "5px", padding: "10px" }} placeholder="Name" />
                <textarea {...register("review")} style={{ width: '75%', margin: "5px", padding: "10px" }} placeholder="Your Review" />
                <input type="number" {...register("number", { required: true })}
                    style={{ width: '75%', margin: "5px", padding: "10px" }} min="1" max="5" placeholder="Rating" />
                {/* <input type="number" id="quantity" name="quantity" min="1" max="5"></input> */}
                <Button sx={{ width: '40%', m: 2, mt: 4, mb: 5 }} variant="contained" type="submit">Add Review</Button>
            </form>
        </div>
    );
};

export default AddReview;