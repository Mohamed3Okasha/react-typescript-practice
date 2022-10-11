import { useState, useEffect } from "react";
import { filterType } from "../../types/filter";
import { FilterItem } from "./FilterItem";
import { useAppContext } from "./../../context/AppContext";
import { getValue } from "./../Table/getValue";

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
  const { studentsData, setStudentsData } = useAppContext();

  const handleApply = () => {
    handleReset();
    setData((prevData: any[]) => {
      let cloneData = [...prevData];
      filters.forEach((filter) => {
        const filterKey = Object.keys(filter)[0];
        cloneData.forEach((dataItem) => {
          if (filter.checked) {
            if (dataItem[filterKey] === filter[filterKey]) return;
            else {
              dataItem.visible = false;
              return dataItem;
            }
          }
        });
      });
      return cloneData;
      // const newArr = [...prevData];
      // prevData.map((dataItem) => {
      // let initialFilter = false;
      // filters.forEach((filter) => {
      //   const filterKey = Object.keys(filter)[0];
      //   if (
      //     filter.checked &&
      //     getValue(filterKey, dataItem) === filter[filterKey]
      //   ) {
      //     initialFilter = true;
      //     console.log(
      //       filterKey,
      //       "if",
      //       cloneDataItem.name,
      //       getValue(filterKey, dataItem),
      //       filter[filterKey]
      //       );
      //       return;
      //     } else {
      //       console.log(
      //         filterKey,
      //         "else",
      //         cloneDataItem.name,
      //         getValue(filterKey, dataItem),
      //         filter[filterKey]
      //         );
      //         cloneDataItem.visible = false;
      //       }
      //     });
      //     return cloneDataItem;
      //   }
      // })
      // return newArr;
    });
  };

  const handleReset = () => {
    setData((prevData: any[]) =>
      prevData.map((dataItem) => ({ ...dataItem, visible: true }))
    );
  };
  const toggleFilterCheck = (index: number) => {
    // setIsChecked((prevIsChecked) => !prevIsChecked);
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
