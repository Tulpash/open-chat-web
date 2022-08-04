import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import auth from '../serviecs/auth.service'
import api from '../serviecs/api.service'

const LoginPage = observer(() => {
    useEffect(() => {
        auth.signin('roma@mail.com', '_Pass012').then(() => api.chat.start()).catch(console.log)
    }, [])
   
    return(
        <>
            <div>Login</div>
        </>
    )
})

export default LoginPage