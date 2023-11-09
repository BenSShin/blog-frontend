export function PostsShow(props) {
  return (
    <div id="posts-show">
      <h1>Posts Info</h1>
      <h2>{props.post.title}</h2>
      <p>{props.post.body}</p>
      <p>{props.post.image}</p>
    </div>
  );
}
