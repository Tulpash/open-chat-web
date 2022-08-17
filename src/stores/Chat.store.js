import { makeAutoObservable } from 'mobx'

class ChatStore {

    connection = null
    currentChatId = null
    currentChatInfo = null

    constructor() {
        makeAutoObservable(this)
    }

    get() {
        const data = {
            connection: this.connection,
            currentChatId: this.currentChatId,
            currentChatInfo: this.currentChatInfo
        }
        return data
    }

    set(data) {
        this.connection = data.connection
        this.currentChatId = data.currentChatId
        this.currentChatInfo = data.currentChatInfo
    }

    set conn(data) {
        this.connection = data
    }

    get conn() {
        return this.connection
    }

    set chatId(data) {
        this.currentChatId = data
    }

    get chatId() {
        return this.currentChatId
    }

    set chatInfo(data) {
        this.currentChatInfo = data
    }

    get chatInfo() {
        return this.currentChatInfo
    }
}

export default new ChatStore()