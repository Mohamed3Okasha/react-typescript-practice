import { createPortal } from "react-dom";
import Filter from ".";

const ModalOverlay = ({ data, setData, filtersData }: any) => {
  return (
    <div
      className="modal fade"
      id="filterModal"
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
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <Filter filtersData={filtersData} data={data} setData={setData} />
        </div>
      </div>
    </div>
  );
};

export default function FilterModal({ data, setData, filtersData }: any) {
  return (
    <>
      {createPortal(
        <>
          {/* <Backdrop onClick={props.onConfirm} /> */}
          <ModalOverlay
            data={data}
            setData={setData}
            filtersData={filtersData}
          />
        </>,
        document.getElementById("modal-root")!
      )}
    </>
  );
}
