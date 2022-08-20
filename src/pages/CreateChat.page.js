import * as yup from 'yup'
import { Formik } from 'formik'
import { useTranslation } from 'react-i18next'

import api from '../serviecs/api.service'
import FB from '../forms/FormBuilder'
import { useState } from 'react'

const CreateChatPage = () => {
    const { t } = useTranslation()

    const [users, setUsers] = useState([])
    const [file, setFile] = useState(null)

    const validationSchema = yup.object().shape({
        title: yup.string().required('Поле \'Название\' обязательно для заполнение')
    })

    const initialValues = {
        title: ''
    }

    const createChat = async (logoFile, name, userIds) => {
        console.log(`${name} | ${logoFile} | ${userIds}`)
        await api.chat.create(logoFile, name, userIds)
    }

    const onSubmit = (vals) => {       
        api.toast.fetch(createChat(file, vals.title, users.map(u => u.id)), 'Создаем чат', 'Чат создан')
    }

    const searchUsers = async (str) => {
        if (!str) {
            return []
        }
        const res = await api.users.search(str)
        return res
    }

    const addUser = (user) => {
        setUsers([...users, user])
    }

    const removeUser = (id) => {
        const tmp = users.filter(x => x.id !== id)
        setUsers([...tmp]) 
    }

    return(
        <>
            <Formik initialValues={initialValues} validateOnBlur validationSchema={validationSchema} onSubmit={onSubmit} >
                {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit}) => (
                    <FB.Form>
                        <FB.Header>
                            Создание чата
                        </FB.Header>
                        <FB.InputGroup title={'Лого'}>
                            <FB.Image onChange={(e) => setFile(e.target.files[0])}/>
                        </FB.InputGroup>
                        <FB.InputGroup title={'Общая информация'}>
                            <FB.Row error={touched.title && errors.title}>       
                                <FB.Input type={'text'} name={'title'} placeholder={'Название'} onBlur={handleBlur} onChange={handleChange} value={values.title} />
                            </FB.Row>
                        </FB.InputGroup>
                        <FB.InputGroup title={'Пользователи'}>
                            <FB.Tags search={async (str) => await searchUsers(str)} add={(user) => addUser(user)} remove={(id) => removeUser(id)} data={users} />
                        </FB.InputGroup>
                        {
                            (touched.title && errors.title) &&
                            <FB.Errors>
                                {touched.title && errors.title && <FB.Error>{errors.title}</FB.Error>}
                            </FB.Errors>
                        }
                         <FB.Button type={'submit'} onClick={() => handleSubmit()} disabled={!isValid}>Создать чат</FB.Button>
                    </FB.Form>
                )}
            </Formik>           
        </>
    )
}

export default CreateChatPage