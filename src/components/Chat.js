import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'

import chat from '../stores/Chat.store'

import ChatInfo from './ChatInfo'
import ChatView from './ChatView'
import ChatInput from './ChatInput'

const Chat = observer(() => {
    const { t } = useTranslation()
    return(
        <div className={`${chat.id == null ? 'hidden' : ''} md:block absolute top-0 left-0 md:relative h-full w-full`}>
            <div className={'w-full h-full bg-green-100'}>
                {
                    chat.id ?
                    <div className={'h-full w-full flex flex-col gap-2 items-center'}>
                        <ChatInfo />
                        <div className={'w-[90%] md:w-[70%] h-full pb-10 flex flex-col gap-2'}>
                            <ChatView />
                            <ChatInput />
                        </div>
                    </div> :
                    <div className={'w-full h-full flex justify-center items-center text-gray-700'}>
                        {t('messages.empty_chat')}
                    </div>
                }
            </div>
        </div>
    )
})

export default Chat