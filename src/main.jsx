import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './components/Login'
import Details from './components/Details'
import Signin from './components/Signin'
import Add_Compo from './components/Add_Components'
import Admin_Create_User from './components/Admin_Create_User'
import CheckOut from './components/CheckOut'
import Assign_Compo from './components/Assign_Compo'



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/checkout' element={<CheckOut/>}/>
        <Route path='/assigned' element={<Assign_Compo/>}/>
        <Route path='/createuser' element={<Admin_Create_User/>}/>
        <Route path="/addcompo" element={<Add_Compo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<Details />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/*" exact element={<Home />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);
