import groupCollab from '../assets/GroupCollabPic.png'
import multiList from '../assets/TaskListMulti.webp'
import customPic from '../assets/CustomizePic.png'
import buildPic from '../assets/BuildBrickPic.webp'
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
                    <div className={`flex flex-row w-50% space-x-16 justify-center \
                        items-center text-center mt-8 font-serif `}>
                        <a href='/account/signin'>
                            <button className={`p-2 border-black border-1 bg-white rounded-xl \
                                opacity-60 w-32 shadow-xl hover:shadow-2xl hover:opacity-100`}>
                                Sign In
                            </button>
                        </a>
                        <button className={`p-2 border-black border-1 bg-white rounded-xl \
                            opacity-60 w-32 shadow-xl hover:shadow-2xl hover:opacity-100`}>
                            Make account
                        </button>
                    </div>
                </div>
            
            {/*Content container*/}
                <div className={`flex w-[100%] items-center justify-center`}>
                    {/*Pros Container */}
                    <div className={`flex justify-center items-center my-12`}>
                        <div className={`flex flex-row flex-wrap list-none space-x-4 mx-8 font-serif justify-center items-center text-center`}>
                            <div className='items-center justify-center text-center py-0 w-72'>
                                <img src={groupCollab} alt='GroupPic' className='mr-auto ml-auto mb-4 h-16 flex-shrink-0 block' />
                                <h2>Collaborate with friends</h2>
                            </div>
                            <div className='py-0 px-8 w-80 text-center items-center justify-center'>
                                <img src={multiList} alt='MultiListPic' className='mr-auto ml-auto mb-4 h-16 flex-shrink-0 block' />
                                <h2>Make/save multiple lists</h2>
                            </div>
                            <div className='py-0 px-8 w-80 text-center items-center justify-center'>
                                <img src={customPic} alt='CustomizePic' className='mr-auto ml-auto mb-4 h-16 flex-shrink-0 block' />
                                <h2>Customize on trip and group</h2>
                            </div>
                            <div className='py-0 px-8 w-80 text-center items-center justify-center'>
                                <img src={buildPic} alt='BuildPic' className='mr-auto ml-auto mb-4 h-16 flex-shrink-0 block' />
                                <h2>Build your own template to share</h2>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Account