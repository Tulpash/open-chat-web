import { useNavigate } from 'react-router-dom'

import { useTranslation } from 'react-i18next'
import { MdMenu, MdSettings, MdLogout, MdPerson, MdAdd } from 'react-icons/md'

import auth from '../serviecs/auth.service'
import DropDown from './DropDown'

const MenuDropDown = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()

    const menu = [
        {
            click: () => navigate('/chat/create'),
            icon: <MdAdd className={'text-xl'} />,
            text: t('menu_drop.add_chat')
        },
        {
            click: () => navigate('/profile'),
            icon: <MdPerson className={'text-xl'} />,
            text: t('menu_drop.profile')
        },
        {
            click: () => navigate('/settings'),
            icon: <MdSettings className={'text-xl'} />,
            text: t('menu_drop.settings')
        },
        {
            click: () => { auth.logout(); window.location.reload() },
            icon: <MdLogout className={'text-xl'} />,
            text: t('menu_drop.logout')
        }
    ]

    return(
        <DropDown icon={<MdMenu className={'text-2xl text-gray-700'} />} data={menu} />
    )
}

export default MenuDropDown