import { MdMood, MdAttachFile } from 'react-icons/md'

import { observer } from 'mobx-react-lite'

import chat from '../stores/Chat.store'

import SendInput from './SendInput'
import SendButton from './SendButton'
import Button from './Button'
import ItemGroup from './ItemGroup'

const ChatInput = observer(() => {
    return(
        <div className={'width-full flex gap-2 min-h-[50px]'}>
            <ItemGroup>
                <Button>
                    <MdAttachFile className={'text-2xl'} />
                </Button>
                <Button>
                    <MdMood className={'text-2xl'} />
                </Button>
            </ItemGroup>
            <SendInput />
            <SendButton onClick={() => chat.currentChat = null} />
        </div>
    )
})

export default ChatInput