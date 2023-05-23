import React, {createContext, useState} from 'react'
import {Route, Routes} from 'react-router-dom'
import './app.css'
import Navbar from './components/Navbar'
import ExerciseDetail from './components/Pages/ExerciseDetail'
import Homepage from './components/Pages/Homepage'
export const DataContext = createContext()

const App = () => {
  const [exercise, setExercise] = useState(null)
  const [bodyPart, setBodyPart] = useState(null)
  const [filteredExercise, setFilteredExercise] = useState(null)

  return (
    <div className='container'>
      <Navbar />
      <DataContext.Provider value={{setBodyPart, bodyPart, setExercise, exercise, setFilteredExercise, filteredExercise}}>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/exercise/:id' element={<ExerciseDetail />} />
        </Routes>
      </DataContext.Provider>
    </div>
  )
}

export default App
