import { HubConnectionBuilder } from '@microsoft/signalr'
import toast from 'react-hot-toast'

import { API_PREFIX } from '../configuration/config'
import user from '../stores/User.store'
import auth from './auth.service'

//Chat API
//Start SignalR connection
const chatStart = async () => {
    const conn = new HubConnectionBuilder().withUrl(`${API_PREFIX}/hubs/chat?token=${user.token}`, {
        accessTokenFactory: () => user.token
    }).withAutomaticReconnect().build()
    conn.start().catch((e) => console.log(`Connection failed: ${e}`))
    console.log(conn)
}

//Create new chat
const chatCreate = async (name, users) => {
    const url = `${API_PREFIX}/chat/create`
    const data = {
        Name: name,
        Users: users
    }
    const headers = {
        'Content-Type': 'application/json'
    }
    const response = await fetch(url, { method: 'POST', headers: auth.headers(headers), body: JSON.stringify(data) })
    return await response.handle(null) 
}

//Find chats
const chatSearch = async (searchString) => {
    const url = `${API_PREFIX}/chat/search`
    const headers = {
        'Content-Type': 'application/json'
    }
    const response = await fetch(url, { method: 'POST', headers: auth.headers(headers), body: JSON.stringify(searchString) })
    return await response.handle(response.json)
}

const chatAPI = { start: chatStart, create: chatCreate, search: chatSearch }

//User API
//registration
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
    return await response.handle(null) 
}

//search users
const usersChats = async (searchString) => {
    const url = `${API_PREFIX}/users/${user.id}/chats`
    const headers = {
        'Content-Type': 'application/json'
    }
    const response = await fetch(url, { method: 'POST', headers: auth.headers(headers), body: JSON.stringify(searchString) })
    return await response.handle(response.json)
}

const usersAPI = { create: usersCreate, chats: usersChats }

//Toast
export const toastFetch = (promise, loading, success) => {
    toast.promise(promise, {
        loading: loading,
        success: success,
        error: (err) => `${err.message}`
    })
}

const toastAPI = { fetch: toastFetch } 

//
const API = { chat: chatAPI, users: usersAPI, toast: toastAPI }

export default API