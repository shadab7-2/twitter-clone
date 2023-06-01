import React from 'react';
import WhoToFollw from './WhoToFollow';

import Sidenavbar from '../Sidenavbar/Sidenavbar'
import Post from './Post/Post'
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div>
      <h1> This is our home HomePage</h1>
      <Sidenavbar/>
      <WhoToFollw/>
      <Post/>
    </div>
    )
}

export default HomePage
