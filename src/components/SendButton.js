import { MdSend } from 'react-icons/md'

const SendButton = (props) => {
    return(
        <button className={'p-2 min-h-[50px] min-w-[50px] flex justify-center items-center rounded-full cursor-pointer bg-white text-gray-500 hover:bg-blue-400 hover:text-white active:bg-blue-400 duration-200'} {...props}>
            <MdSend className={'text-2xl'} />
        </button>
    )
}

export default SendButton