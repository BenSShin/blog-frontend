export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      {/* new blog post */}
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" />
      </div>
      <div>
        <label htmlFor="body">Body:</label>
        <input type="text" id="body" />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input type="text" id="image" />
      </div>
      <div>
        <button id="post-submit" type="submit">
          Submit
        </button>
      </div>
    </div>
  );
}
