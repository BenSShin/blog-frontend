import "./App.css";

function App() {
  return (
    <div>
      <header>
        <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
      </header>

      <div id="posts-new">
        <h1>New post</h1>
        {/* new blog post */}
        <div>
          Title: <input type="text" />
        </div>
        <div>
          Content: <input type="text" />
        </div>
        <div>
          Image: <input type="text" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </div>

      <div id="posts-index">
        <h1>All posts</h1>
        {/* first post */}
        <div className="posts">
          <h2>Post 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis explicabo, consectetur nobis dolore,
            quo, doloribus nam amet perferendis veritatis expedita voluptates. Cumque et itaque ea quidem nihil
            recusandae, soluta officiis?
          </p>
        </div>
        <div className="posts">
          <h2>Post 2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sunt maxime necessitatibus ratione ducimus
            commodi deleniti aliquam dolorum esse error similique, quidem sed asperiores distinctio voluptas eius
            repudiandae. Nostrum, ipsa.
          </p>
        </div>
      </div>

      <footer>
        <p>Copyright 20XX</p>
      </footer>
    </div>
  );
}

export default App;
