import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import { RegisterPage, FormikBasicPage,FormikComponents, FormikYupPage } from '../03-forms/pages';

import logo from '../logo.svg'
import { FormikAbstrac } from '../03-forms/pages/FormkAbstrac';


export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/register" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Register</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-basic" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>formik basic</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-yup" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>formk Yup</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-components" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>formk components</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-abstrac" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>formk abstrac</NavLink>
                        </li>
                    </ul>
                </nav>


                <Routes>
                    <Route path="register" element={ <RegisterPage/> } />
                    <Route path="formik-basic" element={ <FormikBasicPage/> } />
                    <Route path="formik-yup" element={ <FormikYupPage/> } />
                    <Route path="formik-components" element={ <FormikComponents/> } />
                    <Route path="formik-abstrac" element={ <FormikAbstrac/> } />
                    
                    <Route path="/*" element={ <Navigate to="/home" replace /> } />
                </Routes>

            </div>
        </BrowserRouter>
    )
}
