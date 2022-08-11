const UserList = (props) => {
    const data = props.data
    console.log(data)

    return(
        <>
            {
                data.length > 0 ?
                <ul className={'divide-y-2  divide-gray-200 text-gray-700 border-b-2 border-gray-200 max-h-full overflow-scroll'}>
                    {data.map((item) => <UserListRow key={item.id} data={item} />)}
                </ul> :
                <div className={'h-full w-full text-gray-700 flex justify-center items-center'}>
                    Пусто
                </div>
            }
        </>
    )
}

const UserListRow = (props) => {
    const user = props.data
    console.log(user)

    return(
        <li className={'w-full h-[70px] cursor-pointer bg-transparent hover:bg-gray-200 duration-200 flex items-center'}>
            <div className={'flex justify-center items-center w-[70px] p-2'}>
                <img className={'rounded-full border-2 border-gray-200'} src={'https://www.etexstore.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png'} alt={'user'} />
            </div>
            <div className={'flex flex-col gap-0'}>
                <span className={'text-lg'}>{user.name}</span>
                <span className={'text-gray-400'}>{user.unique}</span>
            </div>
            <div className={'flex justify-center items-center p-1 bg-gray-300 rounded-md'}>
                {user.notifications}
            </div>
        </li>
    )
}

export default UserList