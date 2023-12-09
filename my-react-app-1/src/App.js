import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import React from "react";
import { LongDescription } from "./components/LongDescription";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/task/:id" element={<LongDescription />} />
    </Routes>
  );
};

export default App;
