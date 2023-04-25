import { useState } from "react";
import "./App.css";
import PropTypes from "prop-types";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");

      document.body.style.backgroundColor = "#212529";

      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";

      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
      <Navbar title="TextUtil" Mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About/>}/>
          
          
          <Route exact path="/" element={ <TextForm
          heading="Enter your text to analyze "
          Mode={Mode}
          showAlert={showAlert}
        />}/>
         
          
        </Routes>
       

      
      </div>
      </Router>

    </>
  );
}

export default App;
