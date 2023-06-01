import React, { useState } from 'react';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import HomePage from './components/HomePage/HomePage';
import Password from './components/Password/Password';
import WhoFollow from './components/HomePage/WhoToFollow';
import Register from './components/Register/Register';
import Wthpn from './components/wthpn/Wthpn';
function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/wthpn' element= {<Wthpn/>}></Route>
        <Route path='/register' element= {<Register/>}></Route>
           <Route path='/homepage' element= {<HomePage/>}></Route>
           <Route path='/' element= {<SignIn/>}></Route>
           <Route path='/signup' element= {<SignUp/>}></Route>
           <Route path='/password' element= {<Password/>}></Route>
        </Routes> 
      </Router>

      {/* <WhoFollow/> */}
     
    </div>
  );
}

export default App;
