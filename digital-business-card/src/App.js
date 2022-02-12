import React from "react";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";
import "./styles.css";

export default function App() {
  return (
    <div className="main-card">
      <Info />
      <div className="middle-background">
        <About />
        <Interests />
      </div>
      <Footer />
    </div>
  );
}
