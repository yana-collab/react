import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { NavBar } from './components/NavBar';
import { Auth } from './pages/Auth'
import { ToDoList } from './pages/ToDoList'


const App = () => {
  return (
    <Router>
      <NavBar />
    
        <Routes>
        <Route path='/' element={ <ToDoList/> }/>
        <Route path='/authpage' element={ <Auth/> }/>
    </Routes>
    
    
    </Router>
  );
}

export default App;
