import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Home";
import Characters from "./Characters";
import CharacterDetails from "./CharacterDetails";
import NotFound from "./NotFound";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<CharacterDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
