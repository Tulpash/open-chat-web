import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'

const ChatPage = () => {
    return(
        <>
            <div className={'relative md:flex bg-white h-screen w-screen'}>
                <Sidebar />
                <Chat />
            </div>
        </>
    )
}

export default ChatPage