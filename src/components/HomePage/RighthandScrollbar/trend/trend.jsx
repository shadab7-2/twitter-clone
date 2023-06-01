import styles from "./trend.module.css"
export function Trend(props){
    return(
        <div className={styles.container}><ul>
            <li>{props.topic}</li>
            <li>{props.tagName}</li>
            <li>{props.tweetCount} </li>
        </ul>
            {/* <span>{props.topic} </span>
            <span>{props.tagName}</span>
            <span>{props.tweetCount} Tweets</span> */}


        </div>
    )
}