import React from 'react'
import TwitterIcon from "@mui/icons-material/Twitter";
import styles from './Register.module.css'
import { TextField } from '@mui/material';
// import {IconButton, Input,InputAdornment, FilledInput, InputLabel, FormControl } from '@mui/material';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import './Register.module.css'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {Link} from 'react-router-dom'
const Register = () => {
//     const navigate=useNavigate();
//   const handlesignin=() => {
//     navigate('/signin')
//   } 
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
          <div className={styles.date_container}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Basic date picker" />
      </DemoContainer>
    </LocalizationProvider> 
          </div>
        </div>
        <button className={styles.register_button}>Register</button>
          </div>
          <p>Already Have an Account?<Link to="/"><button className={styles.signin_button}>Sign In</button> </Link> </p>
        </div>
    </div>
  )
}

export default Register