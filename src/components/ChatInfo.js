import { MdArrowBack, MdInfoOutline } from 'react-icons/md'
import { observer } from 'mobx-react-lite'

import chat from '../stores/Chat.store'

import Button from './Button'

const ChatInfo = observer(() => {
    return(
        <div className={'w-full p-2 min-h-[50px] bg-white text-gray-700 flex justify-between'}>
            <div className={'flex gap-2 items-center'}>
                <Button onClick={() => chat.id = null}>
                    <MdArrowBack className={'text-xl'} />
                </Button>
                {
                    chat.info && 
                    <>
                        <div className={'flex justify-center items-center w-[50px] h-full  p-2'}>
                            <img className={'rounded-xl h-full object-cover'} src={chat.info.logoUrl}/>
                        </div>
                        <span>{chat.info.name}</span>
                    </>
                }
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