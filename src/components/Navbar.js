import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.svg";
import Logo1 from "../Images/Logo1.svg";
import { Icon } from "react-icons-kit";
import { shoppingCart } from "react-icons-kit/feather/shoppingCart";
import { auth } from "../Config/Config";
import { useHistory } from "react-router-dom";
import "./Navbar.css";

function Navbar({ user }) {
  const history = useHistory();

  const handleLogout = () => {
    auth.signOut().then(() => {
      history.push("/login");
    });
  };

  return (
    <div className="outer">
      {/*
      <img src={logo} alt="logo" />
      */}
      <div className="Navbar">
        <div className="buttons">
          <Link to="/">
            <img src={Logo1} alt="logo" className="img" />
          </Link>
        </div>
        <div className="buttons">
          <Link to="/" className="link1">
            <button>Home</button>
          </Link>
          <Link to="shop" className="link1">
            <button>Shop</button>
          </Link>

          <Link to="blog" className="link1">
            <button> Blog</button>
          </Link>

          <Link to="about" className="link1">
            <button> About Us </button>
          </Link>

          <Link to="contact" className="link1">
            <button> Contact</button>
          </Link>
        </div>
        <div className="right">
          {!user && (
            <div className="buttons">
              <Link to="login" className="link">
                <button className="auth"> LOGIN </button>
              </Link>

              <Link to="signup" className="link">
                <button className="auth"> SIGNUP </button>
              </Link>
            </div>
          )}
        </div>

        {user && (
          <div>
            <div>
              <Link className="navlink" to="/">
                {user}
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
  );
}

export default Navbar;
