const ItemGroup = (props) => {
    return(
        <div className={'flex flex-col divide-y-2 divide-gray-500 [&>input]:border-0'}>
            {props.children}
        </div>
    )
}

export default ItemGroup