import React from 'react'
import Project from './Project'

function ProjectData() {
    const projectData = [
        {
            name:"Amazon-clone",
            image: "https://www.doorwaysva.org/wp-content/uploads/2019/06/amazon-logo.png",
            desc: "lorem20",
            github: "abc",
            live: "https://amazonclone-theta.vercel.app"
        },
        {
            name:"Facebook-clone",
            image: "https://www.startuplagos.co/wp-content/uploads/2018/05/facebooklogo-3.jpg",
            desc: "lorem20",
            github: "abc",
            live: "xyz"
        },
        {
            name:"Tesla-clone",
            image: "https://trak.in/wp-content/uploads/2017/02/Tesla-Logo.jpg",
            desc: "lorem20",
            github: "abc",
            live: "xyz"
        },
        {
            name:"Portfolio",
            image: "abc",
            desc: "lorem20",
            github: "abc",
            
        },
        {
            name:"Notes-app",
            image: "abc",
            desc: "lorem20",
            github: "abc",
            
        }
    ]
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectData.map(({image, github, live, name, desc})=> 
            <Project image={image} github={github} live={live} name={name} desc={desc}/>
            )}
        </div>
    )
}

export default ProjectData
