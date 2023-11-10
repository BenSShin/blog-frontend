export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params);
    event.target.reset();
  };
  const handleClick = () => {
    props.onDestroyPost(props.post);
  };

  return (
    <div id="posts-show">
      {/* <img className="image h-50" src={props.post.image} alt="hi" /> */}
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input defaultValue={props.post.title} name="title" type="text" />
        </div>
        <div>
          Body: <input defaultValue={props.post.body} name="body" type="text" />
        </div>
        <div>
          Image: <input defaultValue={props.post.image} name="image" type="text" />
        </div>
        <button type="submit" data-bs-dismiss="modal">
          Update Post
        </button>
        <button onClick={handleClick} data-bs-dismiss="modal">
          Delete Post
        </button>
      </form>
      {/* <h2>{props.post.title}</h2>
      <p>{props.post.body}</p> */}
    </div>
  );
}
