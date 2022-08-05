import { useState } from 'react'

import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

import LoginForm from '../forms/Login.form'
import RegistrationForm from '../forms/Registration.form'

const LoginPage = () => {
    const [isLogin, setLogin] = useState(true)
    
    return(
        <div className={'h-screen w-screen flex'}>
            <div className={'w-1/2'}>
                <img src={'https://www.oktyabrsky.ru/images/plyazhnii-komplex.jpg'} alt={'Пляж'} className={'h-full object-cover'} />
            </div>
            <div className={'w-1/2 min-w-[400px] flex items-center justify-center'}>
                {
                    isLogin ?
                    <div className={'w-1/2 flex flex-col gap-2'}>
                        <LoginForm />
                        <div className={'w-full flex justify-evenly'}>
                            <button className={'flex gap-2 justify-center items-center border-0 bg-transparent text-gray-300 hover:text-gray-700 duration-200'}>
                                Зыбыли пароль
                            </button>
                            <button className={'flex gap-2 justify-center items-center border-0 bg-transparent text-gray-300 hover:text-gray-700 duration-200'} onClick={() => setLogin(!isLogin)}>
                                У меня нет аккаунта
                            </button>
                        </div>
                    </div> :
                    <div className={'w-1/2 flex flex-col gap-2'}>
                        <RegistrationForm />
                        <button className={'flex gap-2 justify-center items-center border-0 bg-transparent text-gray-300 hover:text-gray-700 duration-200'} onClick={() => setLogin(!isLogin)}>
                            Вход
                        </button>
                    </div>               
                }
            </div>
        </div>
    )
}

export default LoginPage