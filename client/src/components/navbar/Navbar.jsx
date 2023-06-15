import { useContext, useState, useEffect } from "react";
import "./navbar.css";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../button/Button";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();
  const { loading, error, dispatch } = useContext(AuthContext);

  async function logout() {
    const res = await fetch("/auth/logout", {
      method: "GET",
    });

    dispatch({ type: "LOGOUT" });

    if (res.status === 200) {
      window.setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }

  function handleClick(e) {
    setClick(!click);
  }

  function closeMobileMenu() {
    setClick(false);
  }

  function showButton() {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <div className="logo">
            <img src={"/images/logo.png"} alt="logo" />
          </div>
        </Link>
        <div className="menu-icon">
          <div
            className={click ? "nav-link" : "nav-link"}
            onClick={handleClick}
          >
            Menu
          </div>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link" onClick={closeMobileMenu}>
              Services
            </Link>
          </li>
          {user ? (
            <li className="nav-item">
              <Link to="#" className="nav-link" onClick={closeMobileMenu}>
                {user.userName}
              </Link>
            </li>
          ) : (
            <li className="nav-item">
              <Link to="/login" className="nav-link" onClick={closeMobileMenu}>
                Login
              </Link>
            </li>
          )}
          {user ? (
            <li className="nav-item">
              <Button to="#" buttonStyle="btn--outline" onClick={logout}>
                Log out
              </Button>
            </li>
          ) : (
            <li className="nav-item">
              <Button buttonStyle="btn--outline">Sign up</Button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
