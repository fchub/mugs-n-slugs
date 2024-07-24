import { useState } from 'react' //saves values
import React from 'react'

const Home = () => {
    //function that allows changing active state using True to False of above
    const [closeCard1, setCloseCard1] = useState(true)
    const [closeCard2, setCloseCard2] = useState(true)
    const [closeCard3, setCloseCard3] = useState(true)
    const [closeCard4, setCloseCard4] = useState(true)

    const handleCloseCard1= () => {
        setCloseCard1(!closeCard1) //changes it to opposite 
    }
    const handleCloseCard2= () => {
        setCloseCard2(!closeCard2) //changes it to opposite 
    }
    const handleCloseCard3= () => {
        setCloseCard3(!closeCard3) //changes it to opposite 
    }
    const handleCloseCard4= () => {
        setCloseCard4(!closeCard4) //changes it to opposite 
    }


    const [email, setEmail] = useState('') //default value?
    const [message, setMessage] = useState('')
    
    //every change we make to email, it resets and sets email to the above variable email, saved to Value={email}
    const handleSubmit = (e) => {
        e.preventDefault() //says that we PREVENT default submit action, and that we do our own thing
        
        console.log(email)
    }
    
    return (
        <>
            <div className='position: absolute top-[64px] font-serif w-[100%]'> {/*main content container*/}
                {/*about Content container*/}
                <div className="flex flex-col items-center w-[100%]">
                    {/*title Container*/}
                    <div className={`flex flex-col w-[100%] h-96 items-center justify-start \
                    bg-unpackedGround bg-no-repeat bg-cover bg-center pt-16`}>
                        <h1 className="text-[35px] text-white">Welcome to MugsNSlugs!</h1>
                        <h2 className='text-white'>We make packing lists for camping easy!</h2>
                    </div>

                    {/*Card Container*/}
                    <div id='home_info' className='flex items-center justify-center flex-col w-[100%]'>
                        
                        {/*Card Row*/}
                        <div className='flex flex-row items-center justify-center w-[90%] pt-16'>
                            
                            {/*card*/}
                            <div className='m-[1.5rem] w-[20rem] h-[20rem] rounded-2xl [perspective:1000px] cursor-pointer'>
                                
                                {/*card-inner*/}
                                <div onClick={()=>(
                                        handleCloseCard1()
                                    )}
                                    className={`position: relative w-[100%] h-[100%] rounded-2xl shadow-2xl \
                                        transition-all duration-500 [transform-style:preserve-3d] \
                                        ${closeCard1 === false ? '[transform:rotateY(180deg)]' : ''}`} >

                                    {/*card front*/}
                                    <div className='position: absolute flex w-[100%] h-[100%] rounded-2xl bg-[#076407] items-center justify-center font-bold text-4xl [backface-visibility:hidden]'>
                                        <h1>Info</h1>
                                    </div>

                                    {/*card back*/}
                                    <div className='position: absolute flex w-[100%] h-[100%] rounded-2xl bg-[#aeae0b52] [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                                        <p>We are a few campers that</p>
                                    </div>
                                </div>
                            </div>

                            {/*card*/}
                            <div className='m-[1.5rem] w-[20rem] h-[20rem] rounded-2xl [perspective:1000px] cursor-pointer'>
                                
                                {/*card-inner*/}
                                <div onClick={()=>(
                                        handleCloseCard2()
                                    )}
                                    className={`position: relative w-[100%] h-[100%] rounded-2xl shadow-2xl \
                                        transition-all duration-500 [transform-style:preserve-3d] \
                                        ${closeCard2 === false ? '[transform:rotateY(180deg)]' : ''}`} >

                                    {/*card front*/}
                                    <div className='position: absolute flex w-[100%] h-[100%] rounded-2xl bg-[#076407] items-center text-center justify-center font-bold text-4xl [backface-visibility:hidden]'>
                                        <h1>How it works</h1>
                                    </div>

                                    {/*card back*/}
                                    <div className='position: absolute flex w-[100%] h-[100%] rounded-2xl bg-[#aeae0b52] [transform:rotateY(180deg)] [backface-visibility:hidden]'>
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
                            <div className='m-[1.5rem] w-[20rem] h-[20rem] rounded-2xl [perspective:1000px] cursor-pointer'>
                                
                                {/*card-inner*/}
                                <div onClick={()=>(
                                        handleCloseCard3()
                                    )}
                                    className={`position: relative w-[100%] h-[100%] rounded-2xl shadow-2xl \
                                        transition-all duration-500 [transform-style:preserve-3d] \
                                        ${closeCard3 === false ? '[transform:rotateY(180deg)]' : ''}`} >

                                    {/*card front*/}
                                    <div className='position: absolute flex w-[100%] h-[100%] rounded-2xl bg-[#076407] items-center justify-center text-center font-bold text-4xl [backface-visibility:hidden]'>
                                        <h1>What it looks like</h1>
                                    </div>

                                    {/*card back*/}
                                    <div className='position: absolute flex w-[100%] h-[100%] rounded-2xl bg-[#aeae0b52] [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                                        <p>We are a few campers that</p>
                                    </div>
                                </div>
                            </div>

                            {/*card*/}
                            <div className='m-[1.5rem] w-[20rem] h-[20rem] rounded-2xl [perspective:1000px] cursor-pointer'>
                                
                                {/*card-inner*/}
                                <div onClick={()=>(
                                        handleCloseCard4()
                                    )}
                                    className={`position: relative w-[100%] h-[100%] rounded-2xl shadow-2xl \
                                        transition-all duration-500 [transform-style:preserve-3d] \
                                        ${closeCard4 === false ? '[transform:rotateY(180deg)]' : ''}`} >

                                    {/*card front*/}
                                    <div className='position: absolute flex w-[100%] h-[100%] rounded-2xl bg-[#076407] items-center justify-center font-bold text-4xl [backface-visibility:hidden]'>
                                        <h1>Profile</h1>
                                    </div>

                                    {/*card back*/}
                                    <div className='position: absolute flex w-[100%] h-[100%] rounded-2xl bg-[#aeae0b52] [transform:rotateY(180deg)] [backface-visibility:hidden]'>
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
                    
                    {/*contact us container*/}
                    <div className='flex flex-col w-[100%] h-[30rem] items-center justify-center \
                        bg-dryingClothes bg-no-repeat bg-cover bg-center'>                        
                        <form className={`flex flex-col space-y-4 bg-white opacity-95 py-8 px-6 rounded-xl \
                            w-96 h-auto`}>
                            <h1 className={`font-serif font-bold text-xl p-2 place-self-center`}>Contact Us</h1>

                            <div className='flex flex-col'>
                                <label>Email</label>
                                <input className='bg-white rounded-xl py-1 px-2 border-black border-[1px]' type="text" id="email" name="email" value={email} onChange={ (e) => setEmail(e.target.value)}/>
                            </div>
                            
                            <div className='flex flex-col'>
                                <label>Message</label>
                                <textarea className='bg-white  rounded-xl py-1 px-2 h-40 border-black border-[1px]'  
                                    id="message" name="message" value={message} onChange={ (e) => setMessage(e.target.value)}></textarea>
                            </div>
                            <button className={`border-blue-500 border-[1px] rounded-xl w-28 py-1 place-self-center \
                                text-blue-700 text-sm`} type="submit" onClick={handleSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home