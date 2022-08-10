import { useCallback } from 'react'

import * as yup from 'yup'
import { Formik } from 'formik'
import { MdAlternateEmail, MdLock, MdPerson } from 'react-icons/md'
import { useTranslation } from 'react-i18next'

import api from '../serviecs/api.service'
import FB from './FormBuilder'

const RegistrationForm = () => {
    const { t } = useTranslation()

    const validationSchema = yup.object().shape({
        email: yup.string().email(t('forms.errors.email')).required(t('forms.errors.email_req')),
        password: yup.string().required(t('forms.errors.password_req')),
        confirmPassword: yup.string().test('passwords-match', t('forms.errors.match_password'), function (val) { return val === this.parent.password }).required(t('forms.errors.confirm_password_req')),
        firstName: yup.string().trim().matches(/^[a-zA-Zа-яА-Я]+$/, t('forms.errors.first_name')).required(t('forms.errors.first_name_req')),
        lastName: yup.string().trim().matches(/^[a-zA-Zа-яА-Я]+$/, t('forms.errors.last_name')).required(t('forms.errors.last_name_req'))
    })

    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: ''
    }

    const createUser = useCallback(async (email, password, firstName, lastName) => {
        await api.users.create(email, password, firstName, lastName)
    }, [])

    const onSubmit = useCallback((vals) => {
        api.toast.fetch(createUser(vals.email, vals.password, vals.firstName, vals.lastName), t('forms.registration.toast.loading'), t('forms.registration.toast.success'))
    }, [createUser])
    
    return(
        <>
            <Formik initialValues={initialValues} validateOnBlur validationSchema={validationSchema} onSubmit={onSubmit}>
                {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit}) => (
                    <FB.Form>
                        <FB.Header>{t('forms.registration.title')}</FB.Header>
                        <FB.InputGroup>
                            <FB.Row error={touched.firstName && errors.firstName}>
                                <MdPerson />
                                <FB.Input type={'text'} name={'firstName'} placeholder={t('forms.registration.first_name')} onChange={handleChange} onBlur={handleBlur} value={values.firstName} />
                            </FB.Row>
                            <FB.Row error={touched.lastName && errors.lastName}>
                                <MdPerson />
                                <FB.Input type={'text'} name={'lastName'} placeholder={t('forms.registration.last_name')} onChange={handleChange} onBlur={handleBlur} value={values.lastName} />
                            </FB.Row>
                            <FB.Row error={touched.email && errors.email}>
                                <MdAlternateEmail />
                                <FB.Input type={'text'} name={'email'} placeholder={t('forms.registration.login')} onChange={handleChange} onBlur={handleBlur} value={values.email} />
                            </FB.Row>
                            <FB.Row error={(touched.password && errors.password) || (touched.confirmPassword && errors.confirmPassword)}>
                                <MdLock />
                                <FB.Input type={'password'} name={'password'} placeholder={t('forms.registration.password')} onChange={handleChange} onBlur={handleBlur} value={values.password} />
                            </FB.Row>
                            <FB.Row error={touched.confirmPassword && errors.confirmPassword}>
                                <MdLock />
                                <FB.Input type={'password'} name={'confirmPassword'} placeholder={t('forms.registration.confirm_password')} onChange={handleChange} onBlur={handleBlur} value={values.confirmPassword} />
                            </FB.Row>
                        </FB.InputGroup>
                        {
                            ((touched.firstName && errors.firstName) || (touched.lastName && errors.lastName) || (touched.email && errors.email) || (touched.password && errors.password)  || (touched.confirmPassword && errors.confirmPassword)) &&
                            <FB.Errors>
                                {touched.firstName && errors.firstName && <FB.Error>{errors.firstName}</FB.Error>}
                                {touched.lastName && errors.lastName && <FB.Error>{errors.lastName}</FB.Error>}
                                {touched.email && errors.email && <FB.Error>{errors.email}</FB.Error>}
                                {touched.password && errors.password && <FB.Error>{errors.password}</FB.Error>}
                                {touched.confirmPassword && errors.confirmPassword && <FB.Error>{errors.confirmPassword}</FB.Error>}
                            </FB.Errors>
                        }
                        <FB.Button type={'submit'} onClick={() => handleSubmit()} disabled={!isValid}>{t('forms.registration.submit')}</FB.Button>
                    </FB.Form>
                )}
            </Formik>
        </>
    )
}

export default RegistrationForm