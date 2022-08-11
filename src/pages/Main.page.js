import { useState, useCallback } from 'react'

import { MdSettings } from 'react-icons/md'

import api from '../serviecs/api.service'
import chat from '../stores/Chat.store'
import Input from '../components/Input'
import Button from '../components/Button'
import UserList from '../components/UserList'

const MainPage = () => {
    const [searchUsers, setSearchUsers] = useState([])

    const loadUsers = useCallback(async (str) => {
        const res = await api.users.search(str)
        console.log(res)
        setSearchUsers(res)
    })
    
    return(
        <>
            <div className={'flex bg-gray-100 h-screen w-screen'}>
                <div className={'w-1/4 flex flex-col border-r-2 border-gray-200'}>
                    <div className={'w-full p-2 min-h-[50px] flex gap-2'}>
                        <Input type={'search'} placeholder={'Поиск'} onChange={(e) => loadUsers(e.target.value)} />
                        <Button>
                            <MdSettings />
                        </Button>
                    </div>
                    <div className={'w-full h-full'}>
                        <UserList data={searchUsers.length > 0 ? searchUsers : chat._chats.slice()}/>
                    </div>
                </div>
                <div className={'w-3/4 flex flex-col'}>
                    <div className={'w-full min-h-[50px]'}>

                    </div>
                    <div className={'relative w-full h-full bg-gray-200'}>
                        
                    </div>
                    <div className={'w-full min-h-[50px]'}>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage