// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/contact';
import AboutMe from './components/AboutMe';
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
