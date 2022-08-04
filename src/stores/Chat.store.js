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
}

export default new ChatStore()