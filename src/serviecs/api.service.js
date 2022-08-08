import { HubConnectionBuilder } from '@microsoft/signalr'
import { API_PREFIX } from '../configuration/config'
import auth from '../serviecs/auth.service'
import chat from '../stores/Chat.store'
import user from '../stores/User.store'

//
const handleResponse = async (response, read, errReturnObject) => {
    if (!response.ok) {
        const err = await response.text()
        console.log(`Error: ${err}`)
        return errReturnObject
    }

    if (read !== null) {
        const body = await read.call(response)
        return body
    }

    return true
}

//
const chatStart = async () => {
    const conn = new HubConnectionBuilder().withUrl(`${API_PREFIX}/hubs/chat?token=${user.token()}`, {
        accessTokenFactory: () => user.token()
    }).withAutomaticReconnect().build()
    conn.start().catch((e) => console.log(`Connection failed: ${e}`))
    console.log(conn)
}

const chatAPI = { start: chatStart }

//
const usersCreate = async (email, password, firstName, lastName) => {
    const url = `${API_PREFIX}/users/create`
    const data = {
        Email: email,
        Password: password,
        FirstName: firstName,
        LastName: lastName
    }
    const headers = {
        'Content-Type': 'application/json'
    }
    const response = await fetch(url, { method: 'POST', headers: headers, body: JSON.stringify(data) })
    return await response.handle(null, false) 
    //return await handleResponse(response, null, false)
}

const usersSearch = async (searchString) => {
    const url = `${API_PREFIX}/users/search`
    const headers = {
        'Content-Type': 'application/json'
    }
    console.log(searchString)
    const response = await fetch(url, { method: 'POST', headers: headers, body: JSON.stringify(searchString) })
    console.log(response)
    return await response.handle(response.json, [])
}

const usersAPI = { create: usersCreate, search: usersSearch }

//
const API = { chat: chatAPI, users: usersAPI }

export default API