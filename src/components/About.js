import React from 'react'

function About() {
    return (
        <div id="about" className="overflow-hidden lg:h-screen w-screen flex flex-col items-center border-t border-2 mt-5 p-2">
            <h1 className=" text-use-blue lg:mt-5 font-bold text-lg lg:text-4xl">About Me</h1>
            <div className="md:flex justify-center space-x-4 lg:space-x-6 mt-2
              lg:px-10 lg:px-15 pb-5 lg:mt-5  rounded-lg lg:rounded-2xl ">
                <div className="hidden lg:flex items-center lg:mr-6 w-auto">
                    <img className="rounded shadow-2xl
                    bg-transparent" 
                    src="https://spherengopune.org/Synapse2021N/wp-content/uploads/2014/10/speaker-3.jpg" alt="" />

                </div>
                <div className="text-md bg-gray-100 lg:text-base flex flex-col lg:space-x-10 lg:space-y-20 space-y-10 mt-3 p-4 border lg:border-2 rounded-2xl">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui deserunt quis atque consectetur quaerat? Ad, ea quidem. Laborum deserunt temporibus laudantium quis quisquam in consequatur ad molestiae labore, quae facere?</p>
                    <ul className="space-y-6 flex flex-col pl-2">
                        <li className="text-sm lg:text-base list-disc list-outside text-yellow-600 font-bold ">Responsive Web Development</li>
                        <li className="text-sm lg:text-base list-disc list-outside text-yellow-600 font-bold ">Interactive Front End as per the Design</li>
                        <li className="text-sm lg:text-base list-disc list-outside text-yellow-600 font-bold ">React</li>
                        <li className="text-sm lg:text-base list-disc list-outside text-yellow-600 font-bold ">Redux for State Management</li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default About
