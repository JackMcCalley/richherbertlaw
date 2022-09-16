import { useRef } from "react"
import Nav from "./components/Nav";
import Testimonials from "./components/Testimonials";
import Specialties from './components/Specialties'
// import { Route, Routes } from "react-router-dom";
import Divider from "./components/Divider";
function App() {
  const homeRef = useRef(null);
  const specRef = useRef(null);
  const testRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="App">
      <Nav refs={{homeRef, specRef, testRef, contactRef}} />
      <div className="container">
        <Divider />
        <Specialties ref={specRef} />
        <Divider />
        <Testimonials ref={testRef}/>
      </div>
    </div>
  );
}

export default App;
