import { useState } from 'react'

import { MdMood, MdAttachFile } from 'react-icons/md'

import api from '../serviecs/api.service'

import SendInput from './SendInput'
import SendButton from './SendButton'
import Button from './Button'
import ItemGroup from './ItemGroup'

const ChatInput = () => {
    const [text, setText] = useState('')

    return(
        <div className={'width-full flex gap-2 min-h-[50px]'}>
            <ItemGroup>
                <Button>
                    <MdAttachFile className={'text-2xl'} />
                </Button>
                <Button>
                    <MdMood className={'text-2xl'} />
                </Button>
                <SendInput value={text} onInput={(e) => setText(e.target.value)} />
                <SendButton onClick={async () => await api.chat.sendTextMessage(text)} />
            </ItemGroup>           
        </div>
    )
}

export default ChatInput