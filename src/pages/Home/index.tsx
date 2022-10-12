import FilterModal from "./../../components/Filter/FilterModal";
import CustomizeDisplayModal from "./../../components/CustomizeDisplay/CustomizeDisplayModal";
import { Table } from "../../components/Table";
import { useAppContext } from "../../context/AppContext";

export function Home() {
  const {
    studentsData,
    setStudentsData,
    studentTableColumns,
    setStudentTableColums,
  } = useAppContext();

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
          <FilterModal
            data={studentsData}
            setData={setStudentsData}
            filtersData={[{ age: 25 }, { major: "SE" }]}
          />
          <button
            type="button"
            className="btn btn-secondary ms-2"
            data-bs-toggle="modal"
            data-bs-target="#customizeDisplayModal"
          >
            Customize Display
          </button>
          <CustomizeDisplayModal
            CustomizeTableColumns={studentTableColumns}
            setColumns={setStudentTableColums}
          />
        </div>
        <Table
          data={studentsData}
          setData={setStudentsData}
          tableColumns={studentTableColumns}
        />
      </div>
    </>
  );
}
