import { MdGroup, MdChat } from 'react-icons/md'

import chat from '../stores/Chat.store'

const ChatInfoPage = () => {
    return(
        <div className={'flex flex-col gap-4 w-full items-center'}>
            <div className={'flex justify-center'}>
                <img className={'w-[300px] h-[300px] border-2 border-gray-100 rounded-xl'} src={chat.info.logoUrl} />
            </div>
            <div className={'text-center text-4xl text-gray-700'}>
                {chat.info.name}
            </div>
            <div className={'flex justify-evenly w-[400px]'}>
                <div className={'flex gap-4 text-gray-700 text-2xl items-center'}>
                    <MdGroup className={'text-2xl'} />
                    {chat.info.users.length}
                </div>
                <div className={'flex gap-4 text-gray-700 text-2xl items-center'}>
                    <MdChat className={'text-2xl'} />
                    {chat.info.messages.length}
                </div>
            </div>
            <div className={'p-2 flex flex-col border-2 border-gray-100 rounded-xl w-[400px] max-h-[600px]'}>
                {chat.info.users.slice().map((user) =>
                    <div key={user.id} className={'p-2 flex justify-evenly rounded-xl cursor-pointer hover:bg-gray-50 duration-200'}>
                        <span className={'w-3/4'}>{user.fullName}</span>
                        <span className={'w-1/4'}>{user.uniqueName}</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ChatInfoPage