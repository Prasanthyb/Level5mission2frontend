import React, { useState } from 'react';
import "./App.css";

const Navbar = () => {
  // State to control the visibility of the mobile menu
  const [show, setShow] = useState(false);

  return (
    <>
      {/* Navbar Background */}
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
          <div className="container-fluid">
            {/* Logo and Brand */}
            <a className="nav-link active" aria-current="page" href="/">
              <img
                style={{ borderRadius: '50%', width: '150px', height: '75px' }}
                src="/images/carlogo.webp"
                alt="ClickAndShop Logo"
              />
              <span className="text-dark ms-1 fs-5 fw-bold fst-italic">
                Turners
                <p className="text-dark ms-1 fs-6 fw-bold fst-italic">Don't Dream It, Drive It!</p>
              </span>
            </a>
            
            {/* Mobile Toggle Button */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => {
                setShow(!show);
              }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar Links */}
            <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul className="navbar-nav d-flex justify-content-center" style={{ color: 'white' }}>
                {/* Home Link */}
                <li className="nav-item">
                  <a
                    className="nav-link active d-flex align-items-center justify-content-center"
                    style={{ width: '70px', height: '5px', color: 'white' }}
                    href="/Home"
                  >
                    Home
                  </a>
                </li>
                {/* Services Link */}
                <li className="nav-item">
                  <a
                    className="nav-link active d-flex align-items-center justify-content-center"
                    style={{ width: '70px', height: '5px', color: 'white' }}
                    href="/Services"
                  >
                    Services
                  </a>
                </li>
                {/* About Link */}
                <li className="nav-item">
                  <a
                    className="nav-link active d-flex align-items-center justify-content-center"
                    style={{ width: '70px', height: '5px', color: 'white' }}
                    href="/About"
                  >
                    About
                  </a>
                </li>
                {/* Cart Link */}
                <li className="nav-item">
                  <a
                    className="nav-link active d-flex align-items-center justify-content-center"
                    style={{ width: '70px', height: '5px', color: 'white' }}
                    href="/Cart"
                  >
                    Cart
                  </a>
                </li>
              </ul>
              
              {/* Sign Up and Log In Buttons */}
              <form className="d-flex">
                <button className="btn btn-outline-dark" type="submit" style={{ width: '100px', height: '50px', color: "white" }}>
                  Sign Up
                </button>
                <button className="btn btn-outline-dark ms-5" type="submit" style={{ width: '100px', height: '50px', color: "white" }}>
                  Log In
                </button>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
