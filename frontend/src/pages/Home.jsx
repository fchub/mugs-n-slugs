import { useState, useEffect } from 'react' //saves values
import axios from 'axios'
import React from 'react'

const Home = () => {
    //USEEFFECT ALWAYS processes first, it must run first by the time the application loads
    //preloads, fetches data, using below fetchData
    //known bug - it runs it twice, so to avoid...let processing...
    useEffect( () => {
        let processing = true
        axiosFetchData(processing)
        return () => {
            processing = false
        }
    },[])
    
    //For the cards
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

    //FOR CONTACT US
        //now saving the value that will be selected by the user
    const [email, setEmail] = useState('') //default value?
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const [selectValue, setSelectValue] = useState('')

    //saving the value brought in by JSON Placeholder
    const [selectData, setSelectData] = useState([])

    //fetch using React fetch
    // const fetchData = async(processing) => {
    //     //await for fetch to complete, at that url...can use our OWN DATABASE NOW!
    //     await fetch('https://jsonplaceholder.typicode.com/users')
    //     //then converts to json
    //     .then(res => res.json())
    //     //sets to selectData so we can use it, now the value is selectData
    //     .then(data => {
    //         if (processing) {
    //             setSelectData(data)
    //         }
    //     })
    //     .catch(err => console.log(err))
    // }

    //FETCH USING AXIOS
    //async ensures you are able to complete rest of code while waiting to do certain code (like fetch)
    const axiosFetchData = async(processing) => {
         //await for axios to complete, at that url...can use our OWN DATABASE NOW!
         //much clearer, and .get vs .post
         //NOTE .post is used to submit forms to the server, while .get RETRIEVES info from server
         //the post part is a ALOT less in axios, and runs a bit faster
        //  const options = {
        //     email: email,
        //     selectValue: selectValue,
        //     message: message,
        //  }
         await axios.get('http://localhost:4000/users') //now using OUR data
         //no need to convert to json!
         //sets to selectData so we can use it, now the value is selectData
         .then(res => {
             if (processing) {
                 setSelectData(res.data) //can directly go to res.data
             }
         })
         .catch(err => console.log(err))
    }

    //POSTING data now
    const axiosPostData = async() => {
        const postData = {
            email: email,
            website: selectValue,
            message: message
        }

        await axios.post('http://localhost:4000/contact', postData)
        .then(res => setError(<p className={`text-sm font-light text-green-700 place-self-center`}>{res.data}</p>))//confirms that the message was saved
    }

    //putting all that information into this select drop-down menu
    const SelectDropdown = () => {
        return (
            //give a value, every time it changes, it remembers that value, looks for  it in options, then SETS it
            <select className='bg-white rounded-xl border-black border-[1px] py-1 px-2 text-sm font-light' 
                value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
                {
                    //question mark ensures/checks that there is data
                    selectData?.map( (item, index) => (
                        //item.website refers to the data - item = person, website
                        <option value={item.website} key={item.website}>{item.website}</option>
                    ))
                }
            </select>
        )
    }

    //every change we make to email, it resets and sets email to the above variable email, saved to Value={email}
    const handleSubmit = (e) => {
        e.preventDefault() //says that we PREVENT default submit action, and that we do our own thing
        
        //error handling
        if (!message || !email) {
            setError(<p className='text-sm font-light text-red-500 place-self-center'>Message and/or email is empty. Please fill both in.</p>)
        } else {
            setError('')
        }

        setError('')
        axiosPostData()
    }
    
    return (
        <>
            <div className='position: absolute top-[64px] font-serif w-[100%]'> {/*main content container*/}
                {/*home Content container*/}
                <div className="flex flex-col items-center w-[100%]">
                    {/*title Container*/}
                    <div className={`flex flex-col w-[100%] h-96 items-center justify-start \
                    bg-unpackedGround bg-no-repeat bg-cover bg-center pt-16`}>
                        <h1 className="text-[35px] text-white">Welcome to MugsNSlugs!</h1>
                        <h2 className='text-white'>We make packing lists for camping easy!</h2>
                    </div>

                    {/*Card Container*/}
                    <div id='home_info' className='flex items-center justify-center flex-col w-[100%] bg-snail bg-repeat'>
                        
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
                                        <h1 className='text-golden-yellow'>Info</h1>
                                    </div>

                                    {/*card back*/}
                                    <div className='position: absolute flex w-[100%] h-[100%] rounded-2xl bg-[#aeae0b52] [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                                        <p>Don't need to figure out who has what item! Have you collaborators directly
                                            plug in their own have and needs list!
                                        </p>
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
                                        <h1 className='text-golden-yellow'>How it works</h1>
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
                        <div className='flex flex-row items-center justify-center w-[90%] pt-[1.5rem] pb-16'>
                            
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
                                        <h1 className='text-golden-yellow'>What it looks like</h1>
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
                                        <h1 className='text-golden-yellow'>Collaborate</h1>
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
                    <div className='flex flex-col w-[100%] h-[40rem] items-center justify-center \
                        bg-dryingClothes bg-no-repeat bg-cover bg-center' id="contact-us">                        
                        <form className={`flex flex-col space-y-4 bg-white opacity-95 py-8 px-6 rounded-xl \
                            w-96 h-auto backdrop-blur-lg`}>
                            <h1 className={`font-serif font-bold text-3xl p-2 place-self-center`}>Contact Us</h1>

                            <div className='flex flex-col'>
                                <label>Email</label>
                                <input className='bg-white rounded-xl py-1 px-2 border-black border-[1px]' type="text" id="email" name="email" value={email} onChange={ (e) => setEmail(e.target.value)}/>
                            </div>

                            <div className='flex flex-col'>
                                <label>How did you hear about us?</label>
                                {/*uses data from JSON Placeholder*/}
                                <SelectDropdown />
                            </div>
                            
                            <div className='flex flex-col'>
                                <label>Message</label>
                                <textarea className='bg-white  rounded-xl py-1 px-2 h-40 border-black border-[1px] text-sm'  
                                    id="message" name="message" value={message} onChange={ (e) => setMessage(e.target.value)}></textarea>
                                {error}
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