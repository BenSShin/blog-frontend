// import { Link } from "react-router-dom";

export function PostsIndex(props) {
  console.log(props);
  return (
    <div className="mt-5" id="posts-index">
      <h1>All Posts</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {props.posts.map((post) => (
          <div key={post.id} className="col g-3">
            <div className="card h-100">
              <img src={post.image} className="card-img-top mt-2" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <hr />
                {/* <p className="card-text">{post.body}</p> */}
              </div>
              <div className="card-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  onClick={() => props.onShowPost(post)}
                >
                  More Info
                </button>
                {/* <Link to="/posts/:id">test</Link> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    // <div id="posts-index">
    //   <h1>All Posts</h1>
    //   {/* loop of defined post data props from the parent component */}
    //   {props.posts.map((post) => (
    //     <div key={post.id}>
    //       <h2>{post.title}</h2>
    //       <p>{post.body}</p>
    //       <img src={post.image} alt="Images" />
    //       <button onClick={() => props.onShowPost(post)}>More Info</button>
    //     </div>
    //   ))}
    // </div>
  );
}
