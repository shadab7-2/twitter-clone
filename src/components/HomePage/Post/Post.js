import { postsData } from "../../utils";
import React ,{useState} from 'react'
import styles from "./Post.module.css";
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PollIcon from '@mui/icons-material/Poll';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { AiFillHeart } from "react-icons/ai";


const Post = () => {
  
    const[isLiked, setIsliked] = useState(false)

  return (
    <div className={styles.container}>
      {
        postsData.map((post, index) => (
        <div key={index} className={styles.post}>
          <div className={styles.userInfo}>
            <h4>{post.name}</h4>
            <p>@{post.username}</p>
            <p className={styles.uploadDate}>{post.uploadDate}</p>
          </div>
           <div className = {styles.img_dis}> 
           <p className={styles.description}>{post.description}</p>
          <img src={post.imageUrl} alt="Post" className={styles.postimage} />
           </div>
          <div className= {styles.posticons}>
          
              <button className={styles.posticon}><ChatBubbleOutlineOutlinedIcon/> </button>
              <button className={styles.retweeticon}><CachedOutlinedIcon/> </button>
              <button className={styles.hearticon}><FavoriteBorderOutlinedIcon/> </button>
              <button className={styles.posticon}><PollIcon/> </button>
              <button className={styles.posticon}><FileUploadOutlinedIcon/> </button>
              
          </div>
        </div>
        ))
      }
    </div>
  );
};

export default Post;

