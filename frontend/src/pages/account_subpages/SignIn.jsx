import React from 'react'

const SignIn = () => {
    return (
        <>
            <div className={`flex position: absolute top-[64px] justify-center items-center h-[100%] w-[100%]`}>
                <form className = {`flex flex-col w-96 rounded-xl shadow-black shadow-xl \
                    font-serif py-8 px-6 h-auto space-y-4`}>
                    <h1 className={`font-serif font-bold text-3xl p-2 place-self-center`}>Sign in</h1>

                    <div className='flex flex-col'>
                        <label>User Email</label>
                        <input className='bg-white rounded-xl py-1 px-2 border-black border-[1px]'/>
                    </div>

                    <div className='flex flex-col'>
                        <label>Password</label>
                        <input className='bg-white rounded-xl py-1 px-2 border-black border-[1px]' />
                    </div>
                    <button className={`border-blue-500 border-[1px] rounded-xl w-28 py-1 place-self-center \
                        text-blue-700 text-sm`}>
                        Submit
                    </button>
                </form>

                
            </div>
        </>
    )
}

export default SignIn