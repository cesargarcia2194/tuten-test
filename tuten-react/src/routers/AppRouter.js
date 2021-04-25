import React, { useContext} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import { GridPage } from '../pages/GridPage';
import { LoginPage } from '../pages/LoginPage';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {
    const {state} = useContext(AuthContext)
    const {logged} = state;
    
    return (
        <Router>
            <Switch>
                <PublicRoute path="/login" isLogged={logged} component={LoginPage} />
                <PrivateRoute path="/" isLogged={logged} component={GridPage} /> 
                <Redirect to="/login"/>
            </Switch>
        </Router>
    )
}
