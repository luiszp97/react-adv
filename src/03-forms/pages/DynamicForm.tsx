import { Formik, Form } from 'formik';
import fromJson from '../data/custom-form.json';
import { MySelect, MyTextInput } from '../components';

const initialValues:{ [x:string]: any } = {};

for (const input of fromJson) {
    initialValues[ input.name ] = input.value
}

export const DynamicForm = () => {
  return (
    <div>
        <h1>Dynamic Form</h1>

        <Formik 
            initialValues={ initialValues }
            onSubmit={ (values) => {
                console.log(values)
            } }
        >
            {
                (fromik) => (

                    <Form noValidate >
                    
                        {
                         fromJson.map(({ type, name, label, placeholder, options }) => {

                            if( type === 'text' || type === 'password' || type === 'email' ){
                                
                                return <MyTextInput  
                                    key={name} 
                                    name={ name } 
                                    label={ label } 
                                    placeholder={ placeholder }
                                    type={ type as any }
                                />
                            } else if ( type === 'select' ) {
                                return <MySelect
                                    key={ name }
                                    name={ name }
                                    label={ label }
                                >
                                    <option value=''> Select an option </option>
                                    {
                                        options?.map( opt => (
                                            <option key={ opt.id } value={ opt.id }> { opt.label } </option>
                                        ) )

                                    }
                                    


                                </MySelect>
                            }

                         })
                        }

                        <button type='submit' > Submit </button>

                    </Form>

                )
            }
        </Formik>

    </div>
  )
}
