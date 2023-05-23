import React, {useState} from 'react'
import slider1 from '../assets/images/banner.png'
import slider2 from '../assets/images/banner1.png'
import slider3 from '../assets/images/banner2.png'

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  setTimeout(() => {
    currentIndex === slides.length - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1)
  }, 4000)

  const slides = [
    {
      url: slider1,
      alt: 'fitnes-foto',
    },
    {
      url: slider2,
      alt: 'fitnes-foto1',
    },
    {
      url: slider3,
      alt: 'fitnes-foto2',
    },
  ]

  return (
    <div className='slider'>
      <img src={slides[currentIndex].url} alt={slides[currentIndex].alt} />
    </div>
  )
}

export default Slider
