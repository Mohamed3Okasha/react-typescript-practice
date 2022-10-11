import FilterModal from "./../../components/Filter/FilterModal";
import CustomizeDisplayModal from "./../../components/CustomizeDisplay/CustomizeDisplayModal";
import { Table } from "../../components/Table";
import { useAppContext } from "../../context/AppContext";

export function Courses() {
  const {
    coursesData,
    setCoursesData,
    courseTableColumns,
    setCourseTableColums,
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
            data={coursesData}
            setData={setCoursesData}
            filtersData={[{ hours: 10 }, { major: "SE" }]}
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
            CustomizeTableColumns={courseTableColumns}
            setColumns={setCourseTableColums}
          />
        </div>
        <Table
          data={coursesData}
          setData={setCoursesData}
          tableColumns={courseTableColumns}
        />
      </div>
    </>
  );
}
