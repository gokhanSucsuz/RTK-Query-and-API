import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-warning" to="/">
            API Project with REDUX
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/fetch-categories">
                Fetch: Categories
              </NavLink>
              <NavLink className="nav-link" to="/axios-categories">
                Axios: Categories
              </NavLink>
              <NavLink className="nav-link" to="/rtk-query-categories">
                RTK Query: Categories
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
