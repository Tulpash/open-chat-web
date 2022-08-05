//Custom function to handle response
Response.prototype.handle = async (read, errReturnObject) => {
    if (!this.ok) {
        const err = await this.text()
        console.log(`Error: ${err}`)
        return errReturnObject
    }

    if (read !== null) {
        const body = await read.call(this)
        return body
    }

    return true
}


//Options
export const API_PREFIX = 'https://localhost:7236'

const options = {
    API_PREFIX: API_PREFIX
}

export default options