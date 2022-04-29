import React from 'react';
import { Link } from 'react-router-dom';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';

const Signup = () => {
    return (
        <div className='container w-50'>
            <div className='signup-form'>
                <form>
                    <h1 className='text-center my-4'>SignUp Form</h1>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder='Your Name' id="exampleInputEmail1" ></input>
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" placeholder='Your Email' required ></input>
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" placeholder='Password' required ></input>
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" placeholder='Confirm Password' required id="exampleInputPassword1"></input>
                    </div>
                    <p>
                        Already Registered ?
                        <Link to='/login'>
                            LogIn Now
                        </Link>
                    </p>
                    <button type="submit" className="btn btn-primary">SignUp</button>
                    <GoogleSignIn></GoogleSignIn>
                </form>
            </div>
        </div>
    );
};

export default Signup;