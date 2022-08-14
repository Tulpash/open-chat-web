import { useState, useCallback, useRef } from 'react'

import { observer } from 'mobx-react-lite'

import api from '../serviecs/api.service'
import chat from '../stores/Chat.store'

import Input from './Input'
import MenuDropDown from './MenuDropDown'
import UserList from './UserList'

import '../index.css'

const Sidebar = observer(() => {
    const [searchUsers, setSearchUsers] = useState([])
    const scrollRef = useRef()

    let portion = 0
    let search = null
    let needLoading
    let users = []

    const loadUsers = useCallback(async (str) => {
        portion = 0
        search = str
        const res = await api.users.test(search, portion)
        users = [...res.users]
        setSearchUsers([...users])
        needLoading = res.isNeed
    }, [])

    const scrollLoad = useCallback(async () => {
        const shift = scrollRef.current.scrollHeight - scrollRef.current.scrollTop - scrollRef.current.clientHeight
        if (shift < 0 && needLoading) {
            portion = portion + 1
            const res = await api.users.test(search, portion)
            needLoading = res.isNeed
            users = [...users, ...res.users]
            setSearchUsers([...users])
        }
    }, [portion, search, needLoading])
    
    return(
        <div className={`absolute top-0 left-0 min-w-full min-h-full md:relative md:flex md:flex-col md:min-w-[400px]`}>
            <div className={'min-h-[66px] p-2 fixed md:relative flex gap-2 bg-white w-full'}>
                <Input type={'search'} placeholder={'Поиск'} onChange={(e) => loadUsers(e.target.value)} />    
                <MenuDropDown />
            </div>
            <div className={'pt-[66px] md:pt-0 max-h-screen overflow-auto hide-scroll'} ref={scrollRef} onScroll={() => scrollLoad()}>
                <UserList data={searchUsers} />
            </div>
        </div>
    )
})

export default Sidebar