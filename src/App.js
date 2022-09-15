import Nav from "./components/Nav";
import Testimonials from "./components/Testimonials";
import Specialties from './components/Specialties'
import { Route, Routes } from "react-router-dom";
import Divider from "./components/Divider";
function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <Divider />
        {/* <Routes>
          <Route exact path="/" element={<Specialties />} />
          <Route exact path="/Testimonials" element={<Testimonials />} />
          <Route exact path="/Specialties" element={<Specialties />} />
        </Routes> */}
        <Specialties />
        <Testimonials />
      </div>
    </div>
  );
}

export default App;
