const Button = (props) => {
    return(
        <button className={'p-2 h-full rounded-md cursor-pointer bg-gray-100 hover:bg-gray-200 active:bg-blue-200 duration-200'} {...props}>
            {props.children}
        </button>
    )
}

export default Button