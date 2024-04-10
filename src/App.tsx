import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./Routes/NavBar";
import Background from "./components/Background";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Background>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Background>
    </BrowserRouter>
  );
};

export default App;
