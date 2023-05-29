import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import {TextField } from "@mui/material";
import { Button } from "@mui/material";
import "./SignIn.css";


const SignIn = () => {
  return (
    <div className="main-container">
      <div className="container">
        <TwitterIcon className="twitter-icon" />
        <h1>Sign in to Twitter</h1>
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

          <form className="form-container">
            <TextField
              id="filled-input"
              label="Phone, email, or username"
              placeholder="Phone, email, or username"
              variant="filled"
            />

            <Button 
            className="next-button" 
            variant="contained" 
            style={{backgroundColor:"black"}}>Next</Button>

            <Button 
            className="forgot-button" 
            variant="contained" 
            style={{backgroundColor:"white",color:"black",textTransform: "lowercase"}}>
              Forgot password?
              </Button>
          </form>
          <p>
            Don't have an account?<button>Sign Up</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
