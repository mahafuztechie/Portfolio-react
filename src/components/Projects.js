import React from 'react'
import { Link } from 'react-router-dom'
import ProjectData from './ProjectData'
import {FaArrowRight} from "react-icons/fa"

function Projects() {
    return (
        <div id="projects" className="flex-col justify-center items-center bg-gray-100 px-5 py-3 mt-2" >
            <h1 className="text-center text-use-blue font-bold text-lg lg:text-4xl uppercase ">Projects</h1>
            <div className="lg:p-5 mt-3">
                <ProjectData sliceNum="6"/>
                <div className="text-center p-5">
                    <Link to="/allprojects" className="px-2 py-1 shadow-xl transform transition duration-200 ease-in-out hover:scale-105 cursor-pointer text-white text-center m-2 bg-use-blue rounded-lg hover:no-underline" >more <FaArrowRight className="inline text-sm"/></Link>
                </div>
            </div>
           
            
        </div>
    )
}

export default Projects
