import React from 'react'

const VideoCard = ({info}) => {
    const {snippet, statistics}= info;
    const {channelTitle,title,thumbnails} = snippet;
  return (
    <div className='p-2 m-2 shadow-lg w-80'>
        <img src={thumbnails.medium.url} className='rounded-lg'/>
        <ul>
            <li className='font-bold'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount}</li>
        </ul>
    </div>
  )
}

// higher component function
export const AdVideoCard = ({info}) => {
  return(
    <div className='p-1 m-1 border border-red'>
      <VideoCard info ={info}/>
    </div>
  )
}

export default VideoCard