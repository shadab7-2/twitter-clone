import React from 'react'

import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import {TextField } from "@mui/material";
import { Button } from "@mui/material";
// import './SignUp.css';

const SignUp = () => {
  return (
    <div className='container'>
      
        <TwitterIcon className="twitter-icon" />
        <h1>Join Twitter today</h1>
        <div className="sign-in-container">
          <button className="button">
            <span className="sign-button">
              <GoogleIcon className="sign-icon" />
              Sign in with Google
            </span>
          </button>

          <button className="button">
            <span className="sign-button">
              <AppleIcon className="sign-icon" />
              Sign in with Apple
            </span>
          </button>

          <button className="create-button">
         
          Create Account
          </button>
           <p>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
            
          
          <p>
          Have an account already?<button>Log in</button>
          </p>
        </div>
      
    </div>
  )
}

export default SignUp
