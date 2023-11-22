import React from 'react'
import './project.styles.scss'
import data from '../../data/details.json'
import MaterialProjectCard from './MaterialProjectCard.component'
import projectbackground from '../../asset/images/backgroundimages/projectsbackground.png'
import ScrollContext from '../../context/scroll/scrollContext'



const Project = () => {
    const scrollTracker = React.useContext(ScrollContext)
    const scrollY = scrollTracker[0];
    return (
        <div className="project-container" id='Project'>
            <div className="project-heading" style={{
                position: scrollY <= 2813 ? 'absolute' : "fixed",
                top: scrollY >= 2813 ? "155px" : ""
            }}>
                Projects
            </div>
            <div className="project-details-container" style={{
                position: scrollY <= 2813 ? 'absolute' : "fixed",
                top: scrollY >= 2813 ? "355px" : ""
            }}>
                {
                    data.projects.map((item) => {
                        return (
                            <div className='project-details-item' key={item.id}><MaterialProjectCard item={item} /></div>
                        )
                    })
                }
            </div>
            <img src={projectbackground} alt="projectBackground" className='project-background-container' style={{
                position: scrollY <= 2815 ? 'absolute' : "fixed",
                top: scrollY >= 2815 ? "78px" : ""
            }} />
        </div>
    )
}

export default Project;