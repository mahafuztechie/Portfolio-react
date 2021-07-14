import React from 'react'
import Project from './Project'

function ProjectData() {
    const projectData = [
        {
            name:"GoogleDocs-clone",
            image: "/images/google-docs-image.jpg",
            title: "Technologies used: ReactJS, NextJS, Firebase & Tailwind-css",
            desc: "GoogleDocs-clone website where a user can login with Google & create & maintain documents with a Rich TextEditor. Firebase used to store & maintain data",
            github: "https://github.com/mahafuztechie/google-docs-clone",
            live: "https://google-docs-clone-sigma.vercel.app/",
            newproj: "new"
        },
        {
            name:"Amazon-clone",
            image: "/images/amazon_image.jpg",
            title: "Technologies used: ReactJS, NextJS, Redux, Firebase & Tailwind-css",
            desc: "Amazon-clone website where a user can login with Google & buy products online with stripe payment system integration. Firebase used to store & maintain data",
            github: "https://github.com/mahafuztechie/amzn-clone",
            live: "https://amazonclone-theta.vercel.app"
        },
        {
            name:"Hulu-clone",
            image: "/images/hulu-image.jpg",
            title: "Technologies used: ReactJS, NextJS & Tailwind-css",
            desc: "hulo clone where all movies & shows are fetched from tmdb api & are filtered & displayed according to category ",
            github: "https://github.com/mahafuztechie/hulu-clone",
            live: "https://hulu-clone-omega-five.vercel.app",
            newproj: "new"
        },
        {
            name:"Facebook-clone",
            image: "/images/facebook_image.png",
            title: "Technologies used: ReactJS, NextJS, Firebase & Tailwind-css",
            desc: "A simple Facebook clone where a user can login with facebook & share a post about whats going in life. firebase, to store data",
            github: "https://github.com/mahafuztechie/fbclone",
            live: "https://fbclone-blush.vercel.app"
        },
        {
            name:"Tesla-clone",
            image: "/images/tesla-image.jpg",
            title: "Technologies used: ReactJS & Firebase",
            desc: "Tesla clone with a beautiful landing page & product page with firebase-authentication ",
            github: "https://github.com/mahafuztechie/teslaclone",
            live: "https://teslaclone-44b04.web.app"
        },
        {
            name:"Portfolio",
            image: "/images/portfolio-image.jpg",
            title: "Technologies Used: ReactJS & Tailwind-css",
            desc: "A Personal Portfolio website to showcase all my details and projects at one place.",
            github: "https://github.com/mahafuztechie/Portfolio-react",
            
        },
        {
            name:"Notes-app",
            image: "/images/Notes-Images.jpg",
            title: "Technologies used: ReactJS & Tailwind-css",
            desc: "A simple notes-app where u can maintain all your notes ",
            github: "https://github.com/mahafuztechie/Notes-app-react",
            
        },
        

    ]
    return (
        <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectData.map(({image, github, live, name, title, desc, newproj}, index)=> 
            <Project key={index} image={image} github={github} live={live} name={name} title={title} desc={desc} newproj={newproj}/>
            )}
        </div>
    )
}

export default ProjectData
