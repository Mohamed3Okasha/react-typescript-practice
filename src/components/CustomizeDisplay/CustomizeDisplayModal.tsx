import { createPortal } from "react-dom";

const ModalOverlay = (props: any) => {
  return (
    <div
      className="modal fade"
      id="customizeDisplayModal"
      // tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Customize Display
            </h5>
            <button
              type="button"
              // ref={closeLoginBtnRef}
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <h1>Customize Display Modal</h1>
        </div>
      </div>
    </div>
  );
};

export default function CustomizeDisplayModal(props: any) {
  return (
    <>
      {createPortal(
        <>
          <ModalOverlay />
        </>,
        document.getElementById("modal-root")!
      )}
    </>
  );
}
