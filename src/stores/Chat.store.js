import { makeAutoObservable } from 'mobx'

class ChatStore {

    connection = null
    currentChatInfo = null
    currentChatId = null
    currentMessageText = ''

    constructor() {
        makeAutoObservable(this)
    }

    get() {
        const data = {
            connection: this.connection,
            currentChatId: this.currentChatId,
            currentChatInfo: this.currentChatInfo,
            currentMessageText: this.currentMessageText 
        }
        return data
    }

    set(data) {
        this.connection = data.connection
        this.currentChatId = data.currentChatId
        this.currentChatInfo = data.currentChatInfo
        this.currentMessageText  = data.currentMessageText 
    }

    set conn(data) {
        this.connection = data
    }

    get conn() {
        return this.connection
    }

    set id(data) {
        this.currentChatId = data
    }

    get id() {
        return this.currentChatId
    }

    set info(data) {
        this.currentChatInfo = data
    }

    get info() {
        return this.currentChatInfo
    }

    addMessage(data) {
        this.currentChatInfo.messages.push(data)
    }

    //Curremt text editing
    setMessageText(text) {
        this.currentMessageText = text
    }

    addEmoji(emoji) {
        this.currentMessageText += emoji
    }

    clearMessageText() {
        this.currentMessageText = ''
    }
}

export default new ChatStore()