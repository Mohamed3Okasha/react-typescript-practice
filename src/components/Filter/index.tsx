import { useState, useEffect } from "react";
import { filterType } from "../../types/filter";
import { FilterItem } from "./FilterItem";
import { useLocation } from "react-router-dom";

type FilterProps = {
  filtersData: filterType[];
  data: any;
  setData: any;
};

export default function Filter({ filtersData, data, setData }: FilterProps) {
  const location = useLocation();
  let localStorageItem =
    location.pathname.slice(1) === "home"
      ? "studentsFilters"
      : "coursesFilters";

  const [filters, setFilters] = useState<filterType[]>(() => {
    let storageFilters = localStorage.getItem(localStorageItem);
    if (storageFilters) {
      return JSON.parse(storageFilters);
    } else return filtersData.map((filter) => ({ ...filter, checked: false }));
  });

  const [saveFilters, setSaveFilters] = useState(false);

  useEffect(() => {
    handleApplyUpdateState();
  }, []);

  const handleApplyUpdateState = () => {
    setData((prevData: any[]) =>
      prevData.map((dataItem) => ({ ...dataItem, visible: true }))
    );

    setData((prevData: any[]) => {
      let cloneData = [...prevData];
      filters.forEach((filter) => {
        const filterKey = Object.keys(filter)[0];
        cloneData.forEach((dataItem) => {
          if (filter.checked) {
            if (dataItem[filterKey] === filter[filterKey]) return;
            else {
              dataItem.visible = false;
            }
          }
        });
      });
      return cloneData;
    });
  };
  const handleApply = () => {
    handleApplyUpdateState();

    if (saveFilters) {
      localStorage.setItem(localStorageItem, JSON.stringify(filters));
    }
  };

  const handleReset = () => {
    setData((prevData: any[]) =>
      prevData.map((dataItem) => ({ ...dataItem, visible: true }))
    );
    setFilters((prevFilters) =>
      prevFilters.map((filter) => ({ ...filter, checked: false }))
    );
    setSaveFilters(false);
    localStorage.removeItem(localStorageItem);
  };
  const toggleFilterCheck = (index: number) => {
    setFilters((prevFilters) =>
      prevFilters.map((filter, filterIndex) => {
        if (filterIndex === index)
          return { ...filter, checked: !filter.checked };
        else return filter;
      })
    );
  };

  const toggleSaveFiltersCheck = () => {
    setSaveFilters((prev) => !prev);
  };

  return (
    <div className="container my-5">
      {filters.map((filter, index) => {
        return (
          <FilterItem
            key={index}
            index={index}
            filter={filter}
            toggleFilterCheck={toggleFilterCheck}
          />
        );
      })}
      <div className="row mt-5 justify-content-center">
        <div className="col-6">
          <input
            type="checkbox"
            checked={saveFilters}
            onChange={toggleSaveFiltersCheck}
            id="saveLater"
          />
          <label htmlFor="saveLater" className="ms-1">
            Save filter for later
          </label>
        </div>
      </div>
      <div className="row mt-3 justify-content-center">
        <button className="col-3 btn btn-warning me-2" onClick={handleReset}>
          Reset
        </button>
        <button className="col-3 btn btn-success" onClick={handleApply}>
          Apply
        </button>
      </div>
    </div>
  );
}
