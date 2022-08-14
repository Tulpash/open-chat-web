import { useState, useCallback } from 'react'

import { MdMenu } from 'react-icons/md'
import { observer } from 'mobx-react-lite'

import api from '../serviecs/api.service'
import chat from '../stores/Chat.store'

import Input from './Input'
import MenuDropDown from './MenuDropDown'
import UserList from './UserList'

import '../index.css'

const Sidebar = observer(() => {
    const [searchUsers, setSearchUsers] = useState([])

    const loadUsers = useCallback(async (str) => {
        const res = await api.users.search(str)
        setSearchUsers(res)
    })
    
    return(
        <div className={`absolute top-0 left-0 min-w-full min-h-full md:relative md:flex md:flex-col md:min-w-[400px]`}>
            <div className={'min-h-[66px] p-2 fixed md:relative flex gap-2 bg-white w-full'}>
                <Input type={'search'} placeholder={'Поиск'} onChange={(e) => loadUsers(e.target.value)} />    
                <MenuDropDown />
            </div>
            <div className={'pt-[66px] md:pt-0 max-h-screen overflow-auto hide-scroll'}>
                <UserList data={searchUsers.length > 0 ? searchUsers : chat._chats.slice()} />
            </div>
        </div>
    )
})

export default Sidebar