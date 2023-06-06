import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

export const RegisterPage = () => {

    const { name, password1, email, password2, onChange, isValidEmail } = useForm({
        name:'',
        email: '',
        password1: '',
        password2: '',

    });
    

    const onSubmit = (event : FormEvent<HTMLFormElement>) =>{

        event.preventDefault();

    }

  return (
    <div>
        <h1>Register Page</h1>

        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                name='name'
                placeholder="Name"
                value={ name }
                onChange={ onChange }
                className={`${ name.trim().length <= 0 && 'has-error' }`}
            />

           { name.trim().length <= 0 && <span>Este campo es obligatorio</span> }

            <input
                type="email"
                name='email'
                placeholder="Email"
                value={ email }
                onChange={ onChange }
                className={`${ !isValidEmail && 'has-error '}`}
            />

            { !isValidEmail && <span>Email no valido</span> }

            <input
                type="password"
                name='password1'
                placeholder="Password"
                value={ password1 }
                onChange={ onChange }

            />

            { password1.trim().length <= 0 && <span>Este campo es obligatorio</span> }

            <input
                type="password"
                name='password2'
                placeholder="Repeat Password"
                value={ password2 }
                onChange={ onChange }
            />

            { password1.trim().length <= 0 && <span>Este campo es obligatorio</span> }

            
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
