import { useState } from 'react' //saves values
import React from 'react'

const Account = () => {
    return ( 
        <>
            <div className={`position: absolute top-[64px] flex flex-col w-[100%]`}>
            {/*background title container*/}
                <div className={`flex flex-col w-[100%] h-96 bg-silverPeakView \
                    bg-no-repeat bg-cover bg-center items-center justify-center`}>
                    <h1 className={`font-serif font-bold text-3xl mb-4`}>
                        Let's get you packed, for anything!
                    </h1>
                    <p className={`font-serif font-thin text-md`}>
                        Make an account to make and save multiple packing lists for all your future adventures.
                    </p>
                </div>
            
            {/*Content container*/}
                <div className={`flex w-[100%] items-center justify-center`}>
                    {/*Pros Container */}
                    <div className={`flex justify-center items-center mt-16`}>
                        <ul className={`flex flex-row flex-wrap list-none`}>
                            <li className='py-0 px-8 w-80 text-center items-center justify-center'>
                                <img></img>
                                <h2>Collaborate with friends</h2>
                            </li>
                            <li className='py-0 px-8 w-80 text-center items-center justify-center'>
                                <h2>Make/save multiple lists</h2>
                            </li>
                            <li className='py-0 px-8 w-80 text-center items-center justify-center'>
                                <h2>Customize on based on trip and group</h2>
                            </li>
                            <li className='py-0 px-8 w-80 text-center items-center justify-center'>
                                <h2>Build your own template to share</h2>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </>
       
    )
}

export default Account