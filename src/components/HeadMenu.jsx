import mugsLogo from './../assets/MnSLogo.png'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import React from 'react'

export function HeadMenu() {
  const location = useLocation() //for changing which thing is highlighted
  
  const [closeDrop1, setDrop1] = useState(true)
  const [closeDrop2, setDrop2] = useState(true)
  const [closeDrop3, setDrop3] = useState(true)

  const handleDrop1= () => {
    setDrop1(!closeDrop1)
  }
  const handleDrop2= () => {
    setDrop2(!closeDrop2)
  }
  const handleDrop3= () => {
    setDrop3(!closeDrop3)
  }

  return (
      <div className="bg-white position: fixed z-30 w-full h-16 flex items-center shadow-xl">
        <div className="items-center pl-[25%] mx-4">
          <a className="flex flex-shrink-0" href='/about'>
            <button className="w-16 h-16 flex-shrink-0">
              <img src={mugsLogo} alt="Mugs logo" />
            </button>
          </a>
        </div>
        <div className="flex flex-row-reverse ml-auto items-center pr-[25%] flex-wrap-reverse">
          {/*Full top nav option container*/}
          <div className='flex flex-col hover:bg-[#aeae0b52] rounded-xl' 
            onMouseLeave={() => (handleDrop1())} 
            onMouseEnter={()=> (handleDrop1())}>
            <a className={`mx-4 font-serif font-semibold text-[#076407] \
              hover:text-[#C6C66A] focus:text-#C6C66A] ${location.pathname === '/build' ? 'text-[#AEAE0B]' : ''}`} href='/build'>
                Build
            </a>
            {/*DropMenu Container*/}
            <div className={`position: fixed top-11 pl-3.5 w-36 rounded-lg shadow-black shadow-lg\
              ${closeDrop1 === true ? "h-0 bg-opacity-0 pointer-events-none duration-500" : "h-auto duration-500 bg-white border-1 border-slate-300"} `}>
                <ul className={`font-serif font-thin text-sm flex flex-col py-2\
                  ${closeDrop1 === true ? "opacity-0" : ""}`}>
                  <li className='py-1'>Start new list</li>
                  <li className='py-1'>Open past list</li>
                  <li className='py-1'>Create your own template</li>
                </ul>
            </div>
          </div>
          
          {/*Full top nav option container*/}
          <div className='flex flex-col hover:bg-[#aeae0b52] rounded-xl' 
            onMouseLeave={() => (handleDrop2())} 
            onMouseEnter={()=> (handleDrop2())}>
            <a className={`mx-4 font-serif font-semibold text-[#076407] \
              hover:text-[#C6C66A] focus:text-#C6C66A] ${location.pathname === '/account' ? 'text-[#AEAE0B]' : ''}`} href='/account'>
                Account
            </a>
            {/*DropMenu Container*/}
            <div className={`position: fixed top-11 pl-3.5 w-36 rounded-lg shadow-black shadow-lg\
              ${closeDrop2 === true ? "h-0 bg-opacity-0 pointer-events-none duration-500" : "h-auto duration-500 bg-white border-1 border-slate-300"} `}>
                <ul className={`font-serif font-thin text-sm flex flex-col py-2\
                  ${closeDrop2 === true ? "opacity-0" : ""}`}>
                  <li className='py-1 cursor-pointer'>
                    <a>Log-in/Sign-up</a>
                  </li>
                  <li className='py-1'>Profile</li>
                  <li className='py-1'>Settings</li>
                </ul>
            </div>
          </div>

          {/*Full top nav option container*/}
          <div className='flex flex-col hover:bg-[#aeae0b52] rounded-xl' 
            onMouseLeave={() => (handleDrop3())} 
            onMouseEnter={()=> (handleDrop3())}>
            <a className={`mx-4 font-serif font-semibold text-[#076407] \
              hover:text-[#C6C66A] focus:text-#C6C66A] ${location.pathname === '/about' ? 'text-[#AEAE0B]' : ''}`} href='/about'>
                About
            </a>
            {/*DropMenu Container*/}
            <div className={`position: fixed top-11 pl-3.5 w-36 rounded-lg shadow-black shadow-lg\
              ${closeDrop3 === true ? "h-0 bg-opacity-0 pointer-events-none duration-500" : "h-auto duration-500 bg-white border-1 border-slate-300"} `}>
                <ul className={`font-serif font-thin text-sm flex flex-col py-2\
                  ${closeDrop3 === true ? "opacity-0" : ""}`}>
                  <li className='py-1'>Welcome</li>
                  <li className='py-1'>Info</li>
                  <li className='py-1'>Contact us</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }