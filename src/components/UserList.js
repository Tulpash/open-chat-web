import { useCallback } from 'react'

import { observer } from 'mobx-react-lite'

import chat from '../stores/Chat.store'

const UserList = (props) => {
    const data = props.data

    return(
        <>
            {
                data.length > 0 ?
                <ul className={'p-2 text-gray-700'}>
                    {data.map((item) => <UserListRow key={item.id} data={item} />)}
                </ul> :
                <div className={'p-10 h-full w-full text-gray-700 flex justify-center items-center'}>
                    Что бы создать чат найдите человека и напишите ему
                </div>
            }
        </>
    )
}

const UserListRow = observer((props) => {
    const user = props.data
    
    const setChat = useCallback((chatId) => {
        chat.currentChat = chatId
    }, [])

    return(
        <li className={`w-full h-[70px] rounded-xl cursor-pointer ${chat.currentChat == user.id ? 'bg-blue-400' : 'bg-transparent hover:bg-gray-100'} duration-200 flex items-center`} onClick={() => setChat(user.id)}>
            <div className={'flex justify-center items-center w-[70px] p-2'}>
                <img className={`rounded-full`} src={'https://www.etexstore.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png'} alt={'user'} />
            </div>
            <div className={'flex flex-col gap-0'}>
                <span className={`text-lg ${chat.currentChat == user.id ? 'text-white' : 'text-gray-700'}`}>{user.name}</span>
                <span className={`${chat.currentChat == user.id ? 'text-white' : 'text-gray-400'}`}>{user.unique}</span>
            </div>
        </li>
    )
})

export default UserList