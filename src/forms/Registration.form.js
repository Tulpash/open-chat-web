import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import * as yup from 'yup'
import { Formik } from 'formik'
import toast from 'react-hot-toast'
import { MdAlternateEmail, MdLock, MdPerson } from 'react-icons/md'

import api from '../serviecs/api.service'
import FB from './FormBuilder'

const RegistrationForm = () => {
    const validationSchema = yup.object().shape({
        email: yup.string().email('Введен некорректный Email').required('Поле \'Email\' обязательно для заполнения'),
        password: yup.string().required('Поле \'Пароль\' обязательно для заполнения'),
        confirmPassword: yup.string().test('passwords-match', 'Пароли не совпадают', function (val) { return val === this.parent.password }).required('Поле \'Повторите пароль\' обязательно для заполнения'),
        firstName: yup.string().trim().matches(/^[a-zA-Zа-яА-Я]+$/, 'В поле \'Имя\' разрешены [A-Za-zА-Яа-я]').required('Поле \'Имя\' обязательно для заполнения'),
        lastName: yup.string().trim().matches(/^[a-zA-Zа-яА-Я]+$/, 'В поле \'Фамилия\' разрешены [A-Za-zА-Яа-я]').required('Поле \'Фамилия\' обязательно для заполнения')
    })

    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: ''
    }

    const createUser = useCallback(async (email, password, firstName, lastName) => {
        api.users.create(email, password, firstName, lastName).catch(console.log)
    }, [])

    const onSubmit = useCallback((vals) => {
        toast.promise(createUser(vals.email, vals.password, vals.firstName, vals.lastName), {
            loading: 'Регистрация',
            success: 'Регистрация успешна',
            error: 'Ошибка регистрации'
        })
    }, [createUser])
    
    return(
        <>
            <Formik initialValues={initialValues} validateOnBlur validationSchema={validationSchema} onSubmit={onSubmit}>
                {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit}) => (
                    <FB.Form>
                        <FB.Header>Регистрация</FB.Header>
                        <FB.InputGroup>
                            <FB.Row error={touched.firstName && errors.firstName}>
                                <MdPerson />
                                <FB.Input type={'text'} name={'firstName'} placeholder={'Имя'} onChange={handleChange} onBlur={handleBlur} value={values.firstName} />
                            </FB.Row>
                            <FB.Row error={touched.lastName && errors.lastName}>
                                <MdPerson />
                                <FB.Input type={'text'} name={'lastName'} placeholder={'Фамилия'} onChange={handleChange} onBlur={handleBlur} value={values.lastName} />
                            </FB.Row>
                            <FB.Row error={touched.email && errors.email}>
                                <MdAlternateEmail />
                                <FB.Input type={'text'} name={'email'} placeholder={'Email'} onChange={handleChange} onBlur={handleBlur} value={values.email} />
                            </FB.Row>
                            <FB.Row error={(touched.password && errors.password) || (touched.confirmPassword && errors.confirmPassword)}>
                                <MdLock />
                                <FB.Input type={'password'} name={'password'} placeholder={'Пароль'} onChange={handleChange} onBlur={handleBlur} value={values.password} />
                            </FB.Row>
                            <FB.Row error={touched.confirmPassword && errors.confirmPassword}>
                                <MdLock />
                                <FB.Input type={'password'} name={'confirmPassword'} placeholder={'Повторите пароль'} onChange={handleChange} onBlur={handleBlur} value={values.confirmPassword} />
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
                        <FB.Button type={'submit'} onClick={() => handleSubmit()} disabled={!isValid}>Зарегистрироваться</FB.Button>
                    </FB.Form>
                )}
            </Formik>
        </>
    )
}

export default RegistrationForm