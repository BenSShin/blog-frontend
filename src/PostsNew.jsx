export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      {/* new blog post */}
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Title:
        </span>
        <input
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
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>
      <div>
        <button className="btn btn-dark" id="post-submit" type="submit">
          Submit
        </button>
      </div>
    </div>
  );
}
