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
    const data = props.data
    
    const setChat = useCallback(async (chatId) => {
        chat.id = chatId
        const response = await api.chat.info(chatId) 
        chat.info = response
        console.log(response)
    }, [])

    return(
        <li className={`w-full h-[70px] rounded-xl cursor-pointer ${chat.id == data.id ? 'bg-blue-400' : 'bg-transparent hover:bg-gray-100'}  flex items-center`} onClick={() => setChat(data.id)}>
            <div className={'flex justify-center items-center w-[70px] h-full  p-2'}>
                <img className={`rounded-xl h-full object-cover`} src={data.logoUrl} alt={'user'} />
            </div>
            <div className={'flex flex-col gap-0'}>
                <span className={`text-lg ${chat.id == data.id ? 'text-white' : 'text-gray-700'}`}>{data.name}</span>
                <span className={`${chat.id == data.id ? 'text-white' : 'text-gray-400'}`}>{data.lastMessage}</span>
            </div>
        </li>
    )
})

export default ChatList