import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const MakeAccount = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [emailR, setEmailR] = useState('')
    const [password, setPassword] = useState('')
    const [passwordR, setPasswordR] = useState('')
    const [statMessage, setStatMessage] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()

        console.log("hlello")
    }
    
    return (
        <>
            <div className={`position: absolute top-[64px] flex flex-col h-[calc(100%-64px)] w-[100%] justify-center items-center`}>
                <div className={`flex flex-col justify-center items-center w-[100%] h-[100%]\
                    bg-[url('../../src/assets/Algonquin2021CanoeLake.jpeg')] bg-no-repeat bg-cover bg-center`}>
                    <form className = {`flex flex-col w-[56rem] rounded-xl shadow-black shadow-lg \
                        font-serif py-8 px-6 h-auto space-y-4 bg-white items-center justify-center`}>
                        <div className='flex flex-col items-center text-center'>
                            <h1 className={`font-serif font-medium text-2xl place-self-center`}>Make an account</h1>
                            <div className='text-xs place-self-center'>Already have an account? Click&nbsp;
                                <a className='text-forest-green underline' href='/account/signin'>
                                    here
                                </a> 
                                &nbsp;to login
                            </div>
                        </div>
                            
                            {/*Row for name and username*/}
                        <div className='flex flex-row w-[100%] space-x-[2rem] items-center text-center justify-center mx-[2rem]'>
                            <input className={`bg-white w-[calc(40rem/3)] py-1 px-1 border-b-black border-b-[1px] text-sm`} type="text" placeholder="First name" 
                                id="firstName" name="firstName" value={firstName} onChange={ (e) => setFirstName(e.target.value)}/>
                            <input className={`bg-white w-[calc(40rem/3)] py-1 px-2 border-b-black border-b-[1px] text-sm`} type="text" placeholder="Last name" 
                                id="lastName" name="lastName" value={lastName} onChange={ (e) => setLastName(e.target.value)}/>
                            <input className={`bg-white w-[calc(40rem/3)] py-1 px-2 border-b-black border-b-[1px] text-sm`} type="text" placeholder="Desired username" 
                                id="userName" name="userName" value={userName} onChange={ (e) => setUserName(e.target.value)}/>
                        </div>

                        <div className='flex flex-row w-[100%] space-x-[2rem] items-center text-center justify-center mx-[2rem]'>
                            <input className={`bg-white w-[calc(42rem/2)] py-1 px-1 border-b-black border-b-[1px] text-sm`} type="text" placeholder="Email" 
                                id="email" name="email" value={email} onChange={ (e) => setEmail(e.target.value)}/>
                            <input className={`bg-white w-[calc(42rem/2)] py-1 px-1 border-b-black border-b-[1px] text-sm`} type="text" placeholder="Re-enter your email" 
                                id="emailR" name="emailR" value={emailR} onChange={ (e) => setEmailR(e.target.value)}/>
                        </div>

                        <hr className={`border-gray-300 place-self-center w-[52rem] m-0`}></hr>      

                        <div className='flex flex-col justify-center items-center mx-[2rem]'>
                            <h2 className='text-sm place-self-start'>Create a password</h2>
                            <div className='flex flex-row w-[100%] space-x-[2rem] items-center text-center justify-center'>
                                <input className={`bg-white w-[calc(42rem/2)] py-1 px-1 border-b-black border-b-[1px] text-sm`} type="password" placeholder="User password" 
                                    id="password" name="password" value={password} onChange={ (e) => setPassword(e.target.value)}/>
                                <input className={`bg-white w-[calc(42rem/2)] py-1 px-2 border-b-black border-b-[1px] text-sm`} type="password" placeholder="Re-enter your password" 
                                    id="passwordR" name="passwordR" value={passwordR} onChange={ (e) => setPasswordR(e.target.value)}/>
                            </div>
                            <ul className='text-xs place-self-start'>Password requires:
                                <li className='text-[10px]'>At least 8 characters</li>
                                <li className='text-[10px]'>At least 1 uppercase letter</li>
                                <li className='text-[10px]'>At least 1 lowercase letter</li>
                                <li className='text-[10px]'>At least 1 symbol (e.g. !@#$% etc.)</li>
                            </ul>
                        </div>

                        <hr className={`border-gray-300 place-self-center w-[52rem] m-0`}></hr>   

                        <div className='flex flex-col justify-center items-center mx-[2rem]'>
                            <h2 className='text-sm place-self-start'>User survey</h2>
                            <div className='flex flex-row w-[100%] space-x-[2rem] items-center text-center justify-center'>
                                <input className={`bg-white w-[calc(42rem/2)] py-1 px-1 border-b-black border-b-[1px] text-sm`} type="select" placeholder="Country" 
                                    id="password" name="password" value={password} onChange={ (e) => setPassword(e.target.value)}/>
                                <input className={`bg-white w-[calc(42rem/2)] py-1 px-2 border-b-black border-b-[1px] text-sm`} type="select" placeholder="Main style of camping" 
                                    id="passwordR" name="passwordR" value={passwordR} onChange={ (e) => setPasswordR(e.target.value)}/>
                            </div>
                            <ul className='text-xs place-self-start'>Password requires:
                                <li className='text-[10px]'>At least 8 characters</li>
                                <li className='text-[10px]'>At least 1 uppercase letter</li>
                                <li className='text-[10px]'>At least 1 lowercase letter</li>
                                <li className='text-[10px]'>At least 1 symbol (e.g. !@#$% etc.)</li>
                            </ul>
                        </div>

                        <button className={`border-blue-500 border-[1px] rounded-xl w-28 py-1 place-self-center \
                            text-blue-700 text-sm`} type="submit" onClick={handleSubmit}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default MakeAccount