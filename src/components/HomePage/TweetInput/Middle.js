
import * as React from 'react';
import styles from './Middle.module.css'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import GifBoxIcon from '@mui/icons-material/GifBox';
import PollIcon from '@mui/icons-material/Poll';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from '@mui/material/Button';
import SplitButton from './Dropdown';




function Middle() {

    const [active, setactive] = React.useState("")
    return (
        <div className={styles.main_container}>

            <div className={styles.tabContainer}>
                <div className={styles.tabItem}>
                    <span className={active === 'for you' ? styles.active : undefined} onClick={() => setactive("for you")}>For You</span>
                </div>
                <div className={styles.tabItem} onClick={() => setactive("following")}>
                    <span className={active === 'following' ? styles.active : undefined}  >
                        Following
                    </span>
                </div>
            </div>
            <hr></hr>
            <div className={styles.profile}>
                <Stack direction="row" spacing={2}>
                    <Avatar style={{height:"65px",width:"65px",marginLeft:"10px"}} className={styles.image_avatar} alt="Remy Sharp" src="https://w0.peakpx.com/wallpaper/100/128/HD-wallpaper-don-2-bollywood-movie-srk-thumbnail.jpg" />
                    <SplitButton style = {{height:"100px"}}  className={styles.drop}/>
                    <input
                    type='text'
                    placeholder='What is Happening?!'
                    className={styles.input_text}
                    ></input>
                </Stack>


            </div>
            <div className={styles.allIcon}>
                <PermMediaIcon />
                <GifBoxIcon />
                <PollIcon />
                <SentimentSatisfiedAltIcon />
                <PendingActionsIcon />
                <LocationOnIcon />
                <Stack spacing={2} direction="row">
                    <Button  className={styles.tweet_btn} variant="contained">Tweet</Button>
                </Stack>

            </div>

        </div>
    )
}

export default Middle