import { useCallback, useEffect, useState } from 'react'

import { observer } from 'mobx-react-lite'
import { TailSpin } from 'react-loader-spinner'

import api from '../serviecs/api.service'
import chat from '../stores/Chat.store'

const ChatList = (props) => {
    const [data, setData] = useState([])
    const [isLoading, setisLoading] = useState(false)
    
    useEffect(() => {
        if (props.searchString == null) {
            setData([])
            return
        }
        setisLoading(true)
        api.users.chats(props.searchString)
            .then(res => setData(res))
            .then(() => setisLoading(false))
            .catch(console.log)
    }, [props.searchString])


    return(
        <div className={'flex flex-col'}>
            {
                isLoading && 
                <div className={'w-full flex justify-center items-center'}>
                    <TailSpin color={'#d1d5db'} height={60} width={60} />
                </div>
            }
            {
                !isLoading && (data.length <= 0) &&
                <div className={'p-10 w-full text-gray-700 flex justify-center items-center'}>
                    Ничего не найдено
                </div>
            }
            {
                !isLoading && (data.length > 0) &&
                <ul className={'m-2 text-gray-700'}>
                    {data.map((item, index) => <ChatListRow key={index} data={item} />)}
                </ul>
            }
        </div>
    )
}

const ChatListRow = observer((props) => {
    const user = props.data
    
    const setChat = useCallback((chatId) => {
        chat.currentChat = chatId
    }, [])

    return(
        <li className={`w-full h-[70px] rounded-xl cursor-pointer ${chat.currentChat == user.id ? 'bg-blue-400' : 'bg-transparent hover:bg-gray-100'}  flex items-center`} onClick={() => setChat(user.id)}>
            <div className={'flex justify-center items-center w-[70px] p-2'}>
                <img className={`rounded-full`} src={'https://www.etexstore.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png'} alt={'user'} />
            </div>
            <div className={'flex flex-col gap-0'}>
                <span className={`text-lg ${chat.currentChat == user.id ? 'text-white' : 'text-gray-700'}`}>{user.fullName}</span>
                <span className={`${chat.currentChat == user.id ? 'text-white' : 'text-gray-400'}`}>{user.unique}</span>
            </div>
        </li>
    )
})

export default ChatList