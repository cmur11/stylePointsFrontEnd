import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { User } from "./models/user-model";
import Navigation from "./components/navigation/Navigation";
import Landing from "./components/Landing/Landing";
import Signup from "./components/Landing/Signup/Signup";
import Welcome from "./components/Welcome/Welcome";

function App() {
  const [data, setData] = useState<User>();

  useEffect(() => {
    axios
      .get("/user")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  });
  return (
    <div className="App">
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
