import React, {useContext, useState} from 'react'
import {DataContext} from '../App'
import ExerciseCard from './ExerciseCard'

const Pagination = () => {
  const {filteredExercise} = useContext(DataContext)
  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 12
  const numberOfPages = Math.ceil(filteredExercise.length / exercisesPerPage)

  const renderButtons = () =>
    Array.from({length: numberOfPages}).map((element, index) => (
      <button className='pagination-button' key={index + 1} onClick={() => setCurrentPage(index + 1)} style={currentPage === index + 1 ? {backgroundColor: 'var(--mainColor)'} : null}>
        {index + 1}
      </button>
    ))

  const startIndex = (currentPage - 1) * exercisesPerPage
  const endIndex = startIndex + exercisesPerPage
  const exercisesOnPage = filteredExercise.slice(startIndex, endIndex)
  return (
    <>
      <div className='pagination-container'>
        {exercisesOnPage?.map((element, index) => (
          <ExerciseCard element={element} key={index} />
        ))}
      </div>
      <span className='see-more'>{filteredExercise && numberOfPages > 1 && 'Show more exercise'}</span>
      <div className='pagination-btns'>{filteredExercise && numberOfPages > 1 && renderButtons()}</div>
    </>
  )
}

export default Pagination
