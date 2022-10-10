import React, { useState } from "react";
import { tableColumn } from "../../types/tableColumn";
import { tableRow } from "../../types/tableRow";
import { getValue } from "./getValue";

type TableProps = {
  studentsData: tableRow[];
  tableColumns: tableColumn[];
  toggleRowCheck: (id: number) => void;
  toggleRowCheckAll: () => void;
  checkedAll: boolean;
};

export function Table({
  studentsData,
  tableColumns,
  toggleRowCheck,
  toggleRowCheckAll,
  checkedAll,
}: TableProps) {
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
      {studentsData.map((row) => (
        <div key={row.id} className="col-3 col-sm-12 row no-gutters">
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
      ))}
    </div>
  );
}
