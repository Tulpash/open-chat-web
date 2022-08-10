import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
// import Backend from 'i18next-xhr-backend'
// import LanguageDetector from 'i18next-browser-languagedetector'

import ru from '../translations/ru.json'
import en from '../translations/en.json'

const fallbackLng = ['ru']
const availableLanguages = ['ru', 'en']

const resources = {
    ru: {
        translation: ru
    },
    en: {
        translation: en
    }
}

i18n.use(initReactI18next).init({
    resources,
    lng: 'ru',
    interpolation: {
        escapeValue: false
    }
})

export default i18n