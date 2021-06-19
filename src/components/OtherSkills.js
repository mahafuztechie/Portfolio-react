import React from 'react'

function OtherSkills({image, name}) {
    return (
        <div className="text-use-blue text-lg font-semibold flex flex-col items-center space-y-2">
            <img className="w-10 " src={image} alt="" />
            <h3>{name}</h3>
        </div>
    )
}

export default OtherSkills
