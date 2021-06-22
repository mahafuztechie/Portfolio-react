import React from 'react'
import Project from './Project'

function ProjectData() {
    const projectData = [
        {
            name:"Amazon-clone",
            image: "https://www.doorwaysva.org/wp-content/uploads/2019/06/amazon-logo.png",
            title: "Technologies used: ReactJS, NextJS, Redux, Firebase & Tailwind-css",
            desc: "Amazon-clone website where a user can login with Google auth & buy products online with stripe payment system integration. Firebase used to store & maintain data",
            github: "https://github.com/mahafuztechie/amzn-clone",
            live: "https://amazonclone-theta.vercel.app"
        },
        {
            name:"Facebook-clone",
            image: "https://www.startuplagos.co/wp-content/uploads/2018/05/facebooklogo-3.jpg",
            title: "Technologies used: ReactJS, NextJS, Firebase & Tailwind-css",
            desc: "A simple Facebook clone where a user can login with facebook auth & share a post about whats going in life. firebase, to store data",
            github: "https://github.com/mahafuztechie/fbclone",
            live: "https://fbclone-blush.vercel.app"
        },
        {
            name:"Tesla-clone",
            image: "https://trak.in/wp-content/uploads/2017/02/Tesla-Logo.jpg",
            title: "Technologies used: ReactJS & Firebase",
            desc: "Tesla clone with a beautiful landing page & product page with firebase-authentication ",
            github: "https://github.com/mahafuztechie/teslaclone",
            live: "https://teslaclone-44b04.web.app"
        },
        {
            name:"Portfolio",
            image: "https://themanofletters.files.wordpress.com/2015/03/wpdevshed-portfolio.jpg",
            title: "Technologies Used: ReactJS & Tailwind-css",
            desc: "A Personal Portfolio website to showcase all my details and projects at one place.",
            github: "https://github.com/mahafuztechie/Portfolio-react",
            
        },
        {
            name:"Notes-app",
            image: "https://i1.wp.com/www.noticiber.com/wp-content/uploads/logo-app-de-notas.png?fit=730%2C381&ssl=1",
            title: "Technologies used: ReactJS & Tailwind-css",
            desc: "A simple notes-app where u can maintain all your notes ",
            github: "https://github.com/mahafuztechie/Notes-app-react",
            
        }
    ]
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectData.map(({image, github, live, name, title, desc})=> 
            <Project image={image} github={github} live={live} name={name} title={title} desc={desc}/>
            )}
        </div>
    )
}

export default ProjectData
