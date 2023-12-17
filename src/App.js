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
import { useState, useEffect, useRef } from "react";



function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [fontSize, setFontSize] = useState();
  const [check, setcheck] = useState(false);

  const observedDiv = useRef(null);

  useEffect(() => {
    if (!observedDiv.current) {
      return;
    }

    const resizeObserver = new ResizeObserver(() => {
      if (observedDiv.current.offsetWidth !== width) {
        setWidth(observedDiv.current.offsetWidth);
      }
      if (observedDiv.current.offsetHeight !== height) {
        setHeight(observedDiv.current.offsetHeight);
      }
    });

    resizeObserver.observe(observedDiv.current);

    return function cleanup() {
      resizeObserver.disconnect();
    };
  }, [observedDiv.current]);

  useEffect(() => {
    if (!check) {
      const calculateFontSize = () => {
        // Example: Font size is 5% of the average of width and height
        const calculatedFontSize = 0.05 * ((width + height) / 2);
        console.log("reahcer here");
        // If calculated font size is greater than 16px, adjust body font size
        if (calculatedFontSize > 16) {
          const diff = calculatedFontSize - 16;
          setFontSize(calculatedFontSize);
          console.log("reahcer  if here");
          setcheck(true);
          // Update body font size
          document.body.style.fontSize = `16px`;
          document.body.style.fontSize = `calc(16px - ${diff}px)`;
        } else if (calculatedFontSize < 16) {
            const diff =16 - calculatedFontSize;
            setFontSize(calculatedFontSize);
            console.log("reahcer  if here");
            setcheck(true);
            // Update body font size
            document.body.style.fontSize = `16px`;
            document.body.style.fontSize = `calc(16px + ${diff}px)`;
          }
        else {
          setFontSize(calculatedFontSize);
        }
      };

      // Initial calculation
      calculateFontSize();

      // Recalculate on window resize
      const handleResize = () => {
        calculateFontSize();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [width, height]);
  return (

    <div className="App" ref={observedDiv}>
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
