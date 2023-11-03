import "./App.css";

function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
    </header>
  );
}

function PoststNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      {/* new blog post */}
      <div>
        Title: <input type="text" id="title" />
      </div>
      <div>
        Content: <input type="text" id="content" />
      </div>
      <div>
        Image: <input type="text" id="image" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
}
function PostsIndex() {
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {/* first post */}
      <div className="posts">
        <h2>Post 1</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis explicabo, consectetur nobis dolore, quo,
          doloribus nam amet perferendis veritatis expedita voluptates. Cumque et itaque ea quidem nihil recusandae,
          soluta officiis?
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
  );
}
function Footer() {
  return (
    <footer>
      <p>Copyright 20XX</p>
    </footer>
  );
}

function Content() {
  return (
    <div>
      <PoststNew />
      <PostsIndex />
    </div>
  );
}
function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
