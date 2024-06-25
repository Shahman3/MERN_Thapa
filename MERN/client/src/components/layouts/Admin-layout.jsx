import { NavLink, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../store/auth";

// import { FaUserAlt } from "react-icons/fa";
// import { GrContact } from "react-icons/gr";
// import { MdOutlineMiscellaneousServices } from "react-icons/md";
export function AdminLayout() {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <header>
        <div className="">
          <div id="mySidenav" className="sidenav">
            <ul>
              <li id="admin-users">
                <NavLink to="/admin/users">
                  {/* <FaUserAlt /> */}
                  Users
                </NavLink>
              </li>
              <li id="admin-contact">
                <NavLink to="/admin/contacts">
                  {/* <GrContact /> */}
                  Contacts
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="/services">
                  <MdOutlineMiscellaneousServices />
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaHome />
                  Home
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}
