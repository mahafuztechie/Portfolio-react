import React from 'react'

function OtherSkills({image, name}) {
    return (
        <div className="hidden text-use-blue text-lg font-semibold lg:flex flex-col items-center space-y-2">
            <img className="w-10 border-2 border-use-yellow p-1 rounded-full " src={image} alt="" />
            <h3>{name}</h3>
        </div>
    )
}

export default OtherSkills