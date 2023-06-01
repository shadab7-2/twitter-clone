import { SingleFollow } from "./singleFollow/SingleFollow"
import styles from "./follow.module.css"


export function Follow(){
    const data1=[{
        id:1,
        img:"https://im.rediff.com/cricket/2023/jan/17kohli1.jpg",
        imgalt:"",
        account:"Virat Kohli",
        accountTag:"@imVkohli"

    },{
        id:2,
        img:"https://www.thestatesman.com/wp-content/uploads/2022/09/03_Merged.jpg",
        imgalt:"",
        account:"Narendra Modi",
        accountTag:"@narendramodi"

    },{
        id:3,
        img:"https://feeds.abplive.com/onecms/images/uploaded-images/2023/05/31/3b927f2044043a9f8647d131d10a2b711685537181855693_original.jpg?impolicy=abp_cdn&imwidth=650",
        imgalt:"",
        account:"Rahul Gandli",
        accountTag:"@RahulGandhi"
    }]
    return(
        <div className={styles.follow}>
            <strong className={styles.heading}>Who to Follow</strong>
            <br/>
            {data1.map((ele,index)=>{
                return(
                    <SingleFollow
                    key={index}
                    img={ele.img}
                    account={ele.account}
                    accountTag={ele.accountTag}
                    />
                )
            })}

        </div>
    )
}