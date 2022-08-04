import { API_PREFIX } from '../configuration/config'
import user from '../stores/User.store'

export const header = (headers) => {
    if (!headers) {
        headers = {}
    }

    headers.Authorization = `Bearer ${user.token}`
    return headers
}

export const signin = async (login, password) => {
    const data = {
        Email: login,
        Password: password
    }
    const headers = {
        'Content-Type': 'application/json'
    }
    const url = `${API_PREFIX}/users/signin`
    const response = await fetch(url, { method: 'POST', headers: headers, body: JSON.stringify(data) })
    const body = await response.json()
    user.set(body)
}

export const logout = () => {
    user.clear()
}

export const isAuthenticated = () => {
    return !!user.get()
}

const auth = {
    signin: signin,
    logout: logout,
    isAuthenticated: isAuthenticated,
    header: header
}

export default auth