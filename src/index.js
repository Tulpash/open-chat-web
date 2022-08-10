import React from 'react'
import ReactDOM from 'react-dom/client'

import { Toaster } from 'react-hot-toast'
import i18next from 'i18next'

import RoutesConfig from './configuration/routes.config'
import './index.css'
import './configuration/i18n.conf'

const root = ReactDOM.createRoot(document.getElementById('root'))
i18next.changeLanguage('ru')
root.render(
  <>
    <Toaster />
    <RoutesConfig />
  </>
);

