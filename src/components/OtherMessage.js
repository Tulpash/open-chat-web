import Moment from 'react-moment'

const OtherMessage = (props) => {
    const message = props.message
    
    return (
        <div className={'w-full flex justify-start'}>
            <div className={'bg-gray-100 rounded-xl p-2 w-fit max-w-[90%] flex flex-col'}>
                <span className={'text-gray-700'}>{message.text}</span>
                <span className={'text-gray-500 text-sm'}>
                    <Moment format={'YYYY.MM.DD HH:mm'} date={message.sendTime} />
                </span>
            </div>
        </div>
    )
}

export default OtherMessage