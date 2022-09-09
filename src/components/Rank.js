import React from 'react'

function Rank({name, point}) {
    return (
        <div className='w-full flex justify-between bg-slate-800 p-2 rounded-xl'>
            <p>{name}</p>
            <p>{point}</p>
        </div>
    )
}

export default Rank