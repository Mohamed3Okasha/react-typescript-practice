import React, { useState } from "react";
import { courseTableRow } from "../../types/courseTableRow";
import { tableColumn } from "../../types/tableColumn";
import { tableRow } from "../../types/tableRow";
import { getValue } from "./getValue";
const { v4: uuidv4 } = require("uuid");

type TableProps = {
  data: (tableRow | courseTableRow)[];
  setData: (data: any) => void;
  tableColumns: tableColumn[];
};

export function Table({ data, setData, tableColumns }: TableProps) {
  const [checkedAll, setCheckedAll] = useState(false);

  const toggleRowCheck = (id: number) => {
    setData((currData: any[]) => {
      return currData.map((row: any) => {
        if (row.id === id) {
          return { ...row, checked: !row.checked };
        } else return row;
      });
    });
  };

  const toggleRowCheckAll = () => {
    setCheckedAll((prevCheckAll) => !prevCheckAll);
    setData((prevData: tableRow[]) => {
      return prevData.map((row: tableRow) => {
        if (row.checked === checkedAll) return { ...row, checked: !checkedAll };
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
            checked={checkedAll}
            onChange={toggleRowCheckAll}
          />
        </div>
        {tableColumns.map((col) => {
          const colKey = Object.keys(col)[0];
          if (col[colKey])
            return (
              <div key={colKey} className="col-sm text-white bg-dark m-1">
                {colKey}
              </div>
            );
        })}
      </div>
      {data.map((row) => {
        if (row.visible) {
          return (
            <div key={uuidv4()} className="col-3 col-sm-12 row no-gutters">
              <div className="d-none d-sm-block col-sm-1 bg-light m-1">
                <input
                  type="checkbox"
                  checked={row.checked}
                  onChange={() => toggleRowCheck(row.id)}
                />
              </div>
              {tableColumns.map((col) => {
                const colKey = Object.keys(col)[0];
                if (col[colKey])
                  return (
                    <div key={colKey + row.id} className="col-sm bg-light m-1">
                      {getValue(colKey, row)}
                    </div>
                  );
              })}
            </div>
          );
        }
      })}
    </div>
  );
}
