import React from 'react'


function Project({image, github, live, name, desc}) {

    return (
        <div className="flex flex-col space-y-6 bg-use-yellow bg-opacity-40 rounded-2xl overflow-hidden hover:shadow-xl transition transform duration-200 ease-in-out hover:scale-105 ">
            <img src={image} alt="project-image"
            className=" h-24 w-full " />
            <div className="flex-col items-center justify-center pb-2 px-2 space-y-2">
                <h2 className='text-center font-semibold text-lg'>{name}</h2>
                <div className="text-center">
                    <p>{desc}</p>
                </div>
            </div>
            <div className="flex justify-between p-2">
                    <a href={github}><i className="text-xl text-use-blue hover:text-amber-600  w-7 h-7 transition duration-200 ease-in-out transform hover:scale-125 text-center rounded-full fab fa-github"></i></a>
                    {live && <a href={live} rel="noopener" target="_blank" className="hover:no-underline hover:text-use-blue uppercase text-center text-use-blue rounded-md p-1">live</a>}
            </div>
        </div>
    )
}

export default Project;