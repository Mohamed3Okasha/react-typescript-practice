import { filterType } from "../../types/filter";
import { useState } from "react";

type FilterItemProps = {
  filter: filterType;
  index: number;
  toggleFilterCheck: (index: number) => void;
};

export function FilterItem({
  filter,
  index,
  toggleFilterCheck,
}: FilterItemProps) {
  const filterKey = Object.keys(filter)[0];
  //   const [isChecked, setIsChecked] = useState(false);

  return (
    <div key={filterKey} className="row mt-2 justify-content-center">
      <div className="col-6">
        <input
          type="checkbox"
          checked={filter.checked}
          onChange={() => toggleFilterCheck(index)}
          id={filterKey}
        />
        <label htmlFor={filterKey} className="ms-1">
          {`${filterKey} is ${filter[filterKey]}`}
        </label>
      </div>
    </div>
  );
}
