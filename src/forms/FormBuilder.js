import { useState } from 'react'

import { MdError, MdPerson } from 'react-icons/md'

import api from '../serviecs/api.service'

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
    const [searchData, setSearchData] = useState([])

    const loadSearchUsers = async (str) => {
        if (!str) {
            setSearchData([])
            return
        }
        const res = await api.users.search(str)
        setSearchData(res)
        console.log(res)
    }

    const addSearchUser = (item) => {
        setData([...data, item])
        setSearchData([])
    }

    const removeSearchUser = (id) => {
        const tmp = data.filter(x => x.id !== id)
        setData([...tmp]) 
    }

    return(
        <div className={'relative min-h-[50px] w-full p-2 flex flex-col gap-2 justify-center rounded-xl border-2 border-gray-100 hover:border-blue-400'}>
            {
                data.length > 0 &&
                <div className={'flex gap-2'}>
                    {data.map((item, index) => 
                        <div
                            className={'px-2 rounded-xl bg-blue-200 text-blue-600 cursor-pointer'} 
                            key={index}
                            onClick={() => removeSearchUser(item.id)}>
                                {item.fullName}
                            </div>)}
                </div>
            }
            <div className={'w-full flex gap-2 justify-center'}>
                <MdPerson className={'text-2xl text-gray-400'} />
                <input className={'w-full'} placeholder={'Найти пользователя'} onChange={(e) => loadSearchUsers(e.target.value)} />
            </div>
            {
                searchData.length > 0 &&
                <div className={'absolute top-[55px] left-0 w-full min-h-[100px] max-h-[300px] p-2 overflow-auto shadow-[0_0_20px_0_rgba(0,0,0,0.1)] bg-white rounded-xl flex flex-col gap-0 hide-scroll'}>
                    {searchData.map((item, index) => 
                        <div 
                            onClick={() => addSearchUser(item)} 
                            key={index} 
                            className={'p-2 rounded-xl hover:bg-gray-100 active:bg-blue-400 active:text-white cursor-pointer flex items-center gap-4'}>
                                <span>{item.fullName}</span> 
                                <span className={'text-gray-400'}>{item.unique}</span>
                            </div>)}
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