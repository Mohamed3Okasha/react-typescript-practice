import React, { useState } from "react";
import { tableRow } from "../../types/tableRow";
import { getValue } from "./getValue";

export function Table() {
  const [columns, setColums] = useState<string[]>(["name", "age", "major"]);
  const [data, setData] = useState<tableRow[]>([
    { id: 1, name: "Ahmed", age: 25, major: "SE", checked: false },
    { id: 2, name: "Mohamed", age: 22, major: "SD", checked: false },
    { id: 3, name: "Hammad", age: 27, major: "CS", checked: false },
  ]);

  const [checkAll, setCheckAll] = useState(false);

  const handleToggleInput = (
    id: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setData((currData) => {
      return currData.map((row) => {
        if (row.id === id) {
          return { ...row, checked: !row.checked };
        } else return row;
      });
    });
  };

  const handleToggleAllInputs = () => {
    setCheckAll((prevCheckAll) => !prevCheckAll);

    setData((prevData) => {
      return prevData.map((row) => {
        if (row.checked === checkAll) return { ...row, checked: !checkAll };
        else return row;
      });
    });
  };
  return (
    <div className="row no-gutters justify-content-center">
      <div className="col-3 col-sm-12 row no-gutters">
        <div className="d-none d-sm-block col-sm-1 text-white bg-dark m-1">
          <input
            type="checkbox"
            checked={checkAll}
            onChange={handleToggleAllInputs}
          />
        </div>
        {columns.map((col) => (
          <div key={col} className="col-sm text-white bg-dark m-1">
            {col}
          </div>
        ))}
      </div>
      {data.map((row) => (
        <div key={row.id} className="col-3 col-sm-12 row no-gutters">
          <div className="d-none d-sm-block col-sm-1 bg-light m-1">
            <input
              type="checkbox"
              checked={row.checked}
              onChange={(e) => handleToggleInput(row.id, e)}
            />
          </div>
          {columns.map((col) => (
            <div key={col + row.id} className="col-sm bg-light m-1">
              {getValue(col, row)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
