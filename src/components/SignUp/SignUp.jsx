import React from 'react';
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import styles from "./SignUp.module.css";
import { Link } from 'react-router-dom';


const SignUp = () => {
  
  return (
    <div className={styles.container}>
      
      <TwitterIcon className={styles.twitter_icon} />
        <h1>Join Twitter today</h1>
        <div className={styles.signin_container}>
          <button className={styles.button}>
            <span className={styles.sign_button}>
              <GoogleIcon className={styles.sign_icon} />
              Sign in with Google
            </span>
          </button>

          <button className={styles.button}>
            <span className={styles.sign_button}>
              <AppleIcon className={styles.sign_icon} />
              Sign in with Apple
            </span>
          </button>

          <Link to ='/register'><button className={styles.create_button}>
      
          Create Account
          </button></Link>

           <p className={styles.content}>
            By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
            <p>
          Have an account already? <Link to="/"><button className={styles.login_button}>Log in</button> </Link>
          </p>
        </div>
      
    </div>
  )
}

export default SignUp
