import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import Footer from "./components/Footer";
import People from './components/pepole';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './Redux/slicemood';


function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode)
  const styles = {
    app: {
      margin: 0,
      fontFamily: 'Arial, sans-serif',
      transition: 'background-color 0.3s, color 0.3s',
      minHeight: '100vh',
      backgroundColor: theme === 'dark' ? '#ffffff' : '#121212',
      color: theme === 'light' ? '#000000' : '#ffffff',
    },
    button: {
      padding: '10px 20px',
      marginTop: '20px',
      cursor: 'pointer',
    },
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}></Route>

          <Route path="/Footer" element={<Footer />}></Route>
          <Route path="/pepole" element={<People />}></Route>
        </Routes>

      </BrowserRouter>
      <div style={styles.app}>
        <button style={styles.button} onClick={() => dispatch(toggleTheme())}>
          {theme === 'light' ? "dark" : "light"}
        </button>
      </div>
    </div >
  );
}

export default App;



