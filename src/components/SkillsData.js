import React from 'react'
import Bar from './Bar'
import { cssIcon, htmlIcon, javaIcon, javascriptIcon, reactIcon, sqlIcon } from './Skillicons'

function SkillsData() {
    const languages = [
        {
            name: "html",
            level: "80",
            icon: htmlIcon
        },
        {
            name: "css",
            level: "80",
            icon: cssIcon
        },
        {
            name: "javascript",
            level: "60",
            icon: javascriptIcon
        },
        {
            name: "React",
            level: "64",
            icon: reactIcon
        },
        {
            name: "redux",
            level: "68",
            
            
        },
        {
            name: "java",
            level: "66",
            icon: javaIcon
        },
        {
            name: "sql",
            level: "55",
            icon: sqlIcon
        },
        {
            name: "Springboot",
            level: "40"
        },
    ]
    return (
        <div className="hidden lg:flex lg:space-x-10 items-start p-3 text-black">
            {languages.map(language => 
                <Bar className="" value={language} />
                )}
        </div>
    )
}

export default SkillsData
