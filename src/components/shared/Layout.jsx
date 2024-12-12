import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
function Layout() {
  return (
    <div>
      <Header/>

    <div className='flex Flex-row bg-[#E8F4FF] h-[748px] w-screen overflow-hidden' >
     <Sidebar/>
     <div>

     </div>
      <div>{Outlet}</div>
    </div>
    </div>
  )
}

export default Layout