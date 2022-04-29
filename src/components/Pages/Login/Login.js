import React from 'react';
import { Link } from 'react-router-dom';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';

const Login = () => {
    return (
        <div className='container w-50'>
            <div className='login-form'>
                <form>
                    <h1 className='text-center my-4'>Login Form</h1>
                    <div className="mb-3 ">
                        <label htmlFor="email" >Email</label>
                        <input type="email" className="form-control" placeholder='Your Email' id="exampleInputEmail1" required aria-describedby="emailHelp"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" placeholder='Your Password' required id="exampleInputPassword1"></input>
                    </div>
                    <p>
                        New to this site?
                        <Link to='/signup'>
                            SignUp Now
                        </Link>
                    </p>
                    <p>
                        Forgot password?
                        <Link to='/login'>Reset password</Link>
                    </p>
                    <button type="submit" className="btn btn-primary">LogIn</button>
                    <GoogleSignIn></GoogleSignIn>
                </form>
            </div>
        </div>
    );
};

export default Login;