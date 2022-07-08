import React from 'react'
import ReactPlayer from 'react-player'
import video from '../assets/video.mp4'

function Video() {
  return (
    <div style={{width: "100%"}}>
      <div style={{margin: "0 auto", width: "640px"}}>
        {/* <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /> */}
        <ReactPlayer
            url= {video}
            controls = {true}
            />
      </div>
    </div>
  );
}

export default Video;