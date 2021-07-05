import React from 'react'

function About() {
    return (
        <div id="about" className="overflow-hidden lg:h-screen w-screen flex flex-col items-center border-t border-2 mt-5 p-2">
            <h1 className=" text-use-blue lg:mt-5 font-bold text-lg lg:text-4xl">About Me</h1>
            <div className="md:flex justify-center items-center space-x-4 lg:space-x-6 mt-2
              lg:px-10 lg:px-15 pb-5 lg:mt-5  rounded-lg lg:rounded-2xl ">
                <div className="hidden lg:flex items-center lg:mr-6 w-25">
                    <img className="rounded-xl bg-transparent  h-80" 
                    src="/images/about-pic.jpg" alt="" />

                </div>
                <div className="text-md bg-gray-100 lg:text-base shadow-xl flex flex-col lg:space-x-10 lg:space-y-20 space-y-10 mt-3 p-4 border lg:border-2 rounded-2xl">
                    <p>Front end web developer with knowledge of React with redux & Nextjs, along with a knack of building applications with utmost efficiency. Strong professional with a BCA willing to be an asset for an organization.</p>
                    <ul className="space-y-6 flex flex-col pl-2">
                        <li className="text-sm lg:text-base list-disc list-outside text-yellow-600 font-bold ">Responsive Web Development</li>
                        <li className="text-sm lg:text-base list-disc list-outside text-yellow-600 font-bold ">Interactive Front End as per the Design</li>
                        <li className="text-sm lg:text-base list-disc list-outside text-yellow-600 font-bold ">React & NextJS</li>
                        <li className="text-sm lg:text-base list-disc list-outside text-yellow-600 font-bold ">Redux for State Management</li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default About
