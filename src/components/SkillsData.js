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
            level: "66",
            icon: reactIcon
        },
        {
            name: "redux",
            level: "68",
             
        },
        {
            name: "java",
            level: "65",
            icon: javaIcon
        },
        {
            name: "sql",
            level: "40",
            icon: sqlIcon
        },
        {
            name: "Springboot",
            level: "30"
        },
    ]
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:space-y-2 space-y-4 pt-2 place-items-center lg:p-3">
            {languages.map((language, index) => 
                <Bar key={index} value={language} />
                )}
        </div>
    )
}

export default SkillsData
