const Button = (props) => {
    return(
        <button className={'p-2 h-full rounded-md cursor-pointer bg-gray-200 hover:bg-gray-300 duration-200'} {...props}>
            {props.children}
        </button>
    )
}

export default Button