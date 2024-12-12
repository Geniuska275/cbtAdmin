import { MdLogout } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { DASHBOARD_SIDEBAR_LINKS } from '../lib/constants';
import { Link, useLocation } from "react-router-dom";
import ClassNames from 'classnames';

function Sidebar() {
  return (
    <div className='flex flex-col bg-neutral-900 w-60 text-white '>
        <div className='flex-1 '>
            <div className='flex gap-2 px-4 py-3 items-center bg-black'>
                <FaRegUser/>
                <h1>Clemson Taiwo</h1>
            </div>
            <div className="mt-4">
                {DASHBOARD_SIDEBAR_LINKS.map((item)=>(
                    <SideBarLinks item={item} key={item}/>
                ))}
            </div>

        </div>
        <div>
            <div className='flex gap-3 px-4 py-3 items-center bg-black'>
                Logout
                <MdLogout/>
                </div>
    
        </div>




    </div>
  )
}

export default Sidebar
const LinkClass='flex items-center gap-2 font-light px-3 py-2 hover:bg-[#7EC5FF] hover:text-black hover:no-underline'
function SideBarLinks({item}){
    const {pathname}=useLocation()
    return(
        <Link  to={item.path} className={ClassNames( pathname === item.path ? "text-[#7EC5FF]":"text-white",LinkClass,)} >
         <item.icon />
         {item.name}
        </Link>
    )
}