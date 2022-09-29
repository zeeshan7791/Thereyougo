import React from 'react';
import history from '../history';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Auth from './Auth';
import MySignin from 'pages/auth/Signin/MySignin';
import Home from 'pages/home';
import Landing from 'pages/landingpage';

function Root() {
  return (
    <Router history={history}>
      <Routes>
        <Route path='/*' element={<Home/>} />
        <Route path='zeeshan/*' element={<MySignin/>} />
        <Route path='landing/*' element={<Landing/>} />
        <Route path='auth/*' element={<Main />} />
        <Route path='auth/*' element={<Auth />} />
        
      </Routes>
    </Router>
  );
}

export default Root;
