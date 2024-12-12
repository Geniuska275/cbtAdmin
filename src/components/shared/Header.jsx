import React from 'react'
import { FaRegUser } from 'react-icons/fa'
import { TiArrowSortedDown } from "react-icons/ti";

function Header() {
  return (
    <div className='bg-white py-2 flex  justify-between items-center shadow-xl'>
      <h1 className='rounded-full w-10 h-10 bg-gray-300 shadow-lg ml-4'>
        
      </h1>
      <div>
      <div className='flex gap-2 px-4 py-3 items-center '>
                <FaRegUser/>
                <h1>Clemson Taiwo</h1>
                <TiArrowSortedDown/>
            </div>

      </div>
    </div>
  )
}

export default Header