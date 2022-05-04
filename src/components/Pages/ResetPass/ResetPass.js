import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import auth from '../../../firebase.init';


const ResetPass = () => {
    const [email, setEmail] = useState('')

    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );

    const handleEmail = event => {
        setEmail(event.target.value)

    }
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (sending) {
        return <p>Sending...</p>;
    }


    return (
        <div className='container col-md-6'>
            <h1 className='text-center m-4'>Reset Your Password</h1>
            <form >
                <div className="mb-3 ">
                    <label htmlFor="email" >Email</label>
                    <input onBlur={handleEmail} type="email" className="form-control" placeholder='Your Email' id="exampleInputEmail1" required aria-describedby="emailHelp"></input>
                </div>
                <button
                    onClick={async () => {
                        await sendPasswordResetEmail(email);
                        toast("Password Send Successfully");
                    }} type="submit" className="btn btn-primary">Send Password</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default ResetPass;