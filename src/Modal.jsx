// import "./Modal.css";

export function Modal(props) {
  if (props.show) {
    return (
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">{props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}

// <div className="modal-background">
//   <section className="modal-main">
//     {props.children}
//     <button className="close" type="button" onClick={props.onClose}>
//       &#x2715;
//     </button>
//   </section>
// </div>
