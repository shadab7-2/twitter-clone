import React from 'react';
import WhoToFollw from './WhoToFollow';

import Sidenavbar from '../Sidenavbar/Sidenavbar'
import Post from './Post/Post'
import styles from "./HomePage.module.css";

import { RightHandScrollBar } from './RighthandScrollbar/RighthandScrollbar'

import { Follow } from './follow/follow';
import Middle from './TweetInput/Middle';

const HomePage = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.leftsidebar}>
      <Sidenavbar/>
      </div>

      <div className={styles.content}>
        
        <div className={styles.post}>
          <h1>Home</h1>
           <Middle/>
           <Post/>
        </div>

        <div className={styles.rightsidebar}>
          {/* <div className={styles.search}>

          </div> */}
          <div className={styles.trending}>
            <RightHandScrollBar/>
          </div>
          <div className= {styles.whotofollow}>
            <Follow/>
          </div>
        </div>

      </div>
      
      
      {/* <WhoToFollw/> */}
      
      
      
    </div>
    )
}

export default HomePage
