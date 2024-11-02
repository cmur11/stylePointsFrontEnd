import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { User } from "./models/user-model";
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data?.firstName}</p>
      </header>
    </div>
  );
}

export default App;
