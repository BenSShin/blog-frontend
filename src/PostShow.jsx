export function PostsShow(props) {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      <div className="col">
        <div className="card">
          <img src="props.post.image" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.post.title}</h5>
            <p className="card-text">{props.post.image}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
