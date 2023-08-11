import './App.css';
import toast, { Toaster } from 'react-hot-toast';
import About from './components/About';
import  Home  from './components/Home';
import Navbar from './components/Navbar';
import 'animate.css';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);
  return (

    <div className="App">
        <Toaster></Toaster>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
   
    </div>
  );
}

export default App;
