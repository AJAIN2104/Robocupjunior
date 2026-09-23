import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Competitions from "./pages/Competitions";
import Events from "./pages/Events";
import Teams from "./pages/Teams";
import Results from "./pages/Results";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Comingsoon from "./pages/comingsoon";
export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/events" element={<Events />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/results" element={<Results />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/comingsoon" element={<Comingsoon />} />
      </Routes>
      <Footer />
    </div>
  );
}