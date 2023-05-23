import React, {useEffect, useState, useContext} from 'react'
import './searchBar.css'
import {fetchURL} from '../utils/fetchURL'
import HorizontalSlider from './HorizontalSlider'
import {DataContext} from '../App'
import {DBoptions} from '../utils/fetchURL'

const SearchBar = () => {
  const {exercise, setExercise, setFilteredExercise} = useContext(DataContext)
  const [bodyPartsList, setBodyPartsList] = useState(null)
  const [search, setSearch] = useState('')

  async function fetchData(url, options, setList, LocalStorageKey) {
    const data = await fetchURL(url, options)
    if (Array.isArray(data)) {
      if (LocalStorageKey) localStorage.setItem(LocalStorageKey, JSON.stringify(data))
      setList(data)
    }
  }

  const handleClick = () => {
    if (Array.isArray(exercise)) {
      const newList = exercise?.filter((element) => element.name.toLowerCase().includes(search) || element.target.toLowerCase().includes(search) || element.bodyPart.toLowerCase().includes(search) || element.equipment.toLowerCase().includes(search))
      setFilteredExercise(newList)
    }
    setSearch('')
  }

  useEffect(() => {
    const Bpart = JSON.parse(window.localStorage.getItem('LcBodyPartLIst'))
    Bpart ? setBodyPartsList(Bpart) : fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', DBoptions, setBodyPartsList, 'LcBodyPartLIst')

    const exerciseList = JSON.parse(window.localStorage.getItem('LcExerciseList'))
    exerciseList ? setExercise(exerciseList) : fetchData('https://exercisedb.p.rapidapi.com/exercises', DBoptions, setExercise, 'LcExerciseList')
  }, [])

  return (
    <section id='search-bar'>
      <h2 className='search-title'>
        Awesome Exercises You
        <br />
        Should Know
      </h2>
      <div className='search-engine'>
        <input
          id='searchInput'
          onChange={(event) => {
            setSearch(event.target.value.toLowerCase())
          }}
          value={search}
          placeholder='Search for Exercise'
          type='text'
        />
        <button
          className='search-btn'
          onClick={() => {
            handleClick()
          }}
        >
          Search
        </button>
      </div>
      <div className='body-parts-list'>
        {' '}
        <HorizontalSlider parts={bodyPartsList} />
      </div>
    </section>
  )
}

export default SearchBar
