import { useCallback } from 'react'

import i18next from 'i18next'
import { US, RU } from 'country-flag-icons/react/3x2'

const LanguageSelector = () => {
    const setRU = useCallback(() => {
        i18next.changeLanguage('ru')
    }, [])

    const setEN = useCallback(() => {
        i18next.changeLanguage('en')
    }, [])

    return(
        <div className={'flex gap-2'}>
            <US className={'opacity-40 hover:opacity-100 duration-200 cursor-pointer w-[50px] rounded-sm'} onClick={() => setEN()} />
            <RU className={'opacity-40 hover:opacity-100 duration-200 cursor-pointer w-[50px] rounded-sm'} onClick={() => setRU()} />
        </div>
    )
}

export default LanguageSelector