import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading
    ] = useSignInWithEmailAndPassword(auth);

    // const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
    //     auth
    // );


    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }

    const handleSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate('/home')
    }

    return (
        <div className='container w-50'>
            <div className='login-form'>
                <form onSubmit={handleSignIn}>
                    <h1 className='text-center my-4'>Login Form</h1>
                    <div className="mb-3 ">
                        <label htmlFor="email" >Email</label>
                        <input onBlur={handleEmail} type="email" className="form-control" placeholder='Your Email' id="exampleInputEmail1" required aria-describedby="emailHelp"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input onBlur={handlePassword} type="password" className="form-control" placeholder='Your Password' required id="exampleInputPassword1"></input>
                    </div>
                    <p>
                        New to this site?
                        <Link to='/signup'>
                            SignUp Now
                        </Link>
                    </p>
                    <p>
                        Forgot password?
                        <Link to='/resetPass'>Reset password</Link>
                    </p>
                    <button type="submit" className="btn btn-primary">LogIn</button>
                    <GoogleSignIn></GoogleSignIn>
                </form>
            </div>
        </div>
    );
};

export default Login;