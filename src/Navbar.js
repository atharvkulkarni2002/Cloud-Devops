import React from "react";
import PropTypes from "prop-types";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-${props.Mode} bg-${props.Mode==='dark'?'dark':'blue'}`}>
        <div className="container-fluid" >
          <Link className="navbar-brand" to="/"  style={{color: props.Mode==='dark'?'white':'black'}} >
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            color="#e9ecef"
            backgroundColor="#e9ecef"
           
      
          >
            <span className="navbar-toggler-icon" ></span>
          </button>
          <div className="collapse navbar-collapse "id="navbarSupportedContent" style={{color: props.Mode==='dark'?'white':'black'}}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item my-2">
                <Link className={`"nav-link active text-${props.Mode}"`} aria-current="page" to="/" style={{color: props.Mode==='dark'?'white':'black'}}>
                  Home
                </Link>
              </li>
              <li className="nav-item my-2 " style={{color: props.Mode==='dark'?'white':'black'}}>
                <Link className={`"nav-link text-${props.Mode==='dark'?'white':'black'} "`} to="/About" style={{color: props.Mode==='dark'?'white':'black'}}>
                  {props.aboutText}
                </Link>
              </li>
            </ul>
            <form className="d-flex mx-2" role="search" style={{color: props.Mode==='dark'?'white':'black'}}>
              <input
                className="form-control me-5"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{color:props.Mode==='dark'?'white':'black' }}
              />

              <div className={`"form-check form-switch mx-3 text- ${props.Mode==='light'?'dark':'light'}"`}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={props.toggleMode}
                />
                <label className="form-check-label mx-3" htmlFor="flexSwitchCheckDefault" style={{color: props.Mode==='dark'?'white':'black'}}>
                  Dark Mode
                </label>
              </div>
              <button className="btn btn-outline-dark" type="submit" style={{color: props.Mode==='dark'?'white':'black',backgroundColor:props.Mode==='dark'?'grey':'white'}}>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title",
  aboutText: "About",
};
