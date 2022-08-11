import chat from '../stores/Chat.store'

const Chat = () => {
    return(
        <div className={'w-full'}>
            <div className={'w-full h-full'}>
                {
                    chat._currentChat ?
                    <div></div> :
                    <div className={'w-full h-full flex justify-center items-center text-gray-700'}>
                        Чтобы начать общение выберите чат
                    </div>
                }
            </div>
        </div>
    )
}

export default Chat