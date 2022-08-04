import { HubConnectionBuilder } from '@microsoft/signalr'
import { API_PREFIX } from '../configuration/config'
import chat from '../stores/Chat.store'
import user from '../stores/User.store'

const chatStart = async () => {
    const conn = new HubConnectionBuilder().withUrl(`${API_PREFIX}/hubs/chat?token=${user.token}`, {
        accessTokenFactory: () => user.token
    }).withAutomaticReconnect().build()
    chat.connection = conn
    conn.start().catch((e) => console.log(`Connection failde: ${e}`))
}

const chatAPI = { start: chatStart }

const API = { chat: chatAPI }

export default API