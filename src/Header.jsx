import { Link } from "react-router-dom";
import { Logout } from "./Logout";

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
                <Logout className="nav-link-active" />
              </div>
            </>
          )}
          <div className="col-2"></div>
        </div>
      </nav>
    </header>
  );
}
