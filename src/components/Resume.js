import React from 'react'
import SkillsData from './SkillsData'
import Interests from './Interests'
import Education from './Education'
import firebaseimg from "../images/firebase.png"
import nextimg from "../images/next.png"
import bootstrapimg from "../images/bootstrap.png"
import OtherSkills from './OtherSkills'
import Fade from 'react-reveal/Fade';



function Resume() {
    return (
        <div id="resume" className="text-gray-300 lg:h-screen w-screen px-4 lg:px-10 pb-4 lg:pb-5 bg-use-blue">
            <h1 className=" text-use-yellow text-center lg:py-1 font-bold text-lg lg:text-4xl">RESUME</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 h-full">
                <Fade left>
                <div className="text-xs md:text-xl  bg-yellow-100 bg-opacity-30 rounded-lg pb-2">
                    <h1 className="text-use-blue p-2 lg:p-4 text-lg lg:text-xl font-bold"><i class="fas fa-graduation-cap text-use-yellow mr-3"></i> Education</h1>
                    <div className="flex flex-col space-y-4 lg:space-y-8 font-medium pt-2 lg:mt-2 px-4">
                       <Education college="Teachers Academy Degree College" year="2015-2018"  batch="Bachelor of Computer Apllications (B.C.A)"/>
                       <Education college="Quwathul Islam Pre-University College" year="2013-2015"/>
                       <Education college="Divya Shanthi high school" year="2000-2013"/>
                    </div> 
                </div>
                </Fade>
                <Fade right>
                <div className=" bg-yellow-100 bg-opacity-30 rounded-lg">
                    <h1 className="text-use-blue p-2 lg:p-4 text-lg  lg:text-xl font-bold"><i class="fas fa-palette text-use-yellow mr-3"></i>Interests</h1>
                    <div className="flex flex-col space-y-6 mt-2 px-4">
                       <Interests title="Browsing" content="Browsing helps me in exploring techologies & gain knowledge  & keeps me updated with what is happening around"/>
                       <Interests title="" content=""/>
                       <Interests title="Gaming" content="I like to challenge my reflexes a lot while competing in cricket games & moba games, pushing the rank and having interactive gaming sessions excites me the most.
"/>
                    </div>
                </div>
                </Fade>
                <Fade bottom>
                <div className=" bg-yellow-100 bg-opacity-30 h-64 rounded-lg lg:col-span-2 lg:mb-5">
                    <h1 className="text-use-blue p-2 lg:p-4 text-lg lg:text-xl font-bold"><i class="fas fa-laptop-code text-use-yellow mr-3"></i>Skills</h1>
                        <SkillsData  />
                        <div className="hidden lg:flex items-center justify-center space-x-16 pt-4 border-t-4 border-use-blue">
                           <OtherSkills image={firebaseimg} name="Firebase"/>
                           <OtherSkills image={nextimg} name="NextJS"/>
                           <OtherSkills image={bootstrapimg} name="Bootstrap"/>
                           <OtherSkills image="https://symbols.getvecta.com/stencil_97/3_tailwind-css-icon.43c02f69bf.png" name="Tailwind"/>
                        </div>
                        <div className="lg:hidden flex justify-evenly text-sm font-semibold">
                            <ul className="space-y-1 flex flex-col items-center">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JAVASCRIPT</li>
                                <li>REACT</li>
                                <li>REDUX</li>
                                <li>JAVA</li>
                                <li>SQL</li>
                                <li>SPRINGBOOT</li>
                            </ul> 
                            <div className="border-r border-use-blue"></div> 
                            <ul className="space-y-1 flex flex-col items-center justify-center text-use-yellow font-light">
                                <li>FIREBASE</li>
                                <li>NEXTJS</li>
                                <li>BOOTSTRAP</li>
                                <li>TAILWIND</li>
                            </ul>
                        </div>
                </div>
                </Fade>
            </div>
        </div>

        

















    )
}

export default Resume
