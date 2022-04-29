import React from 'react';
import google from '../../../images/google.png'
import facebook from '../../../images/facebook.png'
import './GoogleSignIn.css'

const GoogleSignIn = () => {
    return (
        <div>
            <button className="google-signIn">
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