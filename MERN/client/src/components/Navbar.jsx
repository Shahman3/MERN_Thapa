import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";
import { GiMp40 } from "react-icons/gi";
function Navbar() {
  const { isLoggedIn, user, isLoading } = useAuth();
  // const { isLoggedIn } = useAuth();
  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <NavLink to="/" className="nav-a">
              <GiMp40 />
              Shahman Ali
            </NavLink>
          </div>
          <nav>
            <ul>
              <li className="aaaa">
                <NavLink to="/" className="nav-a">
                  Home
                </NavLink>
              </li>
              <li className="">
                <NavLink to="/about" className="nav-a">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="nav-a">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="nav-a">
                  Contact
                </NavLink>
              </li>
              {isLoggedIn && !isLoading && user.isAdmin && (
                <li>
                  <NavLink to="/admin/users" className="nav-a">
                    Admin
                  </NavLink>
                </li>
              )}

              {isLoggedIn ? (
                <li>
                  <NavLink to="/logout" className="nav-a">
                    Logout
                  </NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="/register" className="nav-a">
                      {" "}
                      Register{" "}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login" className="nav-a">
                      {" "}
                      Login{" "}
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
