import React from 'react';
import './App.css';
import './Attendance.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Studentlist from './Studentlist';


function App() {
  return (
    <div id="wrapper">
      <BrowserRouter>
      <Sidebar/>
      <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
          <Topbar/>

          <div classNameName='container-fluid'>
          <Routes>
          <Route path ="/dashboard" element= {<Dashboard/>}/>
          <Route path ="/studentlist" element= {<Studentlist/>}/>
   
         
          </Routes>
          </div>

      </div>
      </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
