import { useTranslation } from 'react-i18next'

import FB from '../forms/FormBuilder'

const CreateChatPage = () => {
    const { t } = useTranslation()

    return(
        <>
            <FB.Form>
                <FB.Header>
                    Создание чата
                </FB.Header>
                <FB.InputGroup>
                    <FB.Image />
                </FB.InputGroup>
            </FB.Form>
        </>
    )
}

export default CreateChatPage