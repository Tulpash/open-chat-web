import { makeAutoObservable } from 'mobx'
import { MdFollowTheSigns } from 'react-icons/md'

class UserStore {

    _login = null
    _firstName = null
    _lastName = null
    _token = null
    _id = null
    _unique = null

    constructor() {
        makeAutoObservable(this)
    }

    set(data) {
        this._login = data.login
        this._firstName = data.firstName
        this._lastName = data.lastName
        this._token = data.token
        this._id = data.id
        this._unique = data.unique
    }

    get() {
        const data = {
            login: this._login,
            firstName: this._firstName,
            lastName: this._lastName,
            token: this._token,
            id: this._id,
            unique: tjis._unique
        }
        return data
    }

    clear() {
        this._login = null
        this._firstName = null
        this._lastName = null
        this._token = null
        this._id = null
        this._unique = null
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

    unique() {
        return this._unique
    }
}

export default new UserStore()