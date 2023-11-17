import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <a className="nav-link active ma-4" href="#posts-new">
            New Post
          </a>
          <a className="nav-link active" href="#posts-index">
            All Posts
          </a>
          <Link className="nav-link active" to="/signup">
            Sign Up
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
