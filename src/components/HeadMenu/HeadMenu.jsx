import './HeadMenuStyle.css'
import mugsLogo from './../../assets/MnSLogo.png'
import { useLocation } from 'react-router-dom'

export function HeadMenu() {
  const location = useLocation() //for changing which thing is highlighted
  
  return (
      <>
        <div className="hm-main-container">
          <div className='hm-logo-container'>
            <a className={location.pathname === '/about' ? 'active' : ''} href='/about'>
              <button className='hm-nav-item' id='logo-button'>
                <img src={mugsLogo} className="hm-logo" alt="Mugs logo" />
              </button>
            </a>
          </div>
          <div className='hm-menu-item-container'>
            <a className={location.pathname === '/build' ? 'active' : ''} href='/build'>
              <button className="hm-nav-item">Build</button>
            </a>
            <a className={location.pathname === '/account' ? 'active' : ''} href='/account'>
              <button className="hm-nav-item">Account</button>
            </a>
            <a className={location.pathname === '/about' ? 'active' : ''} href='/about'>
              <button className="hm-nav-item">About us</button>
            </a>
          </div>
        </div>
        
        <div className='lineContainer'>
          <hr className='line'></hr>
        </div>
      </>
    )
  }