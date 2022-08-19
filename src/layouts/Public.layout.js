import { useNavigate } from 'react-router-dom'

import { MdArrowBack } from 'react-icons/md'

import Button from '../components/Button'

const PublicLayout = (props) => {
    const navigate = useNavigate()

    return(
        <div className={'w-screen h-screen flex flex-col items-center'}>
            <div className={'w-full md:w-[80%] min-h-[70px] flex items-center'}>
                <Button onClick={() => navigate(-1)}>
                    <MdArrowBack className={'text-2xl text-gray-700'} />
                </Button>
            </div>
            <div className={'w-[90%] md:w-[70%] min-h-[calc(100%-70px)] flex justify-center'}>
                {props.children}
            </div>
        </div>
    )
}

export default PublicLayout