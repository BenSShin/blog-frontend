export function PostsIndex(props) {
  console.log(props);

  return (
    <div className="container p-4" id="posts-index">
      <h1>All Posts</h1>
      <div className="row row-cols-1 row-cols-md-1 g-4">
        <div className="col-12 p-4">
          {props.posts.map((post) => (
            <div className="card" key={post.id}>
              <img src={post.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
                <button className="btn btn-secondary" onClick={() => props.onShowPost(post)}>
                  More Info
                </button>
              </div>
            </div>
          ))}
        </div>
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
