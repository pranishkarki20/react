import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Footer />
            </>
          }
        />
            
      </Routes>
    </BrowserRouter>
  );
}

export default App;