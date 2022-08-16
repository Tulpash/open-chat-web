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
        <div className={'flex flex-col gap-0 divide-y-2 divide-gray-300'}>
            {props.children}
        </div>
    )
}

export const FormRow = (props) => {
    return(
        <div className={`flex items-center justify-center first:rounded-t-md last:rounded-b-md bg-transparent hover:bg-gray-100 ${!props.error && '[&:hover>*]:text-gray-500 [&:hover>*]:placeholder-gray-500'} ${props.error && '[&>input]:placeholder-red-600 text-red-600'} ${props.error ? '[&>svg]:text-red-600' : '[&>svg]:text-gray-400'} duration-200 [&>svg]:text-2xl [&>svg]:w-[40px]`}>
            {props.children}
        </div>
    )
}

export const FormInput = (props) => {
    return(
        <input className={`p-2 bg-transparent w-full`} {...props} />
    )
}

export const FormButton = (props) => {
    return(
        <button className={'p-2 rounded-xl border-2 border-blue-400 bg-blue-400 text-white hover:bg-transparent hover:text-blue-400 duration-200 cursor-pointer'} {...props} >{props.children}</button>
    )
}

export const FormErrorsBlock = (props) => {
    return(
        <div className={'p-2 bg-gray-100 rounded-md flex flex-col gap-2'}>
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
    Button: FormButton,
    Errors: FormErrorsBlock,
    Error: FormError
}

export default FormBuilder