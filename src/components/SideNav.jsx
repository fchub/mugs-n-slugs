import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const SideNav = () => {
    const location = useLocation() //for changing which thing is highlighted

    const [closeMenu, setCloseMenu] = useState(true)

    //function that allows changing active state using True to False of above
    const handleCloseMenu = () => {
        setCloseMenu(!closeMenu) //changes it to opposite 
    }

    return (
        //if CloseMenu = false, then use NORMAL sidenav app, otherwise use ACTIVE
        <div className={`bg-white position: fixed flex flex-col space-y-2 left-0 top-16 \
            h-[100vh] z-10 ${closeMenu === false ? "w-52  shadow-2xl" : "w-10 bg-transparent"} \
            duration-500`}>
            
            {/*Burger container*/}
            <div className={`content-none bg-[#076407] position: absolute right-[-22.5px] \
                top-4 w-11 h-11 z-9 rounded-[2rem] shadow-2xl \
                ${closeMenu === false ? 'burgerContainerr' : 'burgerContainer active'}`}>
                
                {/*Burger trigger*/}
                <div className={`w-11 h-11 z-40 cursor-pointer bg-blue-300\
                    opacity-0 rounded-[2rem] position: relative`} onClick={()=>(
                        handleCloseMenu()
                    )}>
                </div>
                
                {/*Burger menu*/}
                <div className={`content-0 bg-[#076407] position: relative \
                    z-12 w-5 h-1 rounded-lg bottom-[23px] left-3 \
                    after:content-0 after:bg-white after:absolute after:w-5 \
                    after:h-1 after:rounded-lg after:top-2 \
                    before:content-0 before:bg-white before:absolute before:w-5 \
                    before:h-1 before:rounded-lg before:bottom-2 \
                    ${closeMenu === false ? "bg-[#076407] after:translate-y-[-0.5rem] after:rotate-[45deg] before:translate-y-[0.5rem] before:rotate-[-45deg]" : "bg-white"} \
                    duration-600`}></div>
            </div>

            {/*profile container*/}
            <div className={`text-center pb-1 shrink-0\
                ${closeMenu === false ? "opacity-100 duration-500 text-nowrap" : "opacity-0 duration-100"}`}>
                <div className="font-serif">
                    <p className="font-bold text-[18px] capitalize">Hello, Guest</p>
                    <p className="text-xs text-[#076407] lowercase">fycfyc@gmail.com</p>
                </div>
            </div>

            {/*contents container*/}
            <div className={`pt-1 ${closeMenu === false ? "opacity-100 duration-500" : "opacity-0 pointer-events-none duration-100"}`}>
                <ul className="flex flex-col capitalize px-4 font-serif text-[16px] list-none">
                    <li className="w-100% cursor-pointer hover:bg-[#AEAE0B] rounded-lg \
                        py-1 px-2">
                        <a href="/build">build</a>
                    </li>
                    <li className="w-100% cursor-pointer  hover:bg-[#AEAE0B] rounded-lg \
                        py-1 px-2">
                        <a href="/account">account</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideNav