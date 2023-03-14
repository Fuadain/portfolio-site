import React from 'react';
import './App.css';
import Navbar from './navbar/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/home/home';
import Work from './pages/work/work';
import Projects from './pages/projects/projects';
import Contact from './pages/contact/contact';
import ReactCSSTransitionGroup from 'react-transition-group';

// <Route exact path='/' exact element={<Home />} /> (exact had an error)
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/work-experience' element={<Work/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />
    </Routes>
    </Router>
);
}
  
export default App;
