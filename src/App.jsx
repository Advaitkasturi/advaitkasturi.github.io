import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/home";
import Navbar from "./assets/pages/navbar";
import ContactFooter from "./assets/pages/contact";
import Skills from "./assets/pages/skills";
import Experience from "./assets/pages/experience";
import Projects from "./assets/pages/projects";
import IEEE from "./assets/pages/ieee";
import GDG from "./assets/pages/gdg";
import Hack from "./assets/pages/hack"; // ✅ Import your Hack page

export default function App() {
  return (
    <Router basename="/"> {/* <-- Set this to '/' if your repo is username.github.io */}
      <div className="min-h-screen flex flex-col bg-white text-black dark:bg-black dark:text-white">
        <Navbar />
        <main className="flex-grow p-6">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Experience />
                  <Skills />
                  <Projects />
                </>
              }
            />
            <Route path="/ieee" element={<IEEE />} />
            <Route path="/gdg" element={<GDG />} />
            <Route path="/hack" element={<Hack />} /> {/* ✅ New Route */}
          </Routes>
        </main>
        <ContactFooter />
      </div>
    </Router>
  );
}
