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
            level: "45",
            icon: sqlIcon
        },
        {
            name: "Springboot",
            level: "40"
        },
    ]
    return (
        <div className="hidden lg:grid grid-cols-4 space-y-2 place-items-center p-3">
            {languages.map(language => 
                <Bar value={language} />
                )}
        </div>
    )
}

export default SkillsData
