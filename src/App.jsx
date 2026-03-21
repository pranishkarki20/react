
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Category from "./components/Categoryy"
import Contact from "./components/contact";
import Admin from "./pages/admin"
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
                  <section id="category">
                  <Category />
                  </section>
                  <Contact />
                </main>
                <Footer />
              </>
            }
          />
          <Route path="/pages/admin" element={<Admin />} />
          <Route  path="/login" element={<Login />}/>
          <Route
            path="*"
            element={
              <>
                <Navbar />
                <main className="content" style={{ padding: "24px" }}>
                  <h2>Page not found</h2>
                  <p>Use the navigation menu to return to the home page.</p>
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
