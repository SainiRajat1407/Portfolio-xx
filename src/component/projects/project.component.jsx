import React from 'react'
import './project.styles.scss'
import data from '../../data/details.json'
import MaterialProjectCard from './MaterialProjectCard.component'




 const Project = () => {
  return (
    <div className="project-container" id='Project'>
        <div className="project-heading">
            Projects 
        </div>
        <div className="project-details-container">
        {
            data.projects.map((item) => {
                return(
                    <div className='project-details-item' key={item.id}><MaterialProjectCard item={item} /></div>
                )
            })
         }
        </div>
    </div>
  )
}

export default Project;