import { MdSend, MdMood, MdAttachFile } from 'react-icons/md'

import Input from './Input'
import SendButton from './SendButton'
import Button from './Button'

const ChatInput = () => {
    return(
        <div className={'width-full flex gap-2 min-h-[55px]'}>
            <Button>
                <MdAttachFile className={'text-2xl'} />
            </Button>
            <Button>
                <MdMood className={'text-2xl'} />
            </Button>
            <Input />
            <SendButton />
        </div>
    )
}

export default ChatInput