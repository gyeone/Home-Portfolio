import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Learning from './pages/Learning';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Project from './pages/Project';
import Navbar from './components/Nav';

function App() {
  return (
      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Home />} /> 
            <Route path='/learning' element={<Learning/>} />
            <Route path='/project' element={<Project/>} />
            <Route path='/contact' element={<Contact/>} />
            </Routes>
      </BrowserRouter>
  );
}
  // Link to 요청 Route 응답 Path 경로

export default App;
