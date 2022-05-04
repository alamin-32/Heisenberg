import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';
import Loading from '../Loading/Loading';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        error,
        user,
        loading
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'


    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }

    if (loading) {
        return <Loading></Loading>;
    }


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
        navigate(from, { replace: true })
    }
    console.log(user);






    return (
        <div className='container  col-md-6  login-container'>
            <div className='login-form'>
                <form onSubmit={handleSignIn}>
                    <h1 className='text-center my-4 title'>Login Form</h1>
                    <div className="mb-3 ">
                        <label htmlFor="email" >Email</label>
                        <input onBlur={handleEmail} type="email" className="form-control" placeholder='Your Email' id="exampleInputEmail1" required aria-describedby="emailHelp"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input onBlur={handlePassword} type="password" className="form-control" placeholder='Your Password' required id="exampleInputPassword1"></input>
                    </div>
                    <p className='error-msg'>
                        {error?.message}
                    </p>
                    <p className='text-color'>
                        New to this site?
                        <Link className='decoration' to='/signup'>
                            SignUp Now
                        </Link>
                    </p>
                    <p>
                        Forgot password?
                        <Link className='decoration' to='/resetPass'>Reset password</Link>
                    </p>

                    <div className='btn-container'>
                        <button type="submit" className="login-btn container"><h5 className='login-text'>Log In</h5></button>
                    </div>
                    <p className='text-center mt-4 mb-3'>Or</p>
                    <GoogleSignIn></GoogleSignIn>
                </form>
            </div>
        </div>
    );
};

export default Login;