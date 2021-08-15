import React from 'react'
import Bar from './Bar'
import {SiCss3, SiHtml5, SiJavascript, SiReact, SiRedux, SiSpring, SiJava} from  'react-icons/si'
import {DiMysql} from  'react-icons/di'


function SkillsData() {
    const languages = [
        {
            name: "html",
            level: "80",
            icon: <SiHtml5 className="text-use-blue mt-1"/>
        },
        {
            name: "css",
            level: "80",
            icon: <SiCss3 className="text-use-blue mt-1"/>
        },
        {
            name: "javascript",
            level: "71",
            icon: <SiJavascript className="text-use-blue mt-1"/>
        },
        {
            name: "React",
            level: "69",
            icon: <SiReact className="text-use-blue mt-1"/>
        },
        {
            name: "redux",
            level: "58",
            icon: <SiRedux className="text-use-blue mt-1"/>
             
        },
        {
            name: "java",
            level: "65",
            icon: <SiJava className="text-use-blue mt-1"/>
        },
        {
            name: "sql",
            level: "40",
            icon: <DiMysql className="text-use-blue mt-1 "/>
        },
        {
            name: "Springboot",
            level: "30",
            icon: <SiSpring className="text-use-blue mt-1"/>
        },
    ]
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4  pt-2 place-items-center lg:p-3">
            {languages.map((language, index) => 
                <Bar key={index} value={language} />
                )}
        </div>
    )
}

export default SkillsData
