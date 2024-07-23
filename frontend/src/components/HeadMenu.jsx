import mugsLogo from '../assets/MnSLogo.png'
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
            <div className={`position: fixed top-11 w-52 rounded-lg shadow-black shadow-md\
              ${closeDrop1 === true ? "h-0 pointer-events-none duration-300" : "h-auto duration-300 bg-white border-1 border-slate-300"}`}>
                <ul className={`font-serif font-thin text-sm flex flex-col py-2 pr-2 pl-2 list-none px-0 m-0\
                  ${closeDrop1 === true ? "opacity-0" : ""}`}>
                  <li className='py-1 hover:bg-[#31652b52] cursor-pointer rounded-lg'>
                    <a className='m-2' href='/build'>Start new list</a>
                  </li>
                  <hr className='border-gray-300 place-self-center w-44'></hr>
                  <li className='py-1 hover:bg-[#31652b52] cursor-pointer rounded-lg'>
                    <a className='m-2' href='/build'>Open past list</a>
                  </li>
                  <hr className='border-gray-300 place-self-center w-44'></hr>
                  <li className='py-1 hover:bg-[#31652b52] cursor-pointer rounded-lg'>
                    <a className='m-2' href='/build'>Create your own template</a>
                  </li>
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
            <div className={`position: fixed top-11 w-52 rounded-lg shadow-black shadow-md\
              ${closeDrop2 === true ? "h-0 pointer-events-none duration-300" : "h-auto duration-300 bg-white border-1 border-slate-300"} `}>
                <ul className={`font-serif font-thin text-sm flex flex-col py-2 pr-2 pl-2 list-none px-0 m-0\
                  ${closeDrop2 === true ? "opacity-0" : ""}`}>
                  <li className='py-1 hover:bg-[#31652b52] cursor-pointer rounded-lg'>
                    <a className='m-2' href='/account'>Sign-in/Make an account</a>
                  </li>
                  <hr className='border-gray-300 place-self-center w-44'></hr>
                  <li className='py-1 hover:bg-[#31652b52] cursor-pointer rounded-lg'>
                    <a className='m-2' href='/account'>Profile</a>
                  </li>
                  <hr className='border-gray-300 place-self-center w-44'></hr>
                  <li className='py-1 hover:bg-[#31652b52] cursor-pointer rounded-lg'>
                    <a className='m-2' href='/account'>Friends</a>
                  </li>
                  <hr className='border-gray-300 place-self-center w-44'></hr>
                  <li className='py-1 hover:bg-[#31652b52] cursor-pointer rounded-lg'>
                    <a className='m-2' href='/account'>Settings</a>
                  </li>
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
            <div className={`position: fixed top-11 w-52 rounded-lg shadow-black shadow-md\
              ${closeDrop3 === true ? "h-0 pointer-events-none duration-300" : "h-auto duration-300 bg-white border-1 border-slate-300"} `}>
                <ul className={`font-serif font-thin text-sm flex flex-col py-2 pr-2 pl-2 list-none px-0 m-0\
                  ${closeDrop3 === true ? "opacity-0" : ""}`}>
                  <li className='py-1 hover:bg-[#31652b52] cursor-pointer rounded-lg'>
                    <a className='m-2' href='/about'>Welcome</a>
                  </li>
                  <hr className='border-gray-300 place-self-center w-44'></hr>
                  <li className='py-1 hover:bg-[#31652b52] cursor-pointer rounded-lg'>
                    <a className='m-2' href='/about'>Info</a>
                  </li>
                  <hr className='border-gray-300 place-self-center w-44'></hr>
                  <li className='py-1 hover:bg-[#31652b52] cursor-pointer rounded-lg'>
                    <a className='m-2' href='/about'>Contact us</a>
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }