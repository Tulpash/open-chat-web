import { observer } from 'mobx-react-lite'

import chat from '../stores/Chat.store'

import ChatList from './ChatList'
import ChatInput from './ChatInput'

const Chat = observer(() => {
    return(
        <div className={'w-full'}>
            <div className={'w-full h-full bg-white'}>
                {
                    chat._currentChat ?
                    <div className={'h-full w-full flex flex-col items-center'}>
                        <div className={'w-[70%] h-full pb-10 flex flex-col gap-2'}>
                            <ChatList />
                            <ChatInput />
                        </div>
                    </div> :
                    <div className={'w-full h-full flex justify-center items-center text-gray-700'}>
                        Чтобы начать общение выберите чат
                    </div>
                }
            </div>
        </div>
    )
})

export default Chat