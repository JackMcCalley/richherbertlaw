import Home from "./components/Home";
import Nav from "./components/Nav";
import Testimonies from "./components/Testimonies";
import { Route, Routes } from "react-router-dom";
import Divider from "./components/Divider";
function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <Divider />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/test" element={<Testimonies />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
