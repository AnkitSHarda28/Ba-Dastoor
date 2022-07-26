import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
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
    <div>
      {/*
      <img src={logo} alt="logo" />
      */}
      <div className="Navbar">
        <div>
          <h1>Ba-Dastoor</h1>
        </div>
        <div className="right">
          {!user && (
            <div className="buttons">
              <button>
                <Link to="signup" className="link">
                  SIGNUP
                </Link>
              </button>
              <button>
                <Link to="login" className="link">
                  LOGIN
                </Link>
              </button>
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
