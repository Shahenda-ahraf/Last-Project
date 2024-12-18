import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import Footer from "./components/Footer";
import People from './components/pepole';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}></Route>

          <Route path="/Footer" element={<Footer />}></Route>
          <Route path="/pepole" element={<People />}></Route>
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;



