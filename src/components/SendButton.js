import { MdSend } from 'react-icons/md'

const SendButton = (props) => {
    return(
        <button className={'p-2 min-h-[55px] min-w-[55px] flex justify-center items-center rounded-full cursor-pointer bg-gray-100 text-gray-500 hover:bg-blue-400 hover:text-white active:bg-blue-200 duration-200'} {...props}>
            <MdSend className={'text-2xl'} />
        </button>
    )
}

export default SendButton