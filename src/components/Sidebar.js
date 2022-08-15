import { useState } from 'react'

import { observer } from 'mobx-react-lite'

import Input from './Input'
import MenuDropDown from './MenuDropDown'
import LocalChatList from './LocalChatList'
import GlobalChatList from './GlobalChatList'

import '../index.css'

const Sidebar = observer(() => {
    const [searchString, setSearchString] = useState('')

    return(
        <div className={`absolute top-0 left-0 min-w-full min-h-full md:relative md:flex md:flex-col md:min-w-[350px]`}>
            <div className={'min-h-[66px] p-2 fixed md:relative flex gap-2 bg-white w-full'}>
                <Input type={'search'} placeholder={'Поиск'} onChange={(e) => setSearchString(e.target.value)} />      
                <MenuDropDown />
            </div>
            <div className={'pt-[66px] md:pt-0 min-h-[calc(100%-66px)] overflow-auto hide-scroll p-2'}>
                <LocalChatList searchString={searchString} />  
                <GlobalChatList searchString={searchString} />       
            </div>
        </div>
    )
})

export default Sidebar