
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";
import Home from "@/pages/Home";
import Portfolio from "@/pages/Portfolio";
import Resume from "@/pages/Resume";
import Contact from "@/pages/Contact";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <BackToTop />
        <footer className="py-8 text-center text-muted-foreground">
          <p>© 2025 Junior Backend Engineer. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
