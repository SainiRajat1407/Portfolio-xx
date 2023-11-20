import React from 'react'
import data from '../../data/details.json'
import EducationCard from './educationCard.componet'
import './education.styles.scss'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Education = () => {
  return (
    <div className='education-container' id='Education'>
      <div className="education-heading">
        Education History
      </div>
      <div className="education-details-container">
        {data.education.map((item) => {
          return(
            <div key={item.id}><EducationCard item={item}/></div>
          )
        })}
        <ArrowForwardIcon className='middle-arrow'/>
      </div>
    </div>
  )
}

export default Education;