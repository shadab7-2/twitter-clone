import React from 'react'
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import styles from './sidenavbar.module.css'
import {useNavigate} from 'react-router-dom'
const Sidenavbar = () => {
  const navigate= useNavigate()
  const handleclick = () => {
  navigate("/wthpn");

  }
  return (
      <div className={styles.container}>
        <div className={styles.inner_container}>
        <TwitterIcon/>
        </div>
        <div className={styles.side_navbuttons}>
        <button className={styles.sidenav__button}><HomeIcon/><span>Home</span></button>
        <button className={styles.sidenav__button}><TagIcon/><span>Explore</span></button>
        <button className={styles.sidenav__button}><NotificationsNoneIcon/><span>Notifications</span></button>
        <button className={styles.sidenav__button}><MailOutlineIcon/><span>Messages</span></button>
        <button className={styles.sidenav__button}><FeaturedPlayListIcon/><span>Lists</span></button>
        <button className={styles.sidenav__button}><BookmarkBorderOutlinedIcon/><span>Bookmarks</span></button>
        <button className={styles.sidenav__button}><TwitterIcon/><span>TwitterBlue</span></button>
        <button className={styles.sidenav__button}><PersonOutlineIcon/><span>Profile</span></button>
        <button className={styles.sidenav__button}><MoreHorizIcon/><span>more</span></button>
        <button className={styles.tweet_button} onClick={handleclick}>Tweet</button>
        </div>
        

        
      </div>
  
  )
}

export default Sidenavbar
