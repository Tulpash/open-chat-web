const Button = (props) => {
    return(
        <button className={`p-2 min-h-[50px] min-w-[50px] flex justify-center items-center rounded-xl cursor-pointer bg-transparent hover:bg-gray-100 active:bg-gray-200 duration-200`} {...props}>
            {props.children}
        </button>
    )
}

export default Button