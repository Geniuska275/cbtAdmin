import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
function Layout() {
  return (
    <div>
      <Header/>

    <div className='flex flex-row bg-[#E8F4FF] h-[748px] w-screen overflow-hidden' >
     <Sidebar/>
     <div>
      <div className='flex flex-row justify-between items-center mt-3 '>
        <h1 className='font-bold text-2xl'>Users</h1>
        <button className='px-3 py-2 bg-[#7EC5FF] text-white font-bold shadow'>Add New Users</button>
      </div>


     </div>
      <div>{Outlet}</div>
    </div>
    </div>
  )
}

export default Layout