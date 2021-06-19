import React from 'react'

function Interests({title, content}) {
    return (
        <div className="space-y-1 pb-2">
            <h2 className="font-semibold text-sm lg:text-lg">{title}</h2>
            <p className="text-use-yellow text-xs font-extralight">{content}</p>
        </div>
    )
}

export default Interests
