import { MdMenu, MdSettings, MdLogout } from 'react-icons/md'

import auth from '../serviecs/auth.service'
import DropDown from './DropDown'

const MenuDropDown = () => {
    const menu = [
        {
            click: () => console.log('settings'),
            icon: <MdSettings />,
            text: 'Настройки'
        },
        {
            click: () => { auth.logout(); window.location.reload() },
            icon: <MdLogout />,
            text: 'Выход'
        }
    ]

    return(
        <DropDown icon={<MdMenu className={'text-2xl text-gray-700'} />} data={menu} />
    )
}

export default MenuDropDown