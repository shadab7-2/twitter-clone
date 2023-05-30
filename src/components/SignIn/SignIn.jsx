import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import styles from "./SignIn.module.css";
import { useNavigate ,Link} from "react-router-dom";
import { useState } from "react";

import { TextField, IconButton, Input,InputAdornment, FilledInput, InputLabel, FormControl } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button } from "@mui/material";


const SignIn = () => {
  const[password , setPassword] = useState('')
  
  const userid = JSON.parse(localStorage.getItem("input"));
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const[userData, setUserData] = useState([]);
  console.log(userData);

  const handleInput = (e) =>{
        e.preventDefault()
     setUserData(e.target.value);
     
  }
  const navigate = useNavigate();

  localStorage.setItem('input', JSON.stringify(userData));

  const handleClick = (userData) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (typeof userData === 'string' && userData.match(emailRegex)) {
      navigate('/homepage');
      setUserData(''); 
    } else {
      alert('You have entered an invalid email address!');
    }
  };
  console.log(userData)
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
            onChange={handleInput}
              value={userData}
              id="filled_input"
              label="Phone, email, or username"
              placeholder="Phone, email, or username"
              variant="filled"
            />
             <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  onChange={(e) => {setPassword(e.target.value)}}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

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
            Don't have an account? <Link to ="/signup"><button>Sign Up</button></Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
