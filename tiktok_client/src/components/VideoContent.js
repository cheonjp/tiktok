import React,{useState} from 'react';
import '../videoContent.css'
import Avatar from '@mui/material/Avatar'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ReplyIcon from '@mui/icons-material/Reply';
import AddIcon from '@mui/icons-material/Add';

function VideoContent() {
    const [play, setPlay]= useState(true)
    const test = (e)=>{
        e.target.pause()
        
    }
    const test2 = (e)=>{
        setPlay(!play)
        console.log(play)
        play ? e.target.play() : e.target.pause()
    }
  return <div onWheel={(e)=>{test(e)}} onClick={(e)=> test2(e)} className="videoContent">
      <div className="videoBox">
          <video src="https://v16-webapp.tiktok.com/21f373767b41e26aae316a3c2844599b/61f0d294/video/tos/useast2a/tos-useast2a-pve-0068/36f1324daa454d8aafe9a13b79e7a816/?a=1988&br=1990&bt=995&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-33Hnz7ThFUlGlXq&l=20220125224803010223123014186EECF9&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzpkb2RrZm9yNTMzNzczM0ApOjc0NDM2Z2Q4N2k7PDVoO2dgMm1sam8wLWhgLS1kMTZzcy8xXl9jMzZiNi5jNl4wMjY6Yw%3D%3D&vl=&vr="></video>
          <div className="videoBox__rightIconBox">
              <div className="avatarBox">
                <Avatar className="userAvatar" src="https://cdn.pixabay.com/photo/2016/01/10/22/07/woman-1132617_1280.jpg" />
                <AddIcon />
              </div>
              <div className="iconBox">
                <FavoriteIcon className="icon" />
                <div>721.3k</div>
              </div>
              <div className="iconBox">
                <ChatBubbleIcon className="icon" />
                <div>1281</div>
              </div>
              <div className="iconBox">
                <ReplyIcon className="icon" />
                <div>Share</div>
              </div>
          </div>
      </div>      
      <div className="videoBox">
          <video src="https://v16-webapp.tiktok.com/21f373767b41e26aae316a3c2844599b/61f0d294/video/tos/useast2a/tos-useast2a-pve-0068/36f1324daa454d8aafe9a13b79e7a816/?a=1988&br=1990&bt=995&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-33Hnz7ThFUlGlXq&l=20220125224803010223123014186EECF9&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzpkb2RrZm9yNTMzNzczM0ApOjc0NDM2Z2Q4N2k7PDVoO2dgMm1sam8wLWhgLS1kMTZzcy8xXl9jMzZiNi5jNl4wMjY6Yw%3D%3D&vl=&vr="></video>
          <div className="videoBox__rightIconBox">
              <div className="avatarBox">
                <Avatar className="userAvatar" src="https://cdn.pixabay.com/photo/2016/01/10/22/07/woman-1132617_1280.jpg" />
                
              </div>
              <div className="iconBox">
                <FavoriteIcon className="icon" />
                <div>721.3k</div>
              </div>
              <div className="iconBox">
                <ChatBubbleIcon className="icon" />
                <div>1281</div>
              </div>
              <div className="iconBox">
                <ReplyIcon className="icon" />
                <div>Share</div>
              </div>
          </div>
      </div>      
        
  </div>;
}

export default VideoContent;
