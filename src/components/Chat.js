import { observer } from 'mobx-react-lite'

import chat from '../stores/Chat.store'

import ChatInfo from './ChatInfo'
import ChatList from './ChatList'
import ChatInput from './ChatInput'

const Chat = observer(() => {
    return(
        <div className={`${chat.currentChat == null ? 'hidden' : ''} md:block absolute top-0 left-0 md:relative h-full w-full`}>
            <div className={'w-full h-full bg-green-100'}>
                {
                    chat.currentChat ?
                    <div className={'h-full w-full flex flex-col items-center'}>
                        <ChatInfo />
                        <div className={'w-[90%] md:w-[70%] h-full pb-5 md:pb-10 flex flex-col gap-2'}>
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