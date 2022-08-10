import toast from 'react-hot-toast'

import api from '../serviecs/api.service'
import user from '../stores/User.store'

//Custom function to handle response
Response.prototype.handle = async function (read, errReturnObject) {
    if (!this.ok) {
        const err = await this.text()
        console.log(err)
        toast.error(err)
        return errReturnObject
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

window.addEventListener('onbeforeunload', () => {
    const userTmp = user.get()
    localStorage.setItem('user', JSON.stringify(userTmp))
})

// window.onload = () => {
//     const userTmp = JSON.parse(localStorage.getItem('user'))
//     user.set(userTmp)
//     if (user.token() !== null) api.chat.start()
// }

window.addEventListener('onload', () => {
    const userTmp = JSON.parse(localStorage.getItem('user'))
    user.set(userTmp)
    if (user.token() !== null) api.chat.start()
})


//Options
export const API_PREFIX = 'https://localhost:7236'

const options = {
    API_PREFIX: API_PREFIX
}

export default options