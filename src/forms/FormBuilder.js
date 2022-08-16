import { useState } from 'react'

import { MdError } from 'react-icons/md'

export const Form = (props) => {
    return(
        <div className={'flex flex-col gap-8'}>
            {props.children}
        </div>
    )
}

export const FormHeader = (props) => {
    return(
        <div className={'text-center'}>
            <span className={'text-2xl font-bold'}>
                {props.children}
            </span>
        </div>
    )
}

export const FormInputGroup = (props) => {
    return(
        <div className={'flex flex-col gap-2 w-full items-center'}>
            {props.title && <span className={'w-full text-left text-gray-500'}>{props.title}</span>}
            {props.children}
        </div>
    )
}

export const FormRow = (props) => {
    return(
        <div className={`min-h-[50px] w-full flex items-center border-2 justify-center rounded-xl bg-transparent hover:bg-gray-50 ${!props.error && 'border-gray-100 [&:hover>*]:placeholder-gray-500 [&>svg]:text-gray-400 hover:border-blue-400'} ${props.error && '[&>input]:placeholder-red-600 text-red-600 [&>svg]:text-red-600 hover:border-red-600'} duration-200 [&>svg]:text-2xl [&>svg]:w-[40px]`}>
            {props.children}
        </div>
    )
}

export const FormInput = (props) => {
    return(
        <input className={`p-2 bg-transparent w-full text-gray-700`} {...props} />
    )
}

export const FormImage = (props) => {
    const [url, setURL] = useState()
    
    return(
        <div className={`h-[200px] w-[200px] rounded-xl border-2 border-gray-100 hover:border-blue-400 duration-200 bg-center bg-cover`}  style={{ backgroundImage: `url(${url})` }}>
            <input 
                type={'file'} 
                className={'cursor-pointer opacity-0 w-full h-full'} 
                onChange={e => setURL(URL.createObjectURL(e.target.files[0]))}               
            />
        </div>
    )
}

export const FormTags = (props) => {
    const [data, setData] = useState([])
    const [searchData, setSeacrhData] = useState([])
    const items = [
        { text: 'Test' },
        { text: 'Test' },
        { text: 'Test' },
        { text: 'Test' },
        { text: 'Test' },
        { text: 'Test' },
        { text: 'Test' },
        { text: 'Test' },
        { text: 'Test' },
        { text: 'Test' },
        { text: 'Test' },
        { text: 'Test' },
        { text: 'Test' },
        { text: 'Test' }
    ]

    return(
        <div className={'relative min-h-[50px] w-full p-2 flex gap-2 break-words items-center rounded-xl border-2 border-gray-300 hover:border-blue-400'}>
            {
                data && data.length && data.length > 0 &&
                <div className={'flex gap-2'}>
                    {data.map((item, index) => <span className={'px-2 rounded-xl bg-blue-200 text-blue-600'} key={index}>{item.text}</span>)}
                </div>
            }
            <input className={'w-full min-w-[100px]'} onChange={(e) => { const a = items.filter(item => item.text.includes(e.target.value)); setSeacrhData(a); console.log('in ' + a) }} />
            {
                searchData && searchData.length && searchData.length > 0 &&
                <div className={'absolute top-0 left-0 w-full max-h-[100px] rounded-xl shadow-lg flex flex-col'}>
                    {searchData.map((item, index) => <div key={index} onClick={() => { setData([...data, items[index]]); setSeacrhData([]) }} >{item.text}</div>)}
                </div>
            }
        </div>
    )
}

export const FormButton = (props) => {
    return(
        <button className={'p-2 rounded-xl border-2 border-blue-400 bg-blue-400 text-white hover:bg-blue-50 hover:text-blue-400 duration-200 cursor-pointer'} {...props} >{props.children}</button>
    )
}

export const FormErrorsBlock = (props) => {
    return(
        <div className={'p-2 bg-transparent rounded-md flex flex-col gap-2'}>
            {props.children}
        </div>
    )
}

export const FormError = (props) => {
    return(
        <div className={'flex justify-center items-center text-red-600'}>
            <MdError className={'text-2xl w-[40px]'}/>
            <span className={'w-full'}>{props.children}</span>
        </div>
    )
}



//Default
const FormBuilder = {
    Form: Form,
    Header: FormHeader,
    InputGroup: FormInputGroup,
    Row: FormRow,
    Input: FormInput,
    Image: FormImage,
    Tags: FormTags,
    Button: FormButton,
    Errors: FormErrorsBlock,
    Error: FormError
}

export default FormBuilder