import React, { useState } from "react"
import styles from "./RighthandScrollbar.module.css"
import { Trend } from "./trend/trend"




export function RightHandScrollBar(){
    

    const data1=[
{
        id:1,
        topic:"Trending in India",
        tagName:"#SahilKhan",
        tweetCount:3680 
},
{
            
        id:2,
        topic:"Trending in India",
        tagName:"2nd June",
        tweetCount:146000
},
{
        
        id:3,
        topic:"Trending in India",
        tagName:"#modi_Go_back",
        tweetCount:128000
},
{
    
    id:4,
    topic:"Celebrities Trending",
    tagName:"#SaraAiKhan",
    tweetCount:36800
},
{
    
    id:5,
    topic:"Trending in India",
    tagName:"#SakshiMurderCase",
    tweetCount:1986
}]
const data2=[
    {
            id:1,
            topic:"Trending in India",
            tagName:"#SahilKhan",
            tweetCount:3680 
    },
    {
                
            id:2,
            topic:"Trending in India",
            tagName:"2nd June",
            tweetCount:146000
    },
    {
            
            id:3,
            topic:"Trending in India",
            tagName:"#modi_Go_back",
            tweetCount:128000
    },
    {
        
        id:4,
        topic:"Celebrities Trending",
        tagName:"#SaraAiKhan",
        tweetCount:36800
    },
    {
        
        id:5,
        topic:"Trending in India",
        tagName:"#SakshiMurderCase",
        tweetCount:1986
    },{
        id:6,
        topic:"Entertainment Trending",
        tagName:"#SpiderVerse",
        tweetCount:37300
    },{
        id:7,
        topic:"Trending in India",
        tagName:"#Nepal",
        tweetCount:1850
    },{
        id:8,
        topic:"Politics Trending",
        tagName:"#India_GDP",
        tweetCount:7041
    },{
        id:9,
        topic:"Trending in India",
        tagName:"#BrijbhushanSingh",
        tweetCount:3093
    },{
        id:10,
        topic:"Trending in India",
        tagName:"#MeenakshiLekhi",
        tweetCount:1837
    }]

const [data,setData]=useState(data1)
const [show,setShow]=useState("Show More")
function handleClick(){
    if(show==="Show More"){
    setData(data2)
    setShow("Show Less")
    }
    else if(show==="Show Less"){
        setData(data1)
        setShow("Show More")
    }
}
    return(
    <div className={styles.containers}>
        
        

        
        <h2><strong style={{marginLeft:"70%"}}>What's Happening</strong></h2>
        
        <div className={styles.feed_container}>
        {data.map((item,index)=>{
            return(
                <Trend className={styles.Card}
                key={index}
                topic={item.topic}
                tagName={item.tagName}
                tweetCount={item.tweetCount}


                />

                
            )
        })

}
        <button className={styles.Showbutton} onClick={handleClick}>{show}</button>
            
        </div>

    </div>
    )
}