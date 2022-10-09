import { createPortal } from "react-dom";

const ModalOverlay = (props: any) => {
  return (
    <div
      className="modal fade"
      id="filterModal"
      // tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Filter
            </h5>
            <button
              type="button"
              // ref={closeLoginBtnRef}
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <h1>Filter Modal</h1>
        </div>
      </div>
    </div>
  );
};

export default function FilterModal(props: any) {
  return (
    <>
      {createPortal(
        <>
          {/* <Backdrop onClick={props.onConfirm} /> */}
          <ModalOverlay />
        </>,
        document.getElementById("modal-root")!
      )}
    </>
  );
}
