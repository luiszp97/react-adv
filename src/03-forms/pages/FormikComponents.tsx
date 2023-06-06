import { Formik, Field, Form, ErrorMessage,  } from 'formik'
import * as Yup from 'yup';

import '../styles/styles.css';


export const FormikComponents = () => {

  return (
    <div>
        <h1>Formik Components</h1>
        <Formik 
            initialValues={ {
                firstName: '',
                lastName: '',
                email: '',
                terms: false,
                jobType: ''
            }}
            onSubmit={ ( values ) => {

                console.log(values);

            } }
            validationSchema={ Yup.object({

                firstName: Yup.string()
                                .max(15, 'Debe tener 15 caracteres')
                                .required('Requerido'),
                lastName: Yup.string()
                                .max(15, 'Debe tener 15 caracteres')
                                .required('Requerido'),
                email: Yup.string()
                            .email('Email no valido')
                            .required('Email es obligatorio'),
                terms: Yup.boolean()
                            .oneOf([true], 'Debes aceptar los terminos y condiciones'),
                
                jobType: Yup.string()
                            .required('Requerido')  

                })
            }

        >
            {
                (formik) => (
                    <Form noValidate>

                        <label htmlFor='firstName'>First Name</label>
                        <Field 
                            name= 'firstName'
                            type = 'text'
                        />
                       <ErrorMessage name='firstName' component='span'/>

                        <label htmlFor='lastName'>Last Name</label>
                        <Field 
                            name= 'lastName'
                            type= 'text'
                        />
                       <ErrorMessage name='lastName'component='span' />

                        <label htmlFor='email'>Email</label>
                        <Field 
                            name= 'email'
                            type= 'email'
                        />
                       <ErrorMessage name='email'component='span' />

                       <label htmlFor='slect'>JobType</label>
                        <Field 
                            name= 'jobType'
                            as = 'select'
                        >
                            <option value=''>Pick Somthing</option>
                            <option value='developer'>Developer</option>
                            <option value='designer'>Designer</option>
                            <option value='it-junior'>It-Junior</option>
                            <option value='it-senior'>It-Senior</option>

                        </Field>
                        <ErrorMessage name='jobType'component='span' />

                        <label>
                            <Field 
                                name= 'terms'
                                type= 'checkbox'
                            />
                            Terms
                        </label>
                        <ErrorMessage name='terms'component='span' />
                        
                    
                        <button type='submit' > Submit </button>
                    </Form>
                )
            }

        </Formik>

    </div>
  )
}
