import { useCallback } from 'react'

import { observer } from 'mobx-react-lite'

import chat from '../stores/Chat.store'

const UserList = (props) => {
    const data = props.data

    return(
        <>
            {
                data.length > 0 ?
                <ul className={'p-2 divide-y-0  divide-gray-200 text-gray-700'}>
                    {data.map((item) => <UserListRow key={item.id} data={item} />)}
                </ul> :
                <div className={'p-10 h-full w-full text-gray-600 flex justify-center items-center'}>
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
        <li className={`w-full h-[70px] rounded-md cursor-pointer ${chat.currentChat == user.id ? 'bg-blue-100' : 'bg-transparent hover:bg-gray-200'} duration-200 flex items-center`} onClick={() => setChat(user.id)}>
            <div className={'flex justify-center items-center w-[70px] p-2'}>
                <img className={`rounded-full border-2 ${chat.currentChat == user.id ? 'border-gray-400' : 'border-gray-200'}`} src={'https://www.etexstore.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png'} alt={'user'} />
            </div>
            <div className={'flex flex-col gap-0'}>
                <span className={'text-lg'}>{user.name}</span>
                <span className={'text-gray-400'}>{user.unique}</span>
            </div>
            {/* <div className={'flex justify-center items-center p-1 bg-gray-300 rounded-md'}>
                {user.notifications}
            </div> */}
        </li>
    )
})

export default UserList