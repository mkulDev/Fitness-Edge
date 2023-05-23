import React from 'react'

const ExerciseVod = ({videoData, name}) => {
  return (
    <div className='video-container'>
      <h2>
        Watch <span>{name}</span> exercise example video
      </h2>
      {videoData?.contents.slice(0, 4).map((element, index) => {
        return (
          <a href={`https://www.youtube.com/watch?v=${element.video.videoId}`} target='blank' key={index}>
            <div className='video-card'>
              <img src={element.video.thumbnails[0].url} alt='video-card' />
              <h4>{element.video.title}</h4>
              <p>{element.video.channelName}</p>
            </div>
          </a>
        )
      })}
    </div>
  )
}

export default ExerciseVod
