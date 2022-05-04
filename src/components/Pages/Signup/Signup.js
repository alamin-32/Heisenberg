import React, { useState } from 'react';
import auth from '../../../firebase.init'
import { Link, useNavigate } from 'react-router-dom';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import './SignUp.css'

const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword,
        user,
        loading
    ] = useCreateUserWithEmailAndPassword(auth);


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
            setError("Password Did not match")
            return;
        }
        if (password.length < 6) {
            setError("Password Too Short")
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate("/home")
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }

    return (
        <div className='container col-md-6 signup-container'>
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

                    <p className='error-msg'>{error}</p>

                    <p>
                        Already Registered ?
                        <Link className='decoration' to='/login'>
                            LogIn Now
                        </Link>
                    </p>
                    <div className='btn-container'>
                        <button type="submit" className="login-btn container"><h5 className='login-text'>Sign Up</h5></button>
                    </div>
                    <p className='text-center mt-4 mb-3'>Or</p>
                    <GoogleSignIn></GoogleSignIn>
                </form>
            </div>
        </div>
    );
};

export default Signup;