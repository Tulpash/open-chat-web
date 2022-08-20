import { useState } from 'react'

import { MdAttachFile } from 'react-icons/md'
import { observer } from 'mobx-react-lite'

import chat from '../stores/Chat.store'

import api from '../serviecs/api.service'

import Picker from './EmojiPicker'
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
                <Picker />
                <SendInput value={chat.currentMessageText} onInput={(e) => chat.setMessageText(e.target.value)} />
                <SendButton onClick={async () => await api.chat.sendTextMessage()} />
            </ItemGroup>           
        </div>
    )
})

export default ChatInput