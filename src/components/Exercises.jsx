import React, { useContext } from 'react'
import { DataContext } from '../App'
import Pagination from './Pagination'
import './exercises.css'
const Exercises = () => {
  const { filteredExercise } = useContext(DataContext)
  return (
    <section id='exercises'>
      <h3>
        Showing <span>Result</span>
      </h3>
      {!filteredExercise && <span>Please enter the exercise name, target muscle group, or used equipment.</span>}
      <div className='search-result'>{filteredExercise && <Pagination />}</div>
    </section>
  )
}

export default Exercises
