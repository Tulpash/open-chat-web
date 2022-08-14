import { makeAutoObservable } from 'mobx'

class UserStore {

    login = null
    firstName = null
    lastName = null
    token = null
    id = null
    unique = null

    constructor() {
        makeAutoObservable(this)
    }

    set(data) {
        this.login = data.login
        this.firstName = data.firstName
        this.lastName = data.lastName
        this.token = data.token
        this.id = data.id
        this.unique = data.unique
    }

    get() {
        const data = {
            login: this.login,
            firstName: this.firstName,
            lastName: this.lastName,
            token: this.token,
            id: this.id,
            unique: this.unique
        }
        return data
    }

    clear() {
        this.login = null
        this.firstName = null
        this.lastName = null
        this.token = null
        this.id = null
        this.unique = null
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

export default new UserStore()