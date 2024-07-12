import mugsLogo from './../assets/MnSLogo.png'
import { useLocation } from 'react-router-dom'

export function HeadMenu() {
  const location = useLocation() //for changing which thing is highlighted
  
  return (
      <>
        <div className="bg-white position: fixed z-11 w-full h-16 flex items-center">
          <div className="items-center pl-[25%] mx-4">
            <a className="flex flex-shrink-0" href='/about'>
              <button className="w-16 h-16 flex-shrink-0">
                <img src={mugsLogo} alt="Mugs logo" />
              </button>
            </a>
          </div>
          <div className="flex flex-row-reverse ml-auto items-center pr-[25%] flex-wrap-reverse">
            <a className={`mx-4 font-serif font-semibold text-[#076407] \
              hover:text-[#C6C66A] focus:text-#C6C66A] ${location.pathname === '/build' ? 'text-[#AEAE0B]' : ''}`} href='/build'>
                Build
            </a>
            <a className={`mx-4 font-serif font-semibold text-[#076407] \
              hover:text-[#C6C66A] focus:text-#C6C66A] ${location.pathname === '/account' ? 'text-[#AEAE0B]' : ''}`} href='/account'>
                Account
            </a>
            <a className={`mx-4 font-serif font-semibold text-[#076407] \
              hover:text-[#C6C66A] focus:text-#C6C66A] ${location.pathname === '/about' ? 'text-[#AEAE0B]' : ''}`} href='/about'>
                About
            </a>
          </div>
        </div>
      </>
    )
  }