import React from 'react'
import ProjectData from './ProjectData'

function Projects() {
    return (
        <div id="projects" className="flex-col justify-center items-center bg-gray-100 px-5 py-3" >
            <h1 className="text-center text-use-blue font-bold text-lg lg:text-4xl uppercase ">Projects</h1>
            <div className="lg:p-5">
                <ProjectData/>
            </div>
            
        </div>
    )
}

export default Projects
