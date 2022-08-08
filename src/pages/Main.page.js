import { useState, useCallback } from 'react'

import api from '../serviecs/api.service'

const MainPage = () => {
    const [su, setSU] = useState([])

    const loadUsers = useCallback((str) => {
        api.users.search(str).catch(console.log)
    })
    
    return(
        <>
            <div className={'flex bg-gray-200 h-screen w-screen'}>
                <div className={'w-1/4 flex flex-col border-r-2 border-gray-300'}>
                    <div className={'w-full p-2 min-h-[50px]'}>
                        <input type={'search'} className={'w-full h-full p-2 rounded-md bg-gray-300'} placeholder={'Поиск'} onChange={(e) => loadUsers(e.target.value)} />
                    </div>
                    <div className={'w-full h-full'}>

                    </div>
                </div>
                <div className={'w-3/4 flex flex-col'}>
                    <div className={'w-full min-h-[50px]'}>

                    </div>
                    <div className={'w-full h-full bg-gray-300'}>

                    </div>
                    <div className={'w-full min-h-[50px]'}>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage