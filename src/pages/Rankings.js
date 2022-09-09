import React from 'react'
import BodyContainer from '../components/bodyContainer'
import Rank from '../components/Rank'
import {UseGetLast, UseGetTop} from '../firebase/UseGetRankings'

function Rankings() {
  const lastWhores = UseGetLast()
  const topWhores = UseGetTop()

  if (!topWhores || !lastWhores) return 'loading'
  return (
    <BodyContainer>
      <div className='flex flex-col items-center gap-6 pt-16 md:pt-0 md:flex-row md:justify-around w-full'>
        <div className='bg-black text-white p-4 w-96 rounded-xl md:w-2/6'>
          <p className='text-center text-2xl mb-3 text-yellow-300'>Top 5</p>
          <div className='flex flex-col gap-3'>
            {topWhores.map(whore=><Rank id={whore.id} name={whore.name} point={whore.point} />)}
          </div>
        </div>
        <div className='bg-black text-white p-4 w-96 rounded-xl md:w-2/6'>
          <p className='text-center text-2xl mb-3 text-red-500'>Last 5</p>
          <div className='flex flex-col gap-3'>
            {lastWhores.map(whore=><Rank id={whore.id} name={whore.name} point={whore.point} />)}
          </div>
        </div>
      </div>
    </BodyContainer>
  )
}

export default Rankings