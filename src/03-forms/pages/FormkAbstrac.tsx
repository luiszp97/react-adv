import { Formik, Form } from 'formik'
import * as Yup from 'yup';

import { MyTextInput, MyCheckbox, MySelect } from '../components';

import '../styles/styles.css';


export const FormikAbstrac = () => {

  return (
    <div>
        <h1>Formik Abstrac</h1>
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
                
                jobType: Yup.  string()
                                .required('Requerido')  

                })
            }

        >
            {
                (formik) => (

                    <Form noValidate>

                        <MyTextInput label='First Name' name='firstName' type='text'  />
                        <MyTextInput label='Last Name' name='lastName' type='text'  />
                        <MyTextInput label='Email' name='email' type='text'  />

                        <MySelect label='JobType' name='jobType'>
                            <option value=''>Pick Somthing</option>
                            <option value='developer'>Developer</option>
                            <option value='designer'>Designer</option>
                            <option value='it-junior'>It-Junior</option>
                            <option value='it-senior'>It-Senior</option>
                        </MySelect>
                       
                        <MyCheckbox label='Terms' name='terms'  />
                
                        <button type='submit' > Submit </button>

                    </Form>
                )
            }

        </Formik>

    </div>
  )
}
