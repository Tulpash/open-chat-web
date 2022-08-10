import { useState } from 'react'

import { useTranslation } from 'react-i18next'

import LoginForm from '../forms/Login.form'
import RegistrationForm from '../forms/Registration.form'
import LanguageSelector from '../components/LanguageSelector'

const LoginPage = () => {
    const [isLogin, setLogin] = useState(true)
    const { t } = useTranslation()
    
    return(
        <div className={'h-screen w-screen flex flex-col-reverse items-center justify-center gap-24 md:gap-0 md:flex-row'}>
            <div className={'fixed top-[10px] right-[10px]'}>
                <LanguageSelector />
            </div>
            <div className={'w-full flex items-center justify-center md:w-1/2'}>
                <div className={'p-2 flex flex-col justify-between bg-black text-white rounded-md w-3/4 max-w-[450px] min-h-[400px]'}>
                    <div className={'flex flex-col gap-4'}>
                        <div className={'text-xl font-bold'}>
                            {t('app.title')}
                        </div>
                        <div>
                            {t('app.description')}
                        </div>
                        <div className={'flex flex-col w-full'}>
                            <div className={'font-bold'}>
                                {t('app.git.title')}
                            </div>
                            <div>
                                {t('app.git.server')}: https://github.com/Tulpash/OpenChat-API.git
                            </div>
                            <div>
                                {t('app.git.web_client')}: https://github.com/Tulpash/open-chat-web.git
                            </div>
                        </div>
                    </div>
                    <div className={'flex gap-2'}>
                        <img src={'https://www.codewars.com/packs/assets/logo.61192cf7.svg'} alt={'code wars logo'} className={'w-[40px]'} />
                    </div>
                </div>
            </div>
            <div className={'w-full flex items-center justify-center md:w-1/2'}>
                <div className={'w-3/4 flex flex-col gap-2 max-w-[400px]'}>
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
                                    {t('forms.other.forgot_password')}
                                </button>
                                <button className={'bg-transparent text-gray-400 hover:text-black duration-200'} onClick={() => setLogin(!isLogin)}>
                                    {t('forms.other.to_registartion')}
                                </button>
                            </> :
                            <>
                                <button className={'bg-transparent text-gray-400 hover:text-black duration-200'} onClick={() => setLogin(!isLogin)}>
                                    {t('forms.other.to_signin')}
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