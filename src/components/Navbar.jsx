import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const [regionDrop, setRegionDrop] = useState(false);

  const close = () => {
    setOpen(false);
    setDrop(false);
    setRegionDrop(false);
  };

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>🇮🇳 ROBOCUP INDIA</span>
          <span>Robotics • AI • Education • Innovation</span>
        </div>
      </div>

      <header className="navbar">
        <div className="container nav-inner">

          <Link to="/" className="brand" onClick={close}>
            <img
              src="/images/robocupindialogo.jpeg"
              alt="RoboCup Junior India"
              className="brand-logo"
            />
          </Link>

          <button
            className="menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>

          <nav className={open ? "nav-links open" : "nav-links"}>

            <NavLink to="/" end onClick={close}>
              Home
            </NavLink>

            <NavLink to="/about" onClick={close}>
              About
            </NavLink>

            {/* COMPETITIONS */}
            <div className="dropdown">
              <button onClick={() => setDrop(!drop)}>
                Competitions
                <ChevronDown
                  size={15}
                  className={drop ? "rotate" : ""}
                />
              </button>

              {drop && (
                <div className="dropdown-menu">
                  <Link to="/competitions" onClick={close}>
                    All Competitions
                  </Link>

                  <a href="/#soccer" onClick={close}>
                    Soccer
                  </a>

                  <a href="/#line" onClick={close}>
                    Rescue Line
                  </a>

                  <a href="/#maze" onClick={close}>
                    Rescue Maze
                  </a>
                  
                  <a href="/#simulation" onClick={close}>
                    Simulation
                  </a>

                  <a href="/#onstage" onClick={close}>
                    OnStage
                  </a>
                </div>
              )}
            </div>

            {/* REGIONS */}
            <div className="dropdown">
              <button onClick={() => setRegionDrop(!regionDrop)}>
                Regions
                <ChevronDown
                  size={15}
                  className={regionDrop ? "rotate" : ""}
                />
              </button>

              {regionDrop && (
                <div className="dropdown-menu">
                 <a href="https://www.robocupnorth.info/" onClick={close}>
                 North
              </a>

                  <a href="https://www.robocupnorth.info/" onClick={close}>
                    South
                  </a>
            

                  <a href="https://www.robocupnorth.info/" onClick={close}>
                    National
                  </a>
                </div>
              )}
            </div>

            <NavLink to="/events" onClick={close}>
              Events
            </NavLink>

            

            <NavLink to="/results" onClick={close}>
              Results
            </NavLink>

            <NavLink to="/news" onClick={close}>
              News
            </NavLink>

            <NavLink to="/contact" onClick={close}>
              Contact
            </NavLink>

            <Link
              className="nav-cta"
              to="/contact"
              onClick={close}
            >
              Register
              <ArrowUpRight size={16} />
            </Link>

          </nav>
        </div>
      </header>
    </>
  );
}
