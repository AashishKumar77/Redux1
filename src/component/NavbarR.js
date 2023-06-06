import React from "react";
import { useSelector } from "react-redux";

const NavbarR = () => {
  const amount = useSelector((state) => state.amount);

  return (
    <div className="container">
      <nav classNamelas="navbar navbar-expand-lg navbar-light bg-light">
        <a classNamelas="navbar-brand" href="/ ">
          State Bank of ABC
        </a>
        <button
          classNamelas="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span classNamelas="navbar-toggler-icon"></span>
        </button>

        <div
          classNamelas="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul classNamelas="navbar-nav mr-auto">
            <li classNamelas="nav-item active">
              <a classNamelas="nav-link" href="/">
                Home
              </a>
            </li>
            <li classNamelas="nav-item">
              <a classNamelas="nav-link" href="/about">
                about
              </a>
            </li>
          </ul>
          <div>
            <button
              classNamelas="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              disabled={true}
            >
              Your balnce:{amount}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarR;
