import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/index.tsx"
import About from "./pages/about/about.tsx"
import Mulity from "./pages/multiTable/index.tsx"
import Appx from "./App.tsx"
function App() {
  return (
    <div className="App">
      <h1 className="Title">Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="multy" element={<Mulity />} />
        <Route path="app" element={<Appx />} />
      </Routes>
    </div>
  );
}
export default App