import React, { useState } from 'react';
import auth from '../../../firebase.init'
import { Link } from 'react-router-dom';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    if (user) {
        return (
            <div>
                Registered user: {user.email}
            </div>
        )
    }


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
        createUserWithEmailAndPassword(email, password);
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
                    <input type="submit" value="Sign Up" />
                    <GoogleSignIn></GoogleSignIn>
                </form>
            </div>
        </div>
    );
};

export default Signup;