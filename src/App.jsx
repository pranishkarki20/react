import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Product from "./components/Products"
import Contact from "./components/contact";
import Admin from "./components/admin"
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
                  <section id="product">
                  <Product />
                  </section>
                  <Contact />
                </main>
                <Footer />
              </>
            }
          />
          <Route path="/admin" element={<Admin />} />
          <Route  path="/login" element={<Login />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;