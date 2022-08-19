import { useState } from 'react'

import Button from './Button'

const DropDown = (props) => {
    const [isShow, setShow] = useState(false)
    
    return(
        <div className={'relative'}>
            <Button onClick={() => setShow(!isShow)}>
                {props.icon}
            </Button>
            <div className={`${!isShow && 'hidden'} p-2 z-50 absolute top-[60px] right-0 min-w-[300px] rounded-xl bg-white flex flex-col shadow-[0_0_20px_0_rgba(0,0,0,0.1)] duration-200`}>
                {props.data.map((item, index) => <DropDownButton key={index} click={item.click} icon={item.icon} text={item.text} />)}
            </div>
        </div>
    )
}

const DropDownButton = (props)=> {
    return(
        <button onClick={() => props.click()} className={'rounded-md p-2 flex items-center gap-2 w-full bg-transparent hover:bg-gray-100 active:bg-gray-200'}>
            {props.icon}
            {props.text}
        </button>
    )
}

export default DropDown