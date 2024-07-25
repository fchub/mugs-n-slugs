import { useParams } from 'react-router-dom'
import SideNav from '../../components/SideNav.jsx'

const ListsDetails = () => {
    const params = useParams()

    return (
        <>
            <SideNav />
            <div className={`position: absolute top-[64px] font-serif w-[100%] \
                flex flex-col items-center justify-center`}> {/*main content container*/}
                {/*past lists container*/}
                <div className={`flex flex-row justify-center items-center`}>
                    <div className={`w-60 h-60 flex flex-col items-center`}>
                        <p>This list is called {params.id}</p>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default ListsDetails