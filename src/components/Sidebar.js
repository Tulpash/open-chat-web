import { useState, useCallback } from 'react'

import { MdMenu } from 'react-icons/md'
import { observer } from 'mobx-react-lite'

import api from '../serviecs/api.service'
import chat from '../stores/Chat.store'

import Input from './Input'
import Button from './Button'
import UserList from './UserList'

import '../index.css'

const Sidebar = observer(() => {
    const [searchUsers, setSearchUsers] = useState([])

    const loadUsers = useCallback(async (str) => {
        const res = await api.users.search(str)
        setSearchUsers(res)
    })
    
    return(
        // shadow-[5px_0px_30px_0px_lightgray]
        <div className={`absolute top-0 left-0 min-w-full min-h-full md:relative md:flex md:flex-col md:min-w-[400px]`}>
            <div className={'min-h-[50px] m-2 flex gap-2'}>
                <Input type={'search'} placeholder={'Поиск'} onChange={(e) => loadUsers(e.target.value)} />    
                <Button>
                    <MdMenu className={'text-2xl text-gray-700'}/>
                </Button>           
            </div>
            <div className={'h-full overflow-auto hide-scroll'}>
                <UserList data={searchUsers.length > 0 ? searchUsers : chat._chats.slice()} />
            </div>
        </div>
    )
})

export default Sidebar