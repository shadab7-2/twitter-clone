import React, { useState } from 'react';
import styles from "./Password.module.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import CloseIcon from '@mui/icons-material/Close';
import { Box, TextField, IconButton, Input, FilledInput, InputLabel, InputAdornment, FormControl } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link }from "react-router-dom";
import { Button } from "@mui/material";


const Password = () => {
  const[password , setPassword] = useState('')
  
  const userid = JSON.parse(localStorage.getItem("input"));
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClick = () =>{

  }
  return (
    <div className={styles.container}>
      <div className={styles.icon_container}>
        <CloseIcon className={styles.closeIcon} />
        <TwitterIcon className={styles.twitterIcon} />
      </div>
      <p>Enter your password</p>
      <Box>
        <TextField
          disabled
          id="filled-disabled"
          label="Email"
          defaultValue={userid}
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
        <Link to = "/signup">Forgot password?</Link>
         <div>
         <Button 
            className={styles.next_button} 
            variant="contained "
            style={{backgroundColor:"black", color: "white"}}
            onClick={handleClick}
            >Log in</Button>
         </div>
      </Box>
    </div>
  );
}

export default Password;
