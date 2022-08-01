import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.svg";
import Logo1 from "../Images/Logo1.svg";
import Logo2 from "../Images/abcd.svg";
import { Icon } from "react-icons-kit";
import { shoppingCart } from "react-icons-kit/feather/shoppingCart";
import { auth } from "../Config/Config";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Navbar.css";
import Testing from "./testing";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
></link>;

function Navbar({ user }) {
  const location = useLocation();
  const history = useHistory();

  const handleLogout = () => {
    auth.signOut().then(() => {
      history.push("/login");
    });
  };

  return (
    <div>
      <div className="outer">
        <div className="Navbar">
          <div className="buttons">
            <Link to="/">
              <img src={Logo2} alt="logo" className="img" />
            </Link>
          </div>
          <div className="buttons">
            <Link to="/">
              <button
                className={location.pathname === "/" ? "active" : "link1"}
                id="abbb"
              >
                Home
              </button>
            </Link>
            <Link to="shop">
              <button
                className={location.pathname === "/shop" ? "active" : "link1"}
              >
                Shop
              </button>
            </Link>

            <Link to="blog">
              <button
                className={location.pathname === "/blog" ? "active" : "link1"}
              >
                Blog
              </button>
            </Link>

            <Link to="about">
              <button
                className={location.pathname === "/about" ? "active" : "link1"}
              >
                About
              </button>
            </Link>

            <Link to="contact">
              <button
                className={
                  location.pathname === "/contact" ? "active" : "link1"
                }
              >
                {" "}
                Contact
              </button>
            </Link>
          </div>
          <div className="right">
            {!user && (
              <div className="buttons">
                <Link to="login" className="link">
                  <button className="auth"> LOGIN </button>
                </Link>
              </div>
            )}
          </div>

          {user && (
            <div className="login">
              <div>
                <Link className="navlink" to="/">
                  <span class="wave">👋</span> {user}
                </Link>
              </div>
              <div>
                <Link to="cart">
                  <Icon icon={shoppingCart} size={20} />
                </Link>
                {/* <span className="cart-indicator">{totalQty}</span>*/}
              </div>
              <div onClick={handleLogout}>Log Out</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
