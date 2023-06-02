import React from 'react'
import TwitterIcon from "@mui/icons-material/Twitter";
import styles from './Register.module.css'
import { TextField } from '@mui/material';

import {Link} from 'react-router-dom'
const Register = () => {

  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <TwitterIcon/>
        </div>
        <div className={styles.heading}>
          <h1>Join Twitter Today</h1>
          <div className={styles.form_container}>
          <TextField id="outlined-basic" label="name" variant="outlined" />
          <TextField id="outlined-basic" label="UserName" variant="outlined" />
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <div className={styles.dob}>
        <h3>
          Date of Birth</h3>
          <p>
          This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
          </p>
         
        </div>
        <Link to = "/homepage"><button className={styles.register_button}>Register</button> </Link>
        
          </div>
          <p>Already Have an Account?<Link to="/"><button className={styles.signin_button}>Sign In</button> </Link> </p>
        </div>
    </div>
  )
}

export default Register