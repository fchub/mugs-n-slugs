import { useState } from 'react'
import React from 'react'

const About = () => {

    return (
        <div className='position: absolute top-[64px] font-serif w-[100%]'> {/*main content container*/}
            {/*about Content container*/}
            <div className="flex flex-col items-center w-[100%]">
                {/*title Container*/}
                <div className={`flex flex-col w-[100%] h-96 items-center justify-start \
                bg-unpackedGround bg-no-repeat bg-cover bg-bottom pt-16`}>
                    <h1 className="text-[35px] text-white">Welcome to MugsNSlugs!</h1>
                    <h2 className='text-white'>We make packing lists for camping easy!</h2>
                </div>

                {/*Card Container*/}
                <div className='flex items-center justify-center flex-col w-[100%]'>
                    
                    {/*Card Row*/}
                    <div className='flex flex-row items-center justify-center w-[90%] pt-16'>
                        
                        {/*card*/}
                        <div className='m-[1.5rem] w-[20rem] h-[20rem] rounded-2xl [perspective:1000px]'>
                            
                            {/*card-inner*/}
                            <div className='position: relative w-[100%] h-[100%] rounded-2xl shadow-2xl transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]'>

                                {/*card front*/}
                                <div className='position: absolute flex w-[100%] h-[100%] rounded-2xl bg-[#076407] items-center justify-center font-bold text-4xl [backface-visibility:hidden]'>
                                    <h1>Info</h1>
                                </div>

                                {/*card back*/}
                                <div className='position: absolute flex w-[100%] h-[100%] rounded-2xl bg-white [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                                    <p>We are a few campers that</p>
                                </div>
                            </div>
                        </div>

                        {/*card*/}
                        <div className='m-[1.5rem] w-[20rem] h-[20rem] rounded-2xl [perspective:1000px]'>
                            
                            {/*card-inner*/}
                            <div className='position: relative w-[100%] h-[100%] rounded-2xl shadow-2xl transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]'>

                                {/*card front*/}
                                <div className='position: absolute flex w-[100%] h-[100%] rounded-2xl bg-[#076407] items-center text-center justify-center font-bold text-4xl [backface-visibility:hidden]'>
                                    <h1>How it works</h1>
                                </div>

                                {/*card back*/}
                                <div className='position: absolute flex w-[100%] h-[100%] rounded-2xl bg-white [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                                    <ul className='howListItems'>
                                        <li>Answer questions to produce template packing list</li>
                                        <li>Check template packing list produced from parameters</li>
                                        <li>Edit packing list</li>
                                        <li>Share with collaborators</li>
                                        <li>Save and come back to this packing list</li>
                                    </ul>              
                                </div>
                            </div>
                        </div>
                    </div> 

                    {/*Card Row*/}
                    <div className='flex flex-row items-center justify-center w-[90%] pt-[1.5rem]'>
                        
                        {/*card*/}
                        <div className='m-[1.5rem] w-[20rem] h-[20rem] rounded-2xl [perspective:1000px]'>
                            
                            {/*card-inner*/}
                            <div className='position: relative w-[100%] h-[100%] rounded-2xl shadow-2xl transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]'>

                                {/*card front*/}
                                <div className='position: absolute flex w-[100%] h-[100%] rounded-2xl bg-[#076407] items-center justify-center text-center font-bold text-4xl [backface-visibility:hidden]'>
                                    <h1>What it looks like</h1>
                                </div>

                                {/*card back*/}
                                <div className='position: absolute flex w-[100%] h-[100%] rounded-2xl bg-white [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                                    <p>We are a few campers that</p>
                                </div>
                            </div>
                        </div>

                        {/*card*/}
                        <div className='m-[1.5rem] w-[20rem] h-[20rem] rounded-2xl [perspective:1000px]'>
                            
                            {/*card-inner*/}
                            <div className='position: relative w-[100%] h-[100%] rounded-2xl shadow-2xl transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]'>

                                {/*card front*/}
                                <div className='position: absolute flex w-[100%] h-[100%] rounded-2xl bg-[#076407] items-center justify-center font-bold text-4xl [backface-visibility:hidden]'>
                                    <h1>Profile</h1>
                                </div>

                                {/*card back*/}
                                <div className='position: absolute flex w-[100%] h-[100%] rounded-2xl bg-white [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                                    <ul className='howListItems'>
                                        <li>Answer questions to produce template packing list</li>
                                        <li>Check template packing list produced from parameters</li>
                                        <li>Edit packing list</li>
                                        <li>Share with collaborators</li>
                                        <li>Save and come back to this packing list</li>
                                    </ul>              
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default About