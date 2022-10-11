import { useState, useEffect } from "react";
import { filterType } from "../../types/filter";
import { FilterItem } from "./FilterItem";

type FilterProps = {
  filtersData: filterType[];
  data: any;
  setData: any;
};

export default function Filter({ filtersData, data, setData }: FilterProps) {
  const [filters, setFilters] = useState<filterType[]>(() =>
    filtersData.map((filter) => ({ ...filter, checked: false }))
  );

  useEffect(() => {}, []);

  const handleApply = () => {
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

  const handleReset = () => {
    setData((prevData: any[]) =>
      prevData.map((dataItem) => ({ ...dataItem, visible: true }))
    );
    setFilters((prevFilters) =>
      prevFilters.map((filter) => ({ ...filter, checked: false }))
    );
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
