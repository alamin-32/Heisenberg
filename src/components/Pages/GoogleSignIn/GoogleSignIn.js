import React from 'react';
import google from '../../../images/google.png'
import facebook from '../../../images/facebook.png'
import './GoogleSignIn.css'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const GoogleSignIn = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (user) {
        return (
            <p>Signed in user:{user?.email}</p>
        );
    }

    return (
        <div className='mb-4'>
            <button onClick={() => signInWithGoogle()} className="google-signIn">
                <img className='google-logo' src={google} alt="" />
                <h5 className='go-font'>Google Sign In</h5>
            </button>
            <button className="google-signIn">
                <img className='google-logo' src={facebook} alt="" />
                <h5 className='go-font'>Facebook Sign In</h5>
            </button>

        </div>
    );
};

export default GoogleSignIn; 