import { observer } from 'mobx-react-lite'

import chat from '../stores/Chat.store'
import user from '../stores/User.store'

const ChatView = observer(() => {
    return(
        <div className={'w-full h-full flex flex-col gap-2 justify-end'}>
            {
                chat.info &&
                chat.info.messages.slice().map((item) => 
                    <div key={item.id} className={`${user.id === item.userId ? 'bg-blue-100' : 'bg-white'} rounded-xl p-2 w-fit flex flex-col`}>
                        <span className={'text-gray-700'}>{item.text}</span>
                        <span className={'text-gray-300 text-sm'}>{item.sendTime}</span>
                    </div>)
            }
        </div>
    )
})

export default ChatView