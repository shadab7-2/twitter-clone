import React from 'react'
import Post from './Post/Post'
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className= {styles.container}>

      <sidebar className = {styles.sidenavebar}> sidenavbar</sidebar>
      <Post/>
    </div>
  )
}

export default HomePage
