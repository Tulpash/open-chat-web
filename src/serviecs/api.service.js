import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr'
import toast from 'react-hot-toast'

import { API_PREFIX } from '../configuration/config'
import user from '../stores/User.store'
import chat from '../stores/Chat.store'
import auth from './auth.service'

//Chat API
//Start SignalR connection
const chatStart = () => {
    const conn = new HubConnectionBuilder().withUrl(`${API_PREFIX}/hubs/chat?token=${user.token}`, {
        accessTokenFactory: () => user.token
    }).configureLogging(LogLevel.Information).withAutomaticReconnect().build()
    conn.start().then(() => chat.conn = conn).catch((e) => console.log(`Connection failed: ${e}`))
    
    conn.on('GetMessage', (message) => {
        chat.addMessage(message)
    })
}

const chatSendTextMessage = async () => {
    if (chat.currentMessageText == null || chat.currentMessageText == '') {
        toast.error('Введите кест сообщения')
        return
    }       
    await chat.conn.invoke('SendTextMessage', chat.id, chat.currentMessageText, user.id) 
    chat.clearMessageText()
}

//Create new chat
const chatCreate = async (logoFile, name, userIds) => {
    const url = `${API_PREFIX}/chats/create`
    const data = new FormData();
    data.append('Logo', logoFile)
    data.append('Name', name)
    data.append('OwnerId', user.id)
    userIds.push(user.id)
    userIds.forEach((userId, index) => data.append(`Users[${index}]`, userId))
    const response = await fetch(url, { method: 'POST', headers: auth.headers(), body: data })
    return await response.handle(null) 
}

//Find chats
const chatSearch = async (searchString) => {
    const url = `${API_PREFIX}/chats/search`
    const headers = {
        'Content-Type': 'application/json'
    }
    const response = await fetch(url, { method: 'POST', headers: auth.headers(headers), body: JSON.stringify(searchString) })
    return await response.handle(response.json)
}

//Get chat info (owner, logoUrl, name, users, messages,)
const chatInfo = async (chatId) => {
    const url = `${API_PREFIX}/chats/${chatId}/info`
    const response = await fetch(url, { method: 'GET', headers: auth.headers() })
    return await response.handle(response.json)
}

const chatAPI = { start: chatStart, create: chatCreate, search: chatSearch, sendTextMessage: chatSendTextMessage, info: chatInfo }

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

//edit user
const usersEdit = async (email, firstName, lastName) => {
    const url = `${API_PREFIX}/users/${user.id}/edit`
    const data = {
        Email: email,
        Firstname: firstName,
        LastName: lastName
    }
    const headers = {
        'Content-Type': 'application/json'
    }
    const response = await fetch(url, { method: 'POST', headers: auth.headers(headers), body: JSON.stringify(data) })
    return await response.handle(response.json)
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

const usersSearch = async (searchString) => {
    const url = `${API_PREFIX}/users/search`
    const headers = {
        'Content-Type': 'application/json'
    }
    const response = await fetch(url, { method: 'POST', headers: auth.headers(headers), body: JSON.stringify(searchString) })
    return await response.handle(response.json)
}

const usersAPI = { create: usersCreate, edit: usersEdit, chats: usersChats, search: usersSearch }

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