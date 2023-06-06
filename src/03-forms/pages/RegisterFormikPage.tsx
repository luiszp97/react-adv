import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {


    return (
        <div>
            <h1>Formik Abstrac</h1>
            <Formik 
                initialValues={ {
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''
                }}
                onSubmit={ ( values ) => {
    
                    console.log(values);
    
                } }
                validationSchema={ Yup.object({
    
                    name: Yup.string()
                                    .min(2, 'Debe contener mas de 2 caracteres')
                                    .max(15, 'Debe tener 15 caracteres')
                                    .required('Requerido'),
                    email: Yup.string()
                                .email('Email no valido')
                                .required('Email es obligatorio'),
                    password1: Yup.string()
                                    .required('Password es obligatorio')
                                    .min(6, 'Debe tener al menos 6 caracteres'),
                    password2: Yup.string()
                                    .required('Password es obligatorio')
                                    .oneOf( [Yup.ref('password1')] , 'El password debe ser coincidir'  )
                        
                    })
                }
    
            >
                {
                    ({handleReset}) => (
    
                        <Form noValidate>
    
                            <MyTextInput label='Name' name='name' placeholder='Your name'/>
                            <MyTextInput label='Email' name='email' placeholder='example@example.com'/>
                            <MyTextInput label='Password' name='password1' type='password' placeholder='*******' />
                            <MyTextInput label='Repeat Password' name='password2' type='password' placeholder='*******' />
                    
                            <button type='submit' > Submit </button>
                            <button type='button' onClick={ handleReset } > Reset </button>
    
                        </Form>
                    )
                }
    
            </Formik>
    
        </div>
      )
}
