import { HubConnectionBuilder } from '@microsoft/signalr'
import toast from 'react-hot-toast'

import { API_PREFIX } from '../configuration/config'
import user from '../stores/User.store'
import auth from './auth.service'

//
const chatStart = async () => {
    const conn = new HubConnectionBuilder().withUrl(`${API_PREFIX}/hubs/chat?token=${user.token}`, {
        accessTokenFactory: () => user.token
    }).withAutomaticReconnect().build()
    conn.start().catch((e) => console.log(`Connection failed: ${e}`))
    console.log(conn)
}

const chatAPI = { start: chatStart }

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
const usersSearch = async (searchString, portion) => {
    const url = `${API_PREFIX}/users/search`
    const headers = {
        'Content-Type': 'application/json'
    }
    const data = {
        searchString: searchString,
        portion: portion
    }
    const response = await fetch(url, { method: 'POST', headers: auth.headers(headers), body: JSON.stringify(data) })
    return await response.handle(response.json)
}

const usersAPI = { create: usersCreate, search: usersSearch }

//Search global
const searchGlobal = async (searchString) => {
    const url = `${API_PREFIX}/search/global`
    const headers = {
        'Content-Type': 'application/json'
    }
    const response = await fetch(url, { method: 'POST', headers: auth.headers(headers), body: JSON.stringify(searchString) })
    return await response.handle(response.json)
}

//Search local
const searchLocal = async (searchString) => {
    const url = `${API_PREFIX}/search/local?searchString=${searchString}`
    const headers = {
        'Content-Type': 'application/json'
    }
    const response = await fetch(url, { method: 'POST', headers: auth.headers(headers), body: JSON.stringify(searchString) })
    return await response.handle(response.json)
}

//Serach messages
const searchMessages = async (searchString) => {
    const url = `${API_PREFIX}/search/messages?searchString=${searchString}`
    const headers = {
        'Content-Type': 'application/json'
    }
    const response = await fetch(url, { method: 'POST', headers: auth.headers(headers), body: JSON.stringify(searchString) })
    return await response.handle(response.json)
}

const searchAPI = { global: searchGlobal, local: searchLocal, messages: searchMessages }

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
const API = { chat: chatAPI, users: usersAPI, search: searchAPI, toast: toastAPI }

export default API