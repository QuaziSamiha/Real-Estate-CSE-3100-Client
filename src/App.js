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


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/aboutUs" element={<AboutUs />} /> */}
          <Route path="/signIn" element={<SignIn />} />
          <Route path='/admin' element={<Admin />} />
          {/* <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} /> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
