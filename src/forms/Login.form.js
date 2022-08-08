import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import * as yup from 'yup'
import { Formik } from 'formik'
import toast from 'react-hot-toast'
import { MdAlternateEmail, MdLock } from 'react-icons/md'

import auth from '../serviecs/auth.service'
import api from '../serviecs/api.service'
import FB from './FormBuilder'

const LoginForm = () => {
    const validationSchema = yup.object().shape({
        login: yup.string().email('Введен некорректный Email').required('Поле \'Email\' обязательно для заполнения'),
        password: yup.string().required('Поле \'Пароль\' обязательно для заполнения')
    })

    const initialValues = {
        login: '',
        password: ''
    }

    const navigate = useNavigate()

    const signIn = useCallback(async (login, password) => {
        const res = await auth.signin(login, password)
        if (!res) throw new Error()
        await api.chat.start()
        navigate('/main')
    }, [])

    const onSubmit = useCallback((vals) => {
        toast.promise(signIn(vals.login, vals.password), {
            loading: 'Вход',
            success: 'Успешно',
            error: 'Ошибка'
        })
    }, [signIn])
    
    return(
        <>
            <Formik initialValues={initialValues} validateOnBlur validationSchema={validationSchema} onSubmit={onSubmit} >
                {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit}) => (
                    <FB.Form>
                        <FB.Header>Вход</FB.Header>
                        <FB.InputGroup>
                            <FB.Row error={touched.login && errors.login}>
                                <MdAlternateEmail />
                                <FB.Input type={'email'} name={'login'} placeholder={'Email'} onBlur={handleBlur} onChange={handleChange} value={values.login} />
                            </FB.Row>
                            <FB.Row error={touched.password && errors.password}>
                                <MdLock />
                                <FB.Input type={'password'} name={'password'} placeholder={'Пароль'} onBlur={handleBlur} onChange={handleChange} value={values.password} />
                            </FB.Row>
                        </FB.InputGroup>
                        {
                            ((touched.login && errors.login) || (touched.password && errors.password)) &&
                            <FB.Errors>
                                {touched.login && errors.login && <FB.Error>{errors.login}</FB.Error>}
                                {touched.password && errors.password && <FB.Error>{errors.password}</FB.Error>}
                            </FB.Errors>
                        }
                        <FB.Button type={'submit'} onClick={() => handleSubmit()} disabled={!isValid}>Войти</FB.Button>
                    </FB.Form>
                )}
            </Formik>
        </>
    )
}

export default LoginForm