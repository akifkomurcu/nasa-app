import React from "react";
import { Link } from "react-router-dom";
import style from "./navbar.module.css";
import ToggleColor from "../ToggleColor";
function Navbar() {
  return (
    <>
      <nav>
        <div className={style.navbarArea}>
          <div className={style.navbarItems}>
            <div className={style.navbarButtons}>
              <Link to="/">Home</Link>
              <Link to="/daily">Todays Picture</Link>
              <Link to="/spirit">Spirit</Link>
              <Link to="/opportunity">Opportunity</Link>
              <Link to="/curiosity">Curiosity</Link>
              <div className={style.themeButton}>
                <ToggleColor />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
