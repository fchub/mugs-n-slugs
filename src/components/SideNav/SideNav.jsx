import './SideNavStyle.scss'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

function addSideLinks() {
    
}

const SideNav = () => {
    const location = useLocation() //for changing which thing is highlighted

    const [closeMenu, setCloseMenu] = useState(true)

    //function that allows changing active state using True to False of above
    const handleCloseMenu = () => {
        setCloseMenu(!closeMenu) //changes it to opposite 
    }

    return (
        //if CloseMenu = false, then use NORMAL sidenav app, otherwise use ACTIVE
        <div className={closeMenu === false ? 'sidenav' : 'sidenav active'}>
            <div className={closeMenu === false ? 'burgerContainer' : 'burgerContainer active'}>
                <div className='burgerTrigger' onClick={()=>(
                    handleCloseMenu()
                )}></div>
                <div className='burgerMenu'></div>
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