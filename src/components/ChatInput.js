import { MdMood, MdAttachFile } from 'react-icons/md'

import SendInput from './SendInput'
import SendButton from './SendButton'
import Button from './Button'
import ItemGroup from './ItemGroup'

const ChatInput = () => {
    return(
        <div className={'width-full flex gap-2 min-h-[50px]'}>
            <ItemGroup>
                <Button>
                    <MdAttachFile className={'text-2xl'} />
                </Button>
                <Button>
                    <MdMood className={'text-2xl'} />
                </Button>
                <SendInput />
                <SendButton />
            </ItemGroup>           
        </div>
    )
}

export default ChatInput