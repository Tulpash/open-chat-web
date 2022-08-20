import Moment from 'react-moment'

const UserMessage = (props) => {
    const message = props.message
    
    return (
        <div className={'w-full flex justify-end'}>
            <div className={'bg-white rounded-xl p-2 w-fit max-w-[90%] flex flex-col'}>
                <span className={'text-gray-700'}>{message.text}</span>
                <span className={'text-gray-400 text-sm text-right'}>
                    <Moment format={'YYYY.MM.DD HH:mm'} date={message.sendTime} />
                </span>
            </div>
        </div>
    )
}

export default UserMessage