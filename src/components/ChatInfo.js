import { MdArrowBack, MdInfoOutline } from 'react-icons/md'
import { observer } from 'mobx-react-lite'

import chat from '../stores/Chat.store'

import Button from './Button'

const ChatInfo = observer(() => {
    return(
        <div className={'w-full p-2 min-h-[50px] bg-white text-gray-700 flex justify-between'}>
            <div>
                <Button onClick={() => chat.chatId = null}>
                    <MdArrowBack className={'text-xl'} />
                </Button>
            </div>
            <div>
                <Button>
                    <MdInfoOutline className={'text-xl'} />
                </Button>
            </div>
        </div>
    )
})

export default ChatInfo