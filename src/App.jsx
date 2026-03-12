import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="page-container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <main className="content">
                  <Home />
                </main>
                <Footer />
              </>
            }
          />

          <Route
            path="/login"
            element={
              <>
                <Navbar />
                <main className="content">
                  <Login />
                </main>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;