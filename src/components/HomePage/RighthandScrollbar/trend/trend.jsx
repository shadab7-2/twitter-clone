import styles from "./trend.module.css"
export function Trend(props){
    return(
        <div className={styles.container}>
            <p>{props.topic}</p>
            <strong className={styles.strong}>{props.tagName}</strong>
            <p>{props.tweetCount} Tweets</p>


        </div>
    )
}