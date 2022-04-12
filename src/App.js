// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './pages/Home';
import Footer from './pages/Footer';
import Contact from './pages/contact';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <div className='bg-gradient-to-t from-blue-500 to-transparent'>
      <Home />,
      <Footer />,
      <AboutMe />,
      <Contact />,


    </div>

  );
}

export default App;
