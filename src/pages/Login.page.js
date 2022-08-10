import { useState } from 'react'

import { useTranslation } from 'react-i18next';

import LoginForm from '../forms/Login.form'
import RegistrationForm from '../forms/Registration.form'

const LoginPage = () => {
    const [isLogin, setLogin] = useState(true)
    const { t } = useTranslation()
    
    return(
        <div className={'h-screen w-screen flex flex-col-reverse items-center justify-center gap-24 md:gap-0 md:flex-row'}>
            <div className={'w-full flex items-center justify-center md:w-1/2'}>
                <div className={'p-2 bg-black text-white rounded-md w-3/4'}>
                    This is an example of a simple live chat. The chat consists of two parts: a server written in C# using SignalR and a web client based on React. More information can be found in the README files in the respective repositories.
                </div>
            </div>
            <div className={'w-full flex items-center justify-center md:w-1/2'}>
                <div className={'w-3/4 flex flex-col gap-2'}>
                    {
                        isLogin ?
                        <LoginForm /> :
                        <RegistrationForm />
                    }
                    <div className={'w-full flex justify-evenly'}>
                        {
                            isLogin ?
                            <>
                                <button className={'bg-transparent text-gray-400 hover:text-black duration-200'}>
                                    {t('test')}
                                </button>
                                <button className={'bg-transparent text-gray-400 hover:text-black duration-200'} onClick={() => setLogin(!isLogin)}>
                                    У меня не таккаунта
                                </button>
                            </> :
                            <>
                                <button className={'bg-transparent text-gray-400 hover:text-black duration-200'} onClick={() => setLogin(!isLogin)}>
                                    У меня не таккаунта
                                </button>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage