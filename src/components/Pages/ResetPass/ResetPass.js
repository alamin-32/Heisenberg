import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
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
        <div className='container w-50'>
            <form >
                <div className="mb-3 ">
                    <label htmlFor="email" >Email</label>
                    <input onBlur={handleEmail} type="email" className="form-control" placeholder='Your Email' id="exampleInputEmail1" required aria-describedby="emailHelp"></input>
                </div>
                <button
                    onClick={async () => {
                        await sendPasswordResetEmail(email);
                        alert('Sent email');
                    }} type="submit" className="btn btn-primary">Send Password</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default ResetPass;