import { Route, Routes, BrowserRouter } from 'react-router-dom'

import ProtectedPage from '../configuration/ProtectedPage'
import LoginPage from '../pages/Login.page'
import MainPage from '../pages/Main.page'
import ProfilePage from '../pages/Profile.page'

const RoutesConfig = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path={'/'} element={<LoginPage />} />
                <Route path={'/main'} element={<ProtectedPage><MainPage /></ProtectedPage>} />
                <Route path={'/profile'} element={<ProtectedPage><ProfilePage /></ProtectedPage>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesConfig