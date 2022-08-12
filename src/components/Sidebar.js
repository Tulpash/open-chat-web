import { useState, useCallback } from 'react'

import { MdMenu } from 'react-icons/md'

import api from '../serviecs/api.service'
import chat from '../stores/Chat.store'

import Input from './Input'
import Button from './Button'
import UserList from './UserList'

const Sidebar = () => {
    const [searchUsers, setSearchUsers] = useState([])

    const loadUsers = useCallback(async (str) => {
        const res = await api.users.search(str)
        console.log(res)
        setSearchUsers(res)
    })
    
    return(
        // shadow-[5px_0px_30px_0px_lightgray]
        <div className={'flex flex-col min-w-[400px]'}>
            <div className={'min-h-[60px] p-2 flex gap-2'}>
                <Input type={'search'} placeholder={'Поиск'} onChange={(e) => loadUsers(e.target.value)} />    
                <Button>
                    <MdMenu className={'text-2xl text-gray-700'}/>
                </Button>            
            </div>
            <div className={'h-full overflow-auto'}>
                <UserList data={searchUsers.length > 0 ? searchUsers : chat._chats.slice()} />
            </div>
        </div>
    )
}

export default Sidebar