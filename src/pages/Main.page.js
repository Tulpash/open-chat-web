import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'

const MainPage = () => {
    return(
        <>
            <div className={'flex bg-gray-100 h-screen w-screen'}>
                <Sidebar />
                <Chat />
            </div>
        </>
    )
}

export default MainPage