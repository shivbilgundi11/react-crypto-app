import React from 'react'
import { NavLink } from 'react-router-dom';
import '../App.css';

const NavMenu = () => {
    
  return (
    <div className="navmenu-container">
      <div className="navigation">
        <ul>
          <li className="list active">
            <NavLink to={"/"}>
              <span className="icon">
                <i className="ri-home-7-line"></i>
              </span>
              <span className="text">Home</span>
            </NavLink>
          </li>
          <li className="list">
            <NavLink to={"/exchanges"}>
              <span className="icon">
                <i className="ri-exchange-dollar-line"></i>
              </span>
              <span className="text">Exchanges</span>
            </NavLink>
          </li>
          <li className="list">
            <NavLink to={"/coins"}>
              <span className="icon">
                <i className="ri-bit-coin-line"></i>
              </span>
              <span className="text">Coins</span>
            </NavLink>
          </li>
          <li className="list">
            <NavLink to={"/news"}>
              <span className="icon">
                <i className="ri-newspaper-line"></i>
              </span>
              <span className="text">News</span>
            </NavLink>
          </li>
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}

export default NavMenu;