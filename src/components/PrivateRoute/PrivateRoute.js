import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  
    return loggedInUser.isSignedIn ? children : <Navigate to="/signIn" state={{ from: window.location.pathname }} />

};

export default PrivateRoute;