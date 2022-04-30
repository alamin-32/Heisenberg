import React, { useState } from 'react';
import auth from '../../../firebase.init'
import { Link, useNavigate } from 'react-router-dom';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState('');

    const [createUserWithEmailAndPassword,
        user,
        loading
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value);
    }

    const handleCreateUser = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Password Invalid")
        }
        if (password.length < 0) {
            setError("Password Too Short")
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }
    if (user) {
        navigate("/home")
    }
    if (error){

    }

    return (
        <div className='container w-50'>
            <div className='signup-form'>
                <form onSubmit={handleCreateUser}>
                    <h1 className='text-center my-4'>SignUp Form</h1>
                    <div className="mb-3">
                        <input onBlur={handleEmail} type="email" className="form-control" placeholder='Your Email' required ></input>
                    </div>
                    <div className="mb-3">
                        <input onBlur={handlePassword} type="password" className="form-control" placeholder='Password' required ></input>
                    </div>
                    <div className="mb-3">
                        <input onBlur={handleConfirmPassword} type="password" className="form-control" placeholder='Confirm Password' required ></input>
                    </div>
                    <p>
                        Already Registered ?
                        <Link to='/login'>
                            LogIn Now
                        </Link>
                    </p>
                    <input className='btn btn-primary' type="submit" value="Sign Up" />
                    <GoogleSignIn></GoogleSignIn>
                </form>
            </div>
        </div>
    );
};

export default Signup;