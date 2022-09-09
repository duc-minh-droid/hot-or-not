import React from 'react'

function BodyContainer({children}) {
  return (
    <div className='w-full h-[calc(100vh-4rem)] flex justify-center items-center'>
        {children}
    </div>
  )
}

export default BodyContainer