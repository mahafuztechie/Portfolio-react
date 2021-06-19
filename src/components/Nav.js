import React, { useState } from 'react'
import {MenuIcon, XIcon,} from "@heroicons/react/solid"
import { Link } from "react-scroll"

function Nav() {
    const [menu, setmenu] = useState(false)
   const hideNavSlide = () => {
       

   }
   
    return (
               <div className="absolute flex lg:justify-around p-3 justify-between w-screen top:2">
            <div>
                <h1 className=" text-2xl lg:text-4xl text-gray-100 text-opacity-70 font-extrabold">MA</h1>
            </div>
            <div className="flex space-x-6">
                
                {!menu && <ul className="hidden text-white lg:flex text-xs space-x-4 uppercase pt-3 lg:text-lg lg:space-x-12">
                <li className="active hover:cursor cursor-pointer
                text-use-yellow"><Link to="home" smooth={true} duration={1000}>Home</Link></li>
                <li className="hover:cursor cursor-pointer
                hover:text-use-yellow"><Link to="about" smooth={true} duration={1000}>About</Link></li>
                <li className="hover:cursor cursor-pointer
                hover:text-use-yellow"><Link to="resume" smooth={true} duration={1000}>Resume</Link></li>
                 <li className="hover:cursor cursor-pointer
                hover:text-use-yellow"><Link to="projects" smooth={true} duration={1000}>Projects</Link></li>
                <li className="hover:cursor cursor-pointer
                 w-28 text-center hover:text-use-yellow text-bold list-de"><a>Contact</a></li>
                </ul>  }
            {!menu && <MenuIcon onClick={() => setmenu(true)} className=" w-8 text-use-yellow lg:hidden cursor-pointer mr-2"/>}
            {menu && <XIcon onClick={() => setmenu(false)} className=" w-8 text-use-yellow lg:hidden cursor-pointer mt-1"/>}
            </div>
          
             {menu && <ul onClick={() => setmenu(false)} id="navslide" className="z-10 absolute flex flex-col items-center justify-around text-base 
                uppercase w-screen h-screen bg-teal-500 top-0 right-0
                opacity-100">
                        {/* <li  className=" hover:cursor cursor-pointer
                    text-teal-900"><Link to="home" smooth={true} duration={1000}>Home</Link></li> */}
                        <li  className=" hover:cursor cursor-pointer
                    text-teal-900"><Link to="about" smooth={true} duration={1000}>About</Link></li>
                        <li className=" hover:cursor cursor-pointer
                    text-teal-900"><Link to="resume" smooth={true} duration={1000}>Resume</Link></li>
                        <li className=" hover:cursor cursor-pointer
                    text-teal-900"><a>ContactMe</a></li>
                </ul>}
        </div>
        
    
     
    )
}

export default Nav
