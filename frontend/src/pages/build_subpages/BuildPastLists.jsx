import SideNav from '../../components/SideNav.jsx'
import ClipPic from '../../assets/clipboard-outline-filled.png'

const BuildPastLists = () => {
    return (
        <>
            <SideNav />
            <div className={`position: absolute top-[64px] font-serif w-[100%] \
                flex flex-col items-center justify-center`}> {/*main content container*/}
                {/*past lists container*/}
                <div className={`flex flex-row justify-center items-center p-20 space-x-20`}>
                    <div className={`w-60 h-60 flex flex-col items-center`}>
                        <a href='/build/pastlists/details/1'>
                            <img src={ClipPic} alt="ListPic" />
                        </a>
                        <p className='text-xl font-medium'>List 1</p>
                    </div>
                    <div className={`w-60 h-60 flex flex-col items-center`}>
                        <a href='/build/pastlists/details/2'>
                            <img src={ClipPic} alt="ListPic" />
                        </a>
                        <p className='text-xl font-medium'>List 2</p>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default BuildPastLists