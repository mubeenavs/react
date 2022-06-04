import React from 'react'
import {BrowserRouter as Router , Routes,  Route} from 'react-router-dom';
import Home from './home'
import Signin from './SignIn'
import Login from './login'
export default function RouterPages() {
  return (
    <div>
        <Router >
            <Routes>
                <Route path="/" element={<Home/>} exact />
                <Route path="/sign" element={<Signin/>} />
                <Route path="/logn" element={<Login/>}/>
            </Routes>
        </Router>
    </div>
  )
}
