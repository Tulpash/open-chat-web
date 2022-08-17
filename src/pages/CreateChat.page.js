import * as yup from 'yup'
import { Formik } from 'formik'
import { useTranslation } from 'react-i18next'

import api from '../serviecs/api.service'
import FB from '../forms/FormBuilder'

const CreateChatPage = () => {
    const { t } = useTranslation()

    const validationSchema = yup.object.shape({
        titel: yup.string().required('Поле \'Название обязательно для заполнение\'')
    })

    const initialValues = {
        tite: ''
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
                            <FB.Image />
                        </FB.InputGroup>
                        <FB.InputGroup title={'Общая информация'}>
                            <FB.Row>
        
                                <FB.Input  />
                            </FB.Row>
                        </FB.InputGroup>
                        <FB.InputGroup title={'Пользователи'}>
                            <FB.Tags />
                        </FB.InputGroup>
                        {
                            (touched.tite && errors.tite) &&
                            <FB.Errors>
                                {touched.tite && errors.tite && <FB.Error>{errors.tite}</FB.Error>}
                            </FB.Errors>
                        }
                    </FB.Form>
                )}
            </Formik>           
        </>
    )
}

export default CreateChatPage