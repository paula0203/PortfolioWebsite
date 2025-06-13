import React from 'react';
import Navbar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Tools from './components/Tools';
import ScrollToTopButton from './components/ScrollToTopButton';
import Others from './components/Experience';
import BulbSwitcher from './components/BulbSwitcher';
import './styles/variables.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <BulbSwitcher />
      <AboutMe /> 
      <Tools />
      <Projects />
      <ScrollToTopButton />
      <Others />
    </div>
  );
};

export default App;