const UserMessage = (props) => {
    const message = props.message
    
    return (
        <div className={'w-full flex justify-end'}>
            <div className={'bg-blue-100 rounded-xl p-2 w-fit flex flex-col'}>
                <span className={'text-gray-700'}>{message.text}</span>
                <span className={'text-gray-300 text-sm'}>{message.sendTime}</span>
            </div>
        </div>
    )
}

export default UserMessage