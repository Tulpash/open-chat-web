import { Route, Routes, BrowserRouter } from 'react-router-dom'

import ProtectedPage from '../configuration/ProtectedPage'
import PublicLayout from '../layouts/Public.layout'

import LoginPage from '../pages/Login.page'
import ChatPage from '../pages/Chat.page'
import CreateChatPage from '../pages/CreateChat.page'
import ProfilePage from '../pages/Profile.page'
import ChatInfoPage from '../pages/ChatInfo.page'
import SettingsPage from '../page/Setting.page'

const RoutesConfig = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path={'/'} element={<LoginPage />} />
                <Route path={'/chat'}>
                    <Route exact path={''} element={<ProtectedPage><ChatPage /></ProtectedPage>} />
                    <Route path={'create'} element={<ProtectedPage><PublicLayout><CreateChatPage /></PublicLayout></ProtectedPage>} />
                    <Route path={'info'} element={<ProtectedPage><PublicLayout><ChatInfoPage /></PublicLayout></ProtectedPage>} />
                </Route>
                <Route path={'/profile'} element={<ProtectedPage><PublicLayout><ProfilePage /></PublicLayout></ProtectedPage>} />
                <Route path={'/settings'} element={<ProtectedPage><PublicLayout><SettingsPage /></PublicLayout></ProtectedPage>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesConfig