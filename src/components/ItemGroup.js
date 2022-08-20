const ItemGroup = (props) => {
    return(
        // [&>*]:rounded-none [&>*:first-child]:rounded-l-xl [&>*:first-child]:rounded-r-none [&>*:last-child]:rounded-l-none [&>*:last-child]:rounded-r-xl
        <div className={'flex flex-row w-full bg-white rounded-xl'}>
            {props.children}
        </div>
    )
}

export default ItemGroup