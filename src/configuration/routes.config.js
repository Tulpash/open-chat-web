import { Route, Routes, BrowserRouter } from 'react-router-dom'
import LoginPage from '../pages/Login.page'
import MainPage from '../pages/Main.page'

const RoutesConfig = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<LoginPage />} />
                <Route path='/main' element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesConfig