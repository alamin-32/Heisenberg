import React from 'react';
import './GoogleSignIn.css'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const GoogleSignIn = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/"
    let errorType;

    if (user) {
        navigate(from, { replace: true })
    }

    return (
        <div className='mb-4 '>
            {errorType}
            <button onClick={() => signInWithGoogle()} className="google-signIn">
                <h5 className='go-font'>Google Sign In</h5>
            </button>
        </div>
    );
};

export default GoogleSignIn; 