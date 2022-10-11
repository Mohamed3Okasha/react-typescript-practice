import { createPortal } from "react-dom";
import { CustomizeDisplay } from ".";
import { tableColumn } from "../../types/tableColumn";
type customDiaplayModalProps = {
  CustomizeTableColumns: any;
  setColumns: (CustomizeTableColumns: any) => void;
};
const ModalOverlay = ({
  CustomizeTableColumns,
  setColumns,
}: customDiaplayModalProps) => {
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
          <CustomizeDisplay
            CustomizeTableColumns={CustomizeTableColumns}
            setColumns={setColumns}
          />
        </div>
      </div>
    </div>
  );
};

export default function CustomizeDisplayModal({
  CustomizeTableColumns,
  setColumns,
}: customDiaplayModalProps) {
  return (
    <>
      {createPortal(
        <>
          <ModalOverlay
            CustomizeTableColumns={CustomizeTableColumns}
            setColumns={setColumns}
          />
        </>,
        document.getElementById("modal-root")!
      )}
    </>
  );
}
