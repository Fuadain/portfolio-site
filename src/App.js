import React from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/home';
import Work from './pages/work';
import Projects from './pages/projects';
import Contact from './pages/contact';
  
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
