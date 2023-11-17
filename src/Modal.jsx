// import "./Modal.css";

export function Modal(props) {
  if (props.show) {
    return (
      <div className="modal fade" id="staticBackdrop">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="submit" className="btn-close" data-bs-dismiss="modal" onClick={props.onClose}></button>
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
