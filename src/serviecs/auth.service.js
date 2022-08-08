import { API_PREFIX } from '../configuration/config'
import user from '../stores/User.store'

export const headers = (headers) => {
    if (!headers) {
        headers = {}
    }

    headers.Authorization = `Bearer ${user.token}`
    return headers
}

export const signin = async (login, password) => {
    try {
        const data = {
            Email: login,
            Password: password
        }
        const headers = {
            'Content-Type': 'application/json'
        }
        const url = `${API_PREFIX}/auth/signin`
        const response = await fetch(url, { method: 'POST', headers: headers, body: JSON.stringify(data) })
        const body = await response.json()
        console.log(body)
        user.set(body)
        return true
    }
    catch (err) {
        return false
    }
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
    headers: headers
}

export default auth