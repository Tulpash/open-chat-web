import { useCallback } from 'react'

import * as yup from 'yup'
import { Formik } from 'formik'
import { MdAlternateEmail, MdPerson } from 'react-icons/md'
import { useTranslation } from 'react-i18next'
import { observer } from 'mobx-react-lite'

import api from '../serviecs/api.service'
import user from '../stores/User.store'

import FB from './FormBuilder'

const EditProfileForm = observer(() => {
    const { t } = useTranslation()

    const validationSchema = yup.object().shape({
        email: yup.string().email(t('forms.errors.email')),        
        firstName: yup.string().trim().matches(/^[a-zA-Zа-яА-Я]+$/, t('forms.errors.first_name')),
        lastName: yup.string().trim().matches(/^[a-zA-Zа-яА-Я]+$/, t('forms.errors.last_name'))
    })

    const initialValues = {
        email: user.login,
        firstName: user.firstName,
        lastName: user.lastName
    }
    
    const createUser = useCallback(async (email, firstName, lastName) => {
        await api.users.edit(email, firstName, lastName)
    }, [])

    const onSubmit = useCallback((vals) => {
        api.toast.fetch(createUser(vals.email, vals.firstName, vals.lastName), t('forms.edit_user.toast.loading'), t('forms.edit_user.toast.success'))
    }, [createUser])
    
    return(
        <>
            <Formik initialValues={initialValues} validateOnBlur validationSchema={validationSchema} onSubmit={onSubmit}>
                {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit}) => (
                    <FB.Form>
                        <FB.Header>{t('forms.edit_user.title')}</FB.Header>
                        <FB.InputGroup>
                            <FB.Row error={touched.firstName && errors.firstName}>
                                <MdPerson />
                                <FB.Input type={'text'} name={'firstName'} placeholder={t('forms.edit_user.first_name')} onChange={handleChange} onBlur={handleBlur} value={values.firstName} />
                            </FB.Row>
                            <FB.Row error={touched.lastName && errors.lastName}>
                                <MdPerson />
                                <FB.Input type={'text'} name={'lastName'} placeholder={t('forms.edit_user.last_name')} onChange={handleChange} onBlur={handleBlur} value={values.lastName} />
                            </FB.Row>
                            <FB.Row error={touched.email && errors.email}>
                                <MdAlternateEmail />
                                <FB.Input type={'text'} name={'email'} placeholder={t('forms.edit_user.login')} onChange={handleChange} onBlur={handleBlur} value={values.email} />
                            </FB.Row>
                        </FB.InputGroup>
                        {
                            ((touched.firstName && errors.firstName) || (touched.lastName && errors.lastName) || (touched.email && errors.email)) &&
                            <FB.Errors>
                                {touched.firstName && errors.firstName && <FB.Error>{errors.firstName}</FB.Error>}
                                {touched.lastName && errors.lastName && <FB.Error>{errors.lastName}</FB.Error>}
                                {touched.email && errors.email && <FB.Error>{errors.email}</FB.Error>}
                            </FB.Errors>
                        }
                        <FB.Button type={'submit'} onClick={() => handleSubmit()} disabled={!isValid}>{t('forms.edit_user.submit')}</FB.Button>
                    </FB.Form>
                )}
            </Formik>
        </>
    )
})

export default EditProfileForm