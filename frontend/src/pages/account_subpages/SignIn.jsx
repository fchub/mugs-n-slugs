import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const SignIn = () => {
    /*useEffect( () => {
        let processing = true
        axiosFetchData(processing)
        return () => {
            processing = false
        }
    },[]) */
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [statMessage, setStatMessage] = useState('')

    //validating email address
    function ValidateEmail(email) {
        var validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return validRegex.test(email)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if(!email || !password) {
            setStatMessage(<p className='text-sm font-light text-red-500 place-self-center text-center'>
                User email and/or password is empty. Please input both.
                </p>)
            console.log('error')
        } else {
            setStatMessage('')

            if(ValidateEmail(email) === false) {
                setStatMessage(<p className='text-sm font-light text-red-500 place-self-center text-center'>
                    Please input a valid email address.
                    </p>)
            } else {
                setStatMessage('')
                console.log(email + password)
            }
        }

    }
    
    return (
        <>
            <div className={`position: absolute top-[64px] flex flex-col h-[calc(100%-64px)] w-[100%] justify-center items-center`}>
                <div className={`flex flex-col justify-center items-center w-[100%] h-[100%]\
                    bg-[url('../../src/assets/Algonquin2021CanoeLake.jpeg')] bg-no-repeat bg-cover bg-center`}>
                    <form for='signin' className = {`flex flex-col w-96 rounded-xl shadow-black shadow-lg \
                        font-serif py-8 px-6 h-auto space-y-3 bg-white`}>
                        <h1 className={`font-serif font-medium text-2xl p-1 place-self-center`}>Sign in</h1>

                        <div className='flex flex-col'>
                            <input className='bg-white pb-1 px-2 mx-2 border-b-black border-b-[1px] text-sm' placeholder='User email'
                                type="text" id="email" name="email" value={email} onChange={ (e) => setEmail(e.target.value)}/>
                        </div>

                        <div className='flex flex-col'>
                            <input className='bg-white py-1 px-2 mx-2 border-b-black border-b-[1px] text-sm' placeholder='Password'
                               type='password' id='password' name='password' value={password} onChange={ (e) => setPassword(e.target.value)} autoComplete='current-password' />
                            <a className='text-xs place-self-center text-golden-yellow' href='/account'>Forgotten password?</a>
                        </div>
                        {statMessage}
                        <button className={`border-blue-500 border-[1px] rounded-xl w-28 py-1 place-self-center \
                            text-blue-700 text-sm`} type="submit" onClick={handleSubmit}>
                            Sign in
                        </button>

                        <div className='text-sm place-self-center'>Don't have an account? Click&nbsp;
                            <a className='text-forest-green underline' href='/account/makeaccount'>
                                here
                            </a> 
                            &nbsp;to make an account
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignIn