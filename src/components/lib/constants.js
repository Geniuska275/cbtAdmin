import { FaHome } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { TbButterflyFilled } from "react-icons/tb";


export const DASHBOARD_SIDEBAR_LINKS=[
    {
        key:'Home',
        path:"/",
        name:"Home",
        icon:FaHome
    },
    {
        key:"Users",
        path:"/Users",
        name:"Users",
        icon:FaRegUser
    },
    {
        key:"Settings",
        path:"/Settings",
        name:"Settings",
        icon:IoMdSettings
    },
    {
        key:"Proctoring",
        path:"/Proctoring",
        name:"Proctoring",
        icon:TbButterflyFilled
    },
]