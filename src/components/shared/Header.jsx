import React from 'react'
import { FaRegUser } from 'react-icons/fa'
import { TiArrowSortedDown } from "react-icons/ti";
import image from "./cbt.png"
function Header() {
  return (
    <div className='bg-white py-2 flex  justify-between items-center shadow-xl'>
      <img src={image} className=' w-[40px] h-[40px] bg-gray-300 shadow-lg ml-4'/>
        
      
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