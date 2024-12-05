import { Outlet, Link  } from "react-router-dom";

function Pages() {
  return (
    <>
      <nav >
        <h1> Namaste! Welcome to Home Page</h1>
          <p>
            <Link to="/" >Home</Link>
          </p>
          <p>
            <Link to="/todo">Form</Link>
          </p>
          <p>
            <Link to="/count"> Counter</Link>
          </p>
      </nav>
      <Outlet />
    </>
  );
}

export default Pages;