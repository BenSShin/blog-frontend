import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <Link className="nav-link active ma-4" to="/posts/new">
            New Post
          </Link>
          <Link className="nav-link active" to="/posts">
            All Posts
          </Link>
          {localStorage.jwt === undefined ? (
            <>
              <div className="nav-link active">
                <Link className="nav-link active" to="/signup">
                  Sign Up
                </Link>
              </div>
              <div className="nav-link active">
                <Link className="nav-link active" to="/login">
                  Login
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="nav-link active px-2">
                <Link className="nav-link active" to="/logout">
                  Logout
                </Link>
              </div>
            </>
          )}
          <div className="col-2"></div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
}
