// import logo from './logo.svg';
import "./App.css";
import React from "react";
import { useState } from "react";
import NavBar from "./components/navbar/navbar";
import HomePage from "./pages/home/homepage";
import GetStarted from "./pages/get_started/get_started";
import Gallery from "./pages/gallery/gallery";
import Footer from "./components/footer/footer";
import Contact from "./pages/contact/contact";

function App() {
  const [selected, setSelected] = useState("home");
  const handleSelect = (page) => {
    setSelected(page);
  };
  return (
    <div className="App overflow-x-hidden">
      <div className="z-9999 overflow-x-hidden relative">
        <NavBar selected={selected} onSectionClicked={handleSelect} />
      </div>
      {selected.toLowerCase() === "home" && (
        <div className="relative z-0 w-screen h-[90%]">
          <HomePage
            onStartButtonClick={() => handleSelect("get-started")}
            onGalleryButtonClick={() => handleSelect("gallery")}
            onDocumentationButtonClick={() => handleSelect("documentation")}
            onContactButtonClick={() => handleSelect("contact")}
          />
        </div>
      )}
      {selected.toLowerCase() === "get-started" && (
        <div className="relative z-0">
          <GetStarted />
        </div>
      )}
      {selected.toLowerCase() === "gallery" && (
        <div className="relative z-0">
          <Gallery />
        </div>
      )}
      {selected.toLowerCase() === "contact" && (
        <div className="relative z-0">
          <Contact />
        </div>
      )}
      <div className="overflow-x-hidden w-full h-[10%]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
