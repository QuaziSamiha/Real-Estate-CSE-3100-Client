import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Admin from './components/Admin/Admin';
import Home from './components/Home/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import SignIn from './components/SignIn/SignIn';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PropertyDetail from './components/Home/PropertyDetail/PropertyDetail';
import AboutUS from './components/AboutUS/AboutUS/AboutUS';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddAdmin from './components/Admin/AddAdmin/AddAdmin';
import AddProperty from './components/Admin/AddProperty/AddProperty';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/aboutUs" element={<AboutUS />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path='/propertyDetail' element={<PrivateRoute><PropertyDetail /></PrivateRoute>} />
            {/* <Route path='/admin' element={<Admin />} /> */}
            {/* <Route  path='/dashboard' element={<Dashboard />}/> */}
            <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path='/addAdmin' element={<AddAdmin />} />
            <Route path='/addProperty' element={<AddProperty />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div >
  );
}

export default App;
