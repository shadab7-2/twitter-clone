import { useState } from "react"
import styles from "./SingleFollow.module.css"



export function SingleFollow(props){
    const [follow,setFollow]=useState("Follow")
    function handlefollow(){
        if (follow==="Follow"){
        setFollow("Following")
        }
        if(follow==="Following"){
            setFollow("Follow")
        }
    }

    return(
        <div className={styles.container}>
            <img src={props.img} className={styles.img} alt={props.imgalt}></img>
            <div className={styles.text}>
            <strong>{props.account}</strong>
            <p>{props.accountTag}</p>
            </div>
            <button onClick={handlefollow} className={styles.button}><strong>{follow}</strong></button>
        
        </div>
    )

}