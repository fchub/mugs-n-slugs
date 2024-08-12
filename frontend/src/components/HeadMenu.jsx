import mugsLogo from '../assets/MnSLogo.png'
import { useLocation } from 'react-router-dom'
import React, { useState, useContext } from 'react'
import UserContext from './UserContext.jsx'

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

  const userInfo = useContext(UserContext) //context from App, that we created, context provi8der

  return (
      <div className="bg-white position: fixed z-30 w-full h-16 flex items-center shadow-xl">
        <div className="items-center pl-[25%] mx-4">
          <a className="flex flex-shrink-0" href='/home'>
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
                
                {/*user info container*/}
                <div className={`justify-center items-center text-center w-[100%] h-auto \
                  font-serif font-medium text-md py-1 m-0 flex-wrap\
                  ${closeDrop1 === true ? "opacity-0" : ""}`}>
                  <h1>You have made NUM lists</h1>
                </div>
                <hr className={`border-gray-300 place-self-center w-[100%] \
                  ${closeDrop1 === true ? "opacity-0" : ""}`}></hr>
                
                <ul className={`font-serif font-thin text-sm flex flex-col pb-2 pt-0 pr-2 pl-2 list-none m-0\
                  ${closeDrop1 === true ? "opacity-0" : ""}`}>
                  <a className='mx-2 my-1' href='/build'>
                    <li className='py-1 px-1 hover:bg-[#31652b52] cursor-pointer rounded-lg'>
                      Start new list
                    </li>
                  </a>
                  <hr className='border-gray-300 place-self-center w-44'></hr>
                  <a className='mx-2 my-1' href='/build/pastlists'>
                    <li className='py-1 px-1 hover:bg-[#31652b52] cursor-pointer rounded-lg'>
                      Open past list
                    </li>
                  </a>
                  <hr className='border-gray-300 place-self-center w-44'></hr>
                  <a className='mx-2 my-1' href='/build'>
                    <li className='py-1 px-1 hover:bg-[#31652b52] cursor-pointer rounded-lg'>
                      Create your own template
                    </li>
                  </a>
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
                
                 {/*user info container*/}
                <div className={`justify-center items-center text-center w-[100%] h-auto \
                  font-serif font-medium text-lg py-1 m-0\
                  ${closeDrop2 === true ? "opacity-0" : ""}`}>
                  <h1>Hello, {userInfo.firstName}</h1>
                  <h3 className={`font-thin text-xs`}>EMAIL</h3>
                </div>
                <hr className={`border-gray-300 place-self-center w-[100%] \
                  ${closeDrop2 === true ? "opacity-0" : ""}`}></hr>
                <ul className={`font-serif font-thin text-sm flex flex-col pb-2 pt-0 pr-2 pl-2 list-none m-0\
                  ${closeDrop2 === true ? "opacity-0" : ""}`}>
                  <a className={`mx-2 my-1 ${userInfo.loggedIn === true ? "hidden" : ""}`} href='/account'>
                    <li className='py-1 px-1 hover:bg-[#31652b52] cursor-pointer rounded-lg'>
                      Sign-in/Make an account
                    </li>
                  </a>
                  <hr className={`border-gray-300 place-self-center w-44 \
                    ${userInfo.loggedIn === true ? "hidden" : ""}`}></hr>
                  <a className='mx-2 my-1' href={`${userInfo.loggedIn === true ? "/account" : "/build"}`}>
                    <li className='py-1 px-1 hover:bg-[#31652b52] cursor-pointer rounded-lg'>
                      Profile
                    </li>
                  </a>
                  <hr className='border-gray-300 place-self-center w-44'></hr>
                  <a className='mx-2 my-1' href='/account'>
                    <li className='py-1 px-1 hover:bg-[#31652b52] cursor-pointer rounded-lg'>
                      Friends
                    </li>
                  </a>
                  <hr className='border-gray-300 place-self-center w-44'></hr>
                  <a className='mx-2 my-1' href='/account'>
                    <li className='py-1 px-1 hover:bg-[#31652b52] cursor-pointer rounded-lg'>
                      Settings
                    </li>
                  </a>
                  <hr className='border-gray-300 place-self-center w-44'></hr>
                  <a className={`mx-2 my-1 ${userInfo.loggedIn === true ? "" : "hidden"}`} href='/account'>
                    <li className='py-1 px-1 hover:bg-[#31652b52] cursor-pointer rounded-lg'>
                      Sign out
                    </li>
                  </a>
                </ul>
            </div>
          </div>

          {/*Full top nav option container*/}
          <div className='flex flex-col hover:bg-[#aeae0b52] rounded-xl' 
            onMouseLeave={() => (handleDrop3())} 
            onMouseEnter={()=> (handleDrop3())}>
            <a className={`mx-4 font-serif font-semibold text-[#076407] \
              hover:text-[#C6C66A] focus:text-#C6C66A] ${location.pathname === '/home' ? 'text-[#AEAE0B]' : ''}`} href='/home'>
                Home
            </a>
            {/*DropMenu Container*/}
            <div className={`position: fixed top-11 w-52 rounded-lg shadow-black shadow-md\
              ${closeDrop3 === true ? "h-0 pointer-events-none duration-300" : "h-auto duration-300 bg-white border-1 border-slate-300"} `}>
                <ul className={`font-serif font-thin text-sm flex flex-col py-2 pr-2 pl-2 list-none px-0 m-0\
                  ${closeDrop3 === true ? "opacity-0" : ""}`}>
                  <a className='mx-2 my-1' href='/home'>
                    <li className='py-1 px-1 hover:bg-[#31652b52] cursor-pointer rounded-lg'>
                      Welcome
                    </li>
                  </a>
                  <hr className='border-gray-300 place-self-center w-44'></hr>
                  <a className='mx-2 my-1'  href='/home#home_info'>
                    <li className='py-1 px-1 hover:bg-[#31652b52] cursor-pointer rounded-lg'>
                      Info
                    </li>
                  </a>
                  <hr className='border-gray-300 place-self-center w-44'></hr>
                  <a className='mx-2 my-1' href='/home#contact-us'>
                    <li className='py-1 px-1 hover:bg-[#31652b52] cursor-pointer rounded-lg'>
                      Contact us
                    </li>
                  </a>
                </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }