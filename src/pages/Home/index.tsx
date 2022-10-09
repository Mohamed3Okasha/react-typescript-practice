import FilterModal from "./../../components/Filter/FilterModal";
import CustomizeDisplayModal from "./../../components/CustomizeDisplay/CustomizeDisplayModal";
import { Table } from "../../components/Table";

export function Home() {
  return (
    <>
      <div className="container mt-5">
        <div className="d-flex justify-content-end mb-3">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#filterModal"
          >
            Filter
          </button>
          <FilterModal />
          <button
            type="button"
            className="btn btn-secondary ms-2"
            data-bs-toggle="modal"
            data-bs-target="#customizeDisplayModal"
          >
            Customize Display
          </button>
          <CustomizeDisplayModal />
        </div>
        <Table />
      </div>
    </>
  );
}
