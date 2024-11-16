import React, { createContext, useState, useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import { User } from "./models/user-model";
import Navigation from "./components/navigation/Navigation";
import UserFirstTime from "./components/FirstTime/UserFirstTime";
import Signup from "./components/FirstTime/Signup/SignupQuestionsWrapper";
import Welcome from "./components/Welcome/Welcome";
import Login from "./components/Login/Login";
import DesignerFirstTime from "./components/FirstTime/DesignerLanding/DesignerFirstTime";

function App() {
  const [data, setData] = useState<User>();

  useEffect(() => {
    axios
      .get("/user")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="App">
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<UserFirstTime />} />
          <Route path="/signup/designer" element={<Signup />} />
          <Route path="/welcome" element={<Welcome />} />

          <Route path="/designer" element={<DesignerFirstTime />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
