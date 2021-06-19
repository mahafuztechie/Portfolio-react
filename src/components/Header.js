import React from 'react'

import Typewriter from "typewriter-effect"


function Header() {
    return (
        <div className=" flex flex-wrap-reverse items-center lg:flex justify-around space-x-8 mx-auto">
            <div className=" flex flex-col items-center lg:items-start lg:mt-32 py-10 ">
                <div className="flex text-white space-x-2 mb-2">
                    <a href=""><i className="text-xl text-use-blue hover:text-amber-600 bg-white w-7 h-7 shadow-xl transition duration-200 ease-in-out transform hover:scale-125 text-center rounded-full fab fa-github"></i></a>
                    <a href=""><i className="text-xl text-use-blue hover:text-amber-600 bg-white w-7 h-7 shadow-xl transition duration-200 ease-in-out transform hover:scale-125 text-center rounded-full fab fa-instagram"></i></a>
                    <a href=""><i className="text-xl text-use-blue hover:text-amber-600 bg-white w-7 h-7 shadow-xl transition duration-200 ease-in-out transform hover:scale-125 text-center rounded-full fab fa-facebook"></i></a>
                </div>
                <div className="flex flex-col items-center lg:items-start space-y-2 lg:space-y-5 ">
                    <h1 className=" text-base md:text-2xl lg:mt-4 font-bold text-gray-300">👋Hello, I'M <span className=" text-use-yellow font-extrabold">MAHAFUZ AHMED</span></h1>
                    <h2 className="text-xl lg:text-5xl text-gray-300
                      font-bold"><Typewriter options={{
                         autoStart:true,
                         loop:true,
                         delay:40,
                         strings:[
                             "I'M a Front-End Dev 💻",
                             "I'M a React dev 😉",
                             "Tech Enthusiast 🧡",
                         ]
                      
                    }}/>
                    </h2>
                    <p className="text-sm text-center lg:text-lg text-use-yellow font-extralight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, soluta.</p>
                </div>
                <div className="flex flex-col-wrap mb-5 sm:flex space-x-6 mt-6">
                    <button className="relative text-white capitalize text-center bg-transparent border-2 border-white
                     hover:border-use-yellow hover:shadow-2xl transform transition duration-200 ease-in-out hover:scale-110
                   h-8 w-28 md:h-12 md:w-40 rounded-full outline-none focus:outline-none">hire me</button>
                    <button className=" text-white capitalize text-center bg-opacity-70 bg-use-yellow
                    hover:shadow-2xl hover:text-black transform transition duration-200 ease-in-out hover:scale-110
                   h-8 w-28 md:h-12 md:w-40 rounded-full outline-none focus:outline-none">get resume</button>
                </div>
            </div>

            <div className="flex items-center justify-center md:flex-1 pt-5">
                <img className=" h-52 w-52 lg:h-80 lg:w-80 mr-4 lg:mr-6 lg:mt-6 rounded-full hover:shadow-2xl
                 bg-transparent transform duration-1000 hover:scale-105" 
                 src="https://spherengopune.org/Synapse2021N/wp-content/uploads/2014/10/speaker-3.jpg" alt="" />
            </div>
        </div>
    )
}

export default Header;