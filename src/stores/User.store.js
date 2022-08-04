import { makeAutoObservable } from 'mobx'

class UserStore {

    _login = null
    _firstName = null
    _lastName = null
    _token = null
    _id = null

    constructor() {
        makeAutoObservable(this)
    }

    set(data) {
        this._login = data.login
        this._firstName = data.firstName
        this._lastName = data.lastName
        this._token = data.token
        this._id = data.id
    }

    get() {
        const data = {
            login: this._login,
            firstName: this._firstName,
            lastName: this._lastName,
            token: this._token,
            id: this._id
        }
        return data
    }

    clear() {
        this._login = null
        this._firstName = null
        this._lastName = null
        this._token = null
        this._id = null
    }

    login() {
        return this._login
    }

    fullName() {
        return `${this._firstName} ${this._lastName}`
    }

    token() {
        return this._token
    }
}

export default new UserStore()