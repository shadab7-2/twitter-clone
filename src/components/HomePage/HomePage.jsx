import React from 'react'
import { RightHandScrollBar } from './RighthandScrollbar/RighthandScrollbar'
import styles from "./HomePage.module.css"
import { Follow } from './follow/follow'

const HomePage = () => {
  return (
    <div>
      <h1> This is our home HomePage</h1>
      <RightHandScrollBar/>
      <Follow/>
    </div>
  )
}

export default HomePage
