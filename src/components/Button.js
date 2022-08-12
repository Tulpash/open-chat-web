const Button = (props) => {
    return(
        <button className={'p-2 h-full rounded-full cursor-pointer bg-transparent hover:bg-gray-100 active:bg-gray-200 duration-200'} {...props}>
            {props.children}
        </button>
    )
}

export default Button