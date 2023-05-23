import React, {useEffect, useState, useContext} from 'react'
import {useParams} from 'react-router-dom'
import {fetchURL} from '../../utils/fetchURL'
import Detail from '../Detail'
import ExerciseVod from '../ExerciseVod'
import '../exercise-detail.css'
import {YouTubeOptions, DBoptions} from '../../utils/fetchURL'
import {DataContext} from '../../App'
import Pagination from '../Pagination'

const ExerciseDetail = () => {
  const {exercise, filteredExercise, setFilteredExercise} = useContext(DataContext)
  const [exerciseData, setExerciseData] = useState(null)
  const {id} = useParams()
  const [exerciseVideo, setExerciseVideo] = useState(null)

  async function fetchDetailData(url, options, setList, LocalStorageKey) {
    const data = await fetchURL(url, options)
    if (LocalStorageKey) localStorage.setItem(LocalStorageKey, JSON.stringify(data))
    setList(data)
  }

  useEffect(() => {
    const lcexercise = JSON.parse(window.localStorage.getItem('LcExerciseData'))
    if (Array.isArray(exercise)) {
      const exerciseId = exercise.filter((element) => element.id === id)[0]
      setExerciseData(exerciseId)
    } else {
      lcexercise ? setExerciseData(lcexercise) : fetchDetailData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, DBoptions, setExerciseData, 'LcExerciseData')
    }
  }, [id])

  useEffect(() => {
    if (exerciseData) {
      const newList = exercise?.filter((element) => element.target.toLowerCase().includes(exerciseData.target)).slice(0, 6)
      setFilteredExercise(newList)
      fetchDetailData(`https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseData.name}&hl=en&type=v&sort=r`, YouTubeOptions, setExerciseVideo, null)
    }
  }, [exerciseData])

  return (
    <>
      {window.scrollTo(0, 0)}
      <section id='detail'>{exerciseData && <Detail detailData={exerciseData} />}</section>
      <section id='exercises'>{exerciseVideo && <ExerciseVod videoData={exerciseVideo} name={exerciseData.name} />}</section>
      <h2 className='similar-video'>Try out some Similar Exercises</h2>
      {filteredExercise && <Pagination />}
    </>
  )
}

export default ExerciseDetail
