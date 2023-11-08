export function PostsIndex(props) {
  console.log(props);

  return (
    <div id="posts-index">
      <h1>All Posts</h1>
      {/* loop of defined post data props from the parent component */}
      {props.posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <img src={post.image} alt="Images" />
          <button onClick={() => props.onShowPost(post)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
