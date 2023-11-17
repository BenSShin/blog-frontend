import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <div className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Account
            </a>
            <div className="dropdown-menu">
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
            </div>
          </div>
          <Link className="nav-link active ma-4" to="/posts/new">
            New Post
          </Link>
          <Link className="nav-link active" to="/posts">
            All Posts
          </Link>
          <div className="col-2"></div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
}

{
  /* <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a> */
}
