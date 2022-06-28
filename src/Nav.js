import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";
function Nav() {
  const [show, hide] = useState(false);
  const history = useNavigate();

  const transionNavBar = () => {
    if (window.scrollY > 100) {
      hide(true);
    } else {
      hide(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transionNavBar);
    return () => window.addEventListener("scroll", transionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "navBlack"}`}>
      <div className="navContainer">
        <img
        onClick={() => history("/")}
          className="navlogo"
          src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-1-1.png"
          alt="netflix logo"
        />
        <img
          onClick={() => history("/profile")}
          className="navavtar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
