import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserList from './Components/UserList';
import RoleList from './Components/RoleList';
import Home from './Components/Home'; 
import './App.css'

const App = () => (
  <Router>
      <div className="App">
          <h1>Admin Dashboard</h1>
          <nav className='navContainer'>
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/users">User Management</Link></li>
                  <li><Link to="/roles">Role Management</Link></li>
              </ul>
          </nav>
          <Routes>
              <Route path="/" element={<Home />} /> 
              <Route path="/users" element={<UserList />} />
              <Route path="/roles" element={<RoleList />} />
          </Routes>
      </div>
  </Router>
);

export default App;