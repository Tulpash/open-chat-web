import { useState } from 'react'

import Picker from 'emoji-picker-react'
import { MdMood } from 'react-icons/md'
import { observer } from 'mobx-react-lite'

import chat from '../stores/Chat.store'

import Button from './Button'

const EmojiPicker = observer(() => {
    const [isShow, setIsShow] = useState(false)

    const onEmojiClick = (event, emojiObject) => {
        chat.addEmoji(emojiObject.emoji)
    }

    return(
        <div className={'relative'}>
            <Button>
                <MdMood className={'text-2xl'} onClick={() => setIsShow(!isShow)} />
            </Button>
            <div className={`absolute ${isShow ? 'block' : 'hidden'} bottom-[70px]`}>
                <Picker onEmojiClick={onEmojiClick} />
            </div>
        </div>
    )
})

export default EmojiPicker