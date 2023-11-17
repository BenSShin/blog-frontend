export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log("handle submit", params);
    props.onCreatePost(params);
    event.target.reset();
  };

  return (
    <div id="posts-new">
      <hr />
      <h1>New post</h1>
      {/* new blog post */}
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Title:
          </span>
          <input
            name="title"
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Body:
          </span>
          <input
            name="body"
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Image:
          </span>
          <input
            name="image"
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <div>
          <button className="btn btn-secondary" id="post-submit" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
