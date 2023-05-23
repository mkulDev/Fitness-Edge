import React, {useContext, useEffect} from 'react'
import {DataContext} from '../App'

const BodyPart = ({part}) => {
  const {bodyPart, setBodyPart, exercise, setFilteredExercise} = useContext(DataContext)

  useEffect(() => {
    setFilteredExercise(exercise?.filter((element) => element.bodyPart.toLowerCase().includes(bodyPart)))
  }, [bodyPart])

  return (
    <div
      className='part-card'
      onClick={() => {
        setBodyPart(part)
      }}
      style={bodyPart === part ? {color: 'var(--mainColor)', transform: 'scale(1.1)'} : null}
    >
      <img src={require(`../assets/images/muscles/${part}.png`)} alt='fitness-icon' />
      <span>{part}</span>
    </div>
  )
}

export default BodyPart
