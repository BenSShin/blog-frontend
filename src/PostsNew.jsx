export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      {/* new blog post */}
      <form method="POST" action="http://localhost:3000/posts.json">
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
