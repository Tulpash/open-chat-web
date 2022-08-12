const ItemGroup = (props) => {
    return(
        <div className={'flex flex-row gap-0 bg-white rounded-full [&>button:first-child]:rounded-l-full [&>button:first-child]:rounded-r-none [&>*:last-child]:rounded-l-none [&>*:last-child]:rounded-r-full'}>
            {props.children}
        </div>
    )
}

export default ItemGroup