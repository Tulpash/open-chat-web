import { Navigate } from 'react-router-dom'

import auth from '../serviecs/auth.service'

const ProtectedPage = (props) => {
    return(
        <>
            {(auth.isAuthenticated() && props.children) || <Navigate to={'/'} />}
        </>
    )
}

export default ProtectedPage