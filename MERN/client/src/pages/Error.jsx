import { NavLink } from "react-router-dom";

function Error() {
  return (
    <>
      <div id="error-page">
        <div className="content">
          <h2 className="header">404</h2>
          <h4>Sorry! Page not found</h4>
          <p>
            Oops! It seems like the page your are trying to access does not
            exist. If you belive there is an issue, feel free to report it, and
            we will look into it
          </p>
          <div className="btns">
            <NavLink className="button-21" to="/">
              return home
            </NavLink>
            <NavLink className="button-21 btn-ml" to="/contact">
              report problem
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Error;
