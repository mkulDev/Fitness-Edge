import React from 'react'
import targetIcon from '../assets/icons/target.png'
import bodyIcon from '../assets/icons/body-part.png'
import equipmentIcon from '../assets/icons/equipment.png'

const Detail = ({detailData}) => {
  const {bodyPart, equipment, target, name, gifUrl} = detailData
  return (
    <div className='detail-container'>
      <img src={gifUrl} alt={name + '-exercise'} className='exercise-gif' />
      <div className='exercise-info'>
        <h2>{name?.toUpperCase()}</h2>
        <p className='exercise-description'>
          Exercise can help prevent excess weight gain or help maintain weight loss. When you engage in physical activity, you burn calories. The more intense the activity, the more calories you burn.
          <br />
          "Incorporating regular {name} into your diverse workout regimen not only enhances your overall fitness, but also effectively targets and engages a wide range of {target}, allowing you to efficiently strengthen, tone, and sculpt those
          muscles while achieving optimal results, all with the flexibility of using {equipment} tailored to your specific needs and preferences."
        </p>
        <div className='icons-bar'>
          <img src={bodyIcon} alt='icon' />
          <p>
            <strong>Body Part: </strong>
            {bodyPart}
          </p>
          <img src={targetIcon} alt='icon' />
          <p>
            <strong>Target Muscels: </strong>
            {target}
          </p>
          <img src={equipmentIcon} alt='icon' />
          <p>
            <strong>Equipment: </strong>
            {equipment}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Detail
