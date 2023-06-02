import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import { routes } from './routes'; 

import logo from '../logo.svg';


export const Navigation = () => {


    return (
        <Suspense fallback={<span>Loading...</span>} >
       
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={ logo } alt="React Logo" />
                        <ul>

                            {

                                routes.map( route => (
                                
                                <li key={ route.name }>
                                        <NavLink to= {route.to} className={ ({ isActive }) => isActive ? 'nav-active' : '' }> { route.name } </NavLink>
                                </li>

                                ))

                            }
                        
                        </ul>
                    </nav>


                    <Routes>

                        {

                            routes.map( ({ path, name, Component }) => (

                                <Route key={ name }  path={ path } element={ <Component/> }/>
                            ) )

                        }
                        {/* <Route path="about" element={ <LazyPage1/> } />
                        <Route path="users" element={ <LazyPage2/> } />
                        <Route path="home" element={ <LazyPage3/> } /> */}
                        
                        <Route path="/*" element={ <Navigate to="/lazy1" replace /> } />
                    </Routes>

                </div>
            </BrowserRouter>
        </Suspense>
    )
}
