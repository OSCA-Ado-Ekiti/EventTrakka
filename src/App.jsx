import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About/About";
import View from "./pages/View";
import Event from "./pages/Event";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/view" element={<View />} />
        <Route path="/events" element={<Event />} />
      </Routes>
    </div>
  );
}
