import React, { useRef } from 'react'
import BodyPart from './BodyPart'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

const HorizontalSlider = ({ parts }) => {
  const sliderElement = useRef(null)
  function handleClick(direction) {
    direction === 'left' ? (sliderElement.current.scrollLeft += -300) : (sliderElement.current.scrollLeft += 300)
  }

  return (
    <div className='horizontal-slider'>
      <BsFillArrowLeftCircleFill
        onClick={() => {
          handleClick('left')
        }}
      />
      <div
        className='body-part-slider'
        ref={sliderElement}
      >
        {parts?.map((item, index) => (
          <div key={index}>
            <BodyPart part={item} />
          </div>
        ))}
      </div>
      <BsFillArrowRightCircleFill
        onClick={() => {
          handleClick('right')
        }}
      />
    </div>
  )
}

export default HorizontalSlider
