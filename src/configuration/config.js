import api from '../serviecs/api.service'
import user from '../stores/User.store'

//Custom function to handle response
Response.prototype.handle = async function (read, errReturnObject) {
    if (!this.ok) {
        const err = await this.text()
        console.log(`Error: ${err}`)
        return errReturnObject
    }

    if (read !== null) {
        const body = await read.call(this)
        console.log(`Config body: ${body}`)
        return body
    }

    return true
}

window.onload = () => {
    console.log(user.token())
    if (user.token() !== null) api.chat.start()
}


//Options
export const API_PREFIX = 'https://localhost:7236'

const options = {
    API_PREFIX: API_PREFIX
}

export default options