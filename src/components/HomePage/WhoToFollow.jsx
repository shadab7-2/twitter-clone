import React, { useState } from "react";
import style from "./WhoToFollow.module.css";
import { Button } from "@mui/material";

export default function WhoFollow() {
  const [data, setData] = useState([
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/PM_Modi_2015.jpg/450px-PM_Modi_2015.jpg",
      name: "Narendra Modi",
      username: "@narendramodi",
      id: "1",
      isFollowed: false
    },
    {
      img: "https://i.pinimg.com/originals/85/52/f8/8552f811e95b998d9505c43a9828c6d6.jpg",
      name: "Chennai Super Kings",
      username: "@ChennaiIPL",
      id: "2",
     
      isFollowed: false
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/800px-Elon_Musk_2015.jpg",
      name: "Elon Musk ",
      username: "@elonmusk",
      id: "3",
      isFollowed: false
    },
    {
      img: "https://media.gettyimages.com/id/1200534875/photo/boris-johnsons-post-brexit-cabinet-reshuffle.jpg?s=594x594&w=gi&k=20&c=Gn-KCB6Tg-RBkcsASC3IlpgF15ig4B7JP5e0UdSQiQQ=",
      name: "Rishi Sunak" ,
      username: "@RishiSunak",
      id: "4",
      
      isFollowed: false
    },
    {
      img: "https://www.india.com/wp-content/uploads/2020/10/virender-sehwag.jpg",
      name: "Virender Sehwag" ,
      username: "@virendersehwag",
      id: "4",
      
      isFollowed: false
    }
    
  ]);
  //const [buttontext,setButtontext] =useState("Follow")

  const [follow, setFollow] = useState(false);

  const handleToggleFollow = (index) => {
    const rawData = [...data]
    const current = rawData.findIndex((ele) => ele.id === index)

    if (rawData[current].isFollowed == false) {
      rawData[current].isFollowed = true;
    }
    else {
      rawData[current].isFollowed = false;
    }
    setData(rawData)
  }
  return (
    <div className={style.mainContainer}>
      <h2>Who to follow</h2>
      {data.map((ele, index) => (
       
        <div key={index} className={style.userDiv}>
          <img src={ele.img} />
          <div className={style.userDetail}>
            <span>{ele.name}</span>
            <br></br>
            <span>{ele.username}</span>
          </div>
          <Button
            onClick={() => handleToggleFollow(ele.id)}
            variant="contained"
            size="small"
            sx={{
            borderRadius: "2rem",
            }}
          >
          
            {ele.isFollowed?"Following":"Follow"}
          </Button>
        </div>
      

      ))}
      <hr/>
        <p className={style.showMore}>Show more</p>
    </div>
     
   
  );
}
