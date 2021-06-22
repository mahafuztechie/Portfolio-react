import React from 'react'


function Project({image, github, live, name, title, desc}) {

    return (
        <div className="flex flex-col justify-between space-y-6 bg-use-yellow hover:bg-use-blue hover:bg-opacity-10 bg-opacity-30 rounded-2xl overflow-hidden border hover:shadow-xl ">
            <img src={image} alt={`${name}-pic`}
            className=" h-24 w-full " />
            <div className="flex-col items-center justify-center pb-2 px-2 space-y-3">
                <h2 className='text-center text-use-blue font-light text-lg'>{name}</h2>
                <h3 className='text-center font-semibold text-md'>{title}</h3>
                <div className="text-center text-sm">
                    <p>{desc}</p>
                </div>
            </div>
            <div className="flex justify-between p-2">
                    <a href={github} rel="noreferrer" target="_blank"><i className="text-xl text-use-blue hover:text-amber-600  w-7 h-7 transition duration-200 ease-in-out transform hover:scale-125 text-center rounded-full fab fa-github"></i></a>
                    {live && <a href={live} rel="noreferrer" target="_blank" className="hover:no-underline uppercase text-center text-sm text-use-blue rounded-xl px-2 py-1 hover:bg-red-600 hover:text-white">live</a>}
            </div>
        </div>
    )
}

export default Project;