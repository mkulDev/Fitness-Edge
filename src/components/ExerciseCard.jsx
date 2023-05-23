import React from 'react'
import {Link} from 'react-router-dom'

const ExerciseCard = ({element}) => {
  return (
    <Link to={`/exercise/${element.id}`}>
      <div className='card'>
        <img src={element.gifUrl} alt={element.name} style={{pointerEvents: 'none'}} />
        <div className='info-grups'>
          <div>{element.bodyPart}</div>
          <div>{element.target}</div>
          <div>{element.equipment}</div>
        </div>
        <div className='exercise-title'>{element.name.toUpperCase()}</div>
      </div>
    </Link>
  )
}

export default ExerciseCard
