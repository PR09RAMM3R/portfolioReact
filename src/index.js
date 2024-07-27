import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './styles/output.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Projects from './components/projects';
import AboutMe from './components/about';
import Contact from './components/contact';
import NoPage from './components/noPage';
import reportWebVitals from './reportWebVitals';

// code for Head title
let docTitle = document.title;
window.addEventListener('blur', () => {
    document.title = 'Come Back :(';
})
window.addEventListener('focus', () => {
    document.title = docTitle;
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='works' element={<Projects />} />
        <Route path='about' element={<AboutMe />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
reportWebVitals();