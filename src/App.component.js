import { useEffect, useState } from 'react'
import { HubConnectionBuilder } from '@microsoft/signalr'

const App = () => {
    const [token, setToken] = useState(null)
    const [connection, setConncetion] = useState(null)

    useEffect(() => {
        const data = {
            Email: "roma@mail.com",
            Password: "_Pass012",
            RememberMe: true
        }
        const headers = {
            'Content-Type': 'application/json'
        }
        fetch('https://localhost:7236/users/signin', { method: 'POST', headers: headers, body: JSON.stringify(data) }).then((response) => { 
            return response.json()
        }).then((data) => {
            setToken(data.token)
        }).catch(console.log)
    }, [])

    useEffect(() => {
        if (token) {
            const conn = new HubConnectionBuilder().withUrl(`https://localhost:7236/hubs/chat?token=${token}`, {
                accessTokenFactory: () => token
            }).withAutomaticReconnect().build()
            setConncetion(conn)
        }
    }, [token])

    useEffect(() => {
        if (connection) {
            connection.start().then((result) => {
                console.log('Connected!')
            }).catch((e) => console.log(`Connection failde: ${e}`))
        }
    }, [connection])
    
    return(
        <>
            <div>Text</div>
        </>
    )
}

export default App