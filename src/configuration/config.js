import api from '../serviecs/api.service'
import user from '../stores/User.store'
import chat from '../stores/Chat.store'

//Custom function to handle response
Response.prototype.handle = async function (read) {
    if (!this.ok) {
        const err = await this.text()
        console.log(err)
        throw new Error(err)
    }

    if (read !== null) {
        const body = await read.call(this)
        return body
    }

    return true
}

//safe state in localstorage when refresh browser
// window.onbeforeunload = () => {
//     const userTmp = user.get()
//     localStorage.setItem('user', JSON.stringify(userTmp))
// }

window.addEventListener('beforeunload', () => {
    const userTmp = user.get()
    localStorage.setItem('user', JSON.stringify(userTmp))
    const chatTmp = chat.get()
    localStorage.setItem('chat', JSON.stringify(chatTmp))
})

// window.onload = () => {
//     const userTmp = JSON.parse(localStorage.getItem('user'))
//     user.set(userTmp)
//     if (user.token() !== null) api.chat.start()
// }

window.addEventListener('oad', () => {
    const userTmp = JSON.parse(localStorage.getItem('user'))
    user.set(userTmp)
    const chatTmp = JSON.parse(localStorage.getItem('chat'))
    chat.set(chatTmp)
    if (user.token !== null) api.chat.start()
})


//Options
export const API_PREFIX = 'https://localhost:7236'

const options = {
    API_PREFIX: API_PREFIX
}

export default options