import './SideNavStyle.scss'
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
        <div className={`bg-white position: fixed left-0 top-16 w-52 h-[100vh] \
            z-10 shadow-2xl ${closeMenu === false ? 'sidena' : 'sidenav active'} \
            transition-all`}>
            
            {/*Burger container*/}
            <div className={`content-none bg-[#076407] position: absolute right-[-22.5px] \
                top-4 w-11 h-11 z-9 rounded-[2rem] shadow-2xl \
                ${closeMenu === false ? 'burgerContainer' : 'burgerContainer active'}`}>
                
                {/*Burger trigger*/}
                <div className={`w-11 h-11 z-15 cursor-pointer bg-blue-300\
                    opacity-1 rounded-[2rem] position: relative`} onClick={()=>(
                        handleCloseMenu()
                    )}>
                </div>
                
                {/*Burger menu*/}
                <div className={`content-0 bg-[#076407] position: relative \
                    z-12 w-5 h-1 rounded-lg bottom-[22.5px] left-3 transition-all \
                    after:content-0 after:bg-white after:absolute after:w-5 \
                    after:h-1 after:rounded-lg after:top-1 after:transition-all \
                    before:content-0 before:bg-white before:absolute before:w-5 \
                    before:h-1 before:rounded-lg before:bottom-1 before:transition-all`}></div>
            </div>
            <div className={closeMenu === false ? 'profileContainer' : 'profileContainer active'}>
                <div className='profileContents'>
                    <p className='name'>Hello, Guest</p>
                    <p>fycfyc@gmail.com</p>
                </div>
                <div className='inner'></div>
            </div>
            <div className={closeMenu === false ? 'contentsContainer' : 'contentsContainer active'}>
                <ul>
                    <li>
                        <a href="/build">build</a>
                    </li>
                    <li>
                        <a href="/account">account</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideNav