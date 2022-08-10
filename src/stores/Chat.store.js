import { makeAutoObservable } from 'mobx'

class ChatStore {

    _connection = null
    _chats = []
    _currentChat = null

    constructor() {
        makeAutoObservable(this)
    }

    set connection(conn) {
        this._connection = conn
    }

    get connection() {
        return this._connection
    }

    get() {
        const data = {
            chats: this._chats,
            currentChat: this._currentChat
        }
        return data
    }

    set(data) {
        this.chats = data.chats
        this.currentChat = data.currentChat
    }
}

export default new ChatStore()