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
        <div className={'flex items-center justify-center first:rounded-t-md last:rounded-b-md border-gray-300 bg-transparent hover:bg-gray-100 hover:border-gray-500 duration-200'}>
            {props.children}
        </div>
    )
}

export const FormInput = (props) => {
    return(
        <input className={`p-2 bg-transparent w-full ${props.error && 'placeholder-red-600 text-red-600'}`} {...props} />
    )
}

export const FormButton = (props) => {
    return(
        <button className={'p-2 rounded-md border-2 border-gray-500 bg-gray-500 text-white hover:bg-white hover:text-gray-500 duration-200'} {...props} >{props.children}</button>
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