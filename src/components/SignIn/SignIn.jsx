import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import {TextField } from "@mui/material";
import { Button } from "@mui/material";
import styles from "./SignIn.module.css";
import { useNavigate } from "react-router-dom";


const SignIn = () => {
  const navigate = useNavigate();

  const  handleClick = () =>{
     navigate('/homepage')
  }
  return (
    <div className={styles.main_container}>
      <div className={styles.container}>
        <TwitterIcon className={styles.twitter_icon} />
        <h1>Sign in to Twitter</h1>
        <div className={styles.sign_in_container}>
          <button className={styles.button}>
            <span className={styles.sign_button}>
              <GoogleIcon className={styles.sign_icon}/>
              Sign in with Google
            </span>
          </button>

          <button className={styles.button}>
            <span className={styles.sign_button}>
              <AppleIcon className={styles.sign_icon} />
              Sign in with Apple
            </span>
          </button>

          <form className={styles.form_container}>
            <TextField
              id="filled_input"
              label="Phone, email, or username"
              placeholder="Phone, email, or username"
              variant="filled"
            />

            <Button 
            className={styles.next_button} 
            variant="contained "
            style={{backgroundColor:"black", color: "white"}}
            onClick={handleClick}
            >Next</Button>

            <Button 
            className={styles.forgot_button} 
            variant="contained "
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
