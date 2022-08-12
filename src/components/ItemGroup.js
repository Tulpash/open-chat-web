const ItemGroup = (props) => {
    return(
        <div className={'flex flex-row w-full bg-white rounded-full [&>*]:rounded-none [&>*:first-child]:rounded-l-full [&>*:first-child]:rounded-r-none [&>*:last-child]:rounded-l-none [&>*:last-child]:rounded-r-full'}>
            {props.children}
        </div>
    )
}

export default ItemGroup