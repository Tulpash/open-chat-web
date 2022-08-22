import { observer } from 'mobx-react-lite'

import UserMessage from './UserMessage'
import OtherMessage from './OtherMessage'

import chat from '../stores/Chat.store'
import user from '../stores/User.store'

const ChatView = observer(() => {
    return(
        <div className={'overflow-y-scroll flex flex-col gap-2 max-h-[calc(100%-40px)] min-h-[calc(100%-40px)] justify-end hide-scroll'}>
            {
                chat.info &&
                chat.info.messages.slice().map((item) => 
                    user.id === item.userId ?
                    <UserMessage message={item} key={item.id} /> :    
                    <OtherMessage message={item} key={item.id} />
                )
            }
        </div>
    )
})

export default ChatView