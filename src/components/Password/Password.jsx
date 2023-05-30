import React from 'react'
import styles from "./Password.module.css"
import TwitterIcon from "@mui/icons-material/Twitter";
import CloseIcon from '@mui/icons-material/Close';
import { Box,TextField } from '@mui/material';

const Password = () => {
    const userid = localStorage.getItem("input");
    
  return (
    <div className={styles.container}>
        <div className= {styles.icon_container}> 
        <CloseIcon className={styles.closeIcon}/>
        <TwitterIcon className={styles.twitterIcon}/>
        </div>
        <p> Enter your password</p>
        <Box>
        <TextField
          disabled
          id="filled-disabled"
          label="email"
          defaultValue={userid}
          variant="filled"
        />


        </Box>
     
      
    </div>
  )
}

export default Password
// sahdabansari972@gmail.com