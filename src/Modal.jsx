// import "./Modal.css";

export function Modal(props) {
  if (props.show) {
    return (
      <div className="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <section className="modal-body">
                {props.children}
                <button
                  type="button"
                  className="btn btn-secondary close"
                  data-bs-dismiss="modal"
                  onClick={props.onClose}
                >
                  Close
                </button>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// <div classNameName="modal-background">
//   <section classNameName="modal-main">
//     {props.children}
//     <button classNameName="close" type="button" onClick={props.onClose}>
//       &#x2715;
//     </button>
//   </section>
// </div>
