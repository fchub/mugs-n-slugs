import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {Icon} from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'

const SignIn = () => {
    //NEW FOR SIGN IN
    useEffect( () => {
        let processing = true
        axiosFetchData(processing)
        return () => {
            processing = false
        }
    },[])
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //for eye button
    const [type, setType] = useState('password') //for eyeoff password
    const [icon, setIcon] = useState(eyeOff) //for password eye

    const [statMessage, setStatMessage] = useState('')

    //NEW FOR SIGN IN
    const [dataCheck, setDataCheck] = useState('')


    const handleToggle = () => {
        if (type==='password') {
            setIcon(eye)
            setType('text')
        } else {
            setIcon(eyeOff)
            setType('password')
        }
    }

    //validating email address
    function ValidateEmail(email) {
        const validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return validRegex.test(email)
    }

    //NEW FOR SIGN IN
    const axiosFetchData = async(processing) => {
        await axios.get('http://localhost:4000/usertest')
        .then(res => {
            if(processing) {
                setDataCheck(res.data)
            }
        })
        .catch(err => console.log(err))
        console.log("hello")
    }

    //NEW FOR SIGN IN
    const validateUser = (userEmail, userPass) => {
        let emailVal = false
        let passVal = false
        
        for (let i=0; i < dataCheck.length; i++)
        {
            if (dataCheck[i].email === userEmail) {
                emailVal = true
                if (dataCheck[i].password === userPass) {
                    return true
                } else {
                    return false
                }
            }
        }

        if (emailVal === false) {
            return false
        }
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
                if(validateUser(email, password) === true) {
                    setStatMessage(<p className='text-sm font-light text-green-700 place-self-center text-center'>
                        You have successfully logged in.
                        </p>)
                } else {
                    setStatMessage(<p className='text-sm font-light text-red-500 place-self-center text-center'>
                        Wrong user email or password. Please try again.
                        </p>)
                }
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
                            <div className='flex flex-row'>
                                <input className='bg-white py-1 px-2 mx-2 border-b-black border-b-[1px] text-sm w-[calc(100%-50px)]' placeholder='Password'
                               type={type} id='password' name='password' value={password} onChange={ (e) => setPassword(e.target.value)} autoComplete='current-password' />
                                <span className='justify-right hover:cursor-pointer' onClick={handleToggle}>
                                    <Icon className='absolute' icon={icon} size={20}/>
                                </span>
                            </div>
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