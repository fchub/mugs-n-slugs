const SuccessMakeAccount = () => {

    return (
        <>
            <div className={`position: absolute top-[64px] flex flex-col h-[calc(100%-64px)] w-[100%] justify-center items-center`}>
                <div className={`flex flex-col justify-center items-center w-[100%] h-[100%]\
                    bg-[url('../../src/assets/Algonquin2021CanoeLake.jpeg')] bg-no-repeat bg-cover bg-center`}>
                    <a href='/account/signin'>
                        <div className={`bg-[#ffffffbd] w-80 h-20 rounded-lg flex justify-center items-center text-center \
                            shadow-xl hover:bg-white`}>
                            <h1 className={`font-serif text-xl text-green-700`}>You have successfully made an account! Click here to login</h1>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )

}

export default SuccessMakeAccount