import React from 'react'

function Bar({value: {name, level, icon}}) {
    const bar_width = `${level}%`
    return (
        <div className="w-25 h-8 bg-use-blue rounded-full text-white ">
            <div style={{width: bar_width}} className="flex bg-gradient-to-r from-use-yellow to-gray-500 h-8 rounded-full p-1">
                <span className="ml-2 text-sm">{icon}</span>
                <span className="ml-2 text-sm font-extralight capitalize">{name}</span>
                
            </div>
        </div>
    )
}

export default Bar
