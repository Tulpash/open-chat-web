const UserList = (props) => {
    const data = props.data
    console.log(data)

    return(
        <>
            {
                data.length > 0 ?
                <ul>
                    {data.map((item) => <UserListRow key={item.id} data={item} />)}
                </ul> :
                <span>Пусто</span>
            }
        </>
    )
}

const UserListRow = (props) => {
    const user = props.data
    console.log(user)

    return(
        <li>
            {user.firstName} {user.lastName}: {user.email}
        </li>
    )
}

export default UserList