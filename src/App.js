import { useRef } from "react"
import Nav from "./components/Nav";
import Testimonials from "./components/Testimonials";
import Specialties from './components/Specialties'
import Contact from "./components/Contact";
import Footer from './components/Footer'
// import { Route, Routes } from "react-router-dom";
import Divider from "./components/Divider";
function App() {
  const homeRef = useRef(null);
  const specRef = useRef(null);
  const testRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div style={{maxWidth: '100vw', margin: '0px'}}>
      <Nav refs={{homeRef, specRef, testRef, contactRef}} />
      <div className="container">
        <Divider />
        <Specialties ref={specRef} />
        <Divider />
        <Testimonials ref={testRef}/>
        <Divider />
        <Contact ref={contactRef}/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
