import { useState, useEffect } from "react";

export function CustomizeDisplay({
  CustomizeTableColumns,
  setColumns,
}: {
  CustomizeTableColumns: any[];
  setColumns: (CustomizeTableColumns: any) => void;
}) {
  const [localTableColumns, setLocalTableColumns] = useState(
    CustomizeTableColumns
  );

  useEffect(() => {}, []);

  const moveColumnUp = (index: number) => {
    setLocalTableColumns((prevColumn) => {
      let clonePrevColumn = [...prevColumn];
      [clonePrevColumn[index - 1], clonePrevColumn[index]] = [
        clonePrevColumn[index],
        clonePrevColumn[index - 1],
      ];
      return clonePrevColumn;
    });
  };

  const moveColumnDown = (index: number) => {
    setLocalTableColumns((prevColumn) => {
      let clonePrevColumn = [...prevColumn];
      [clonePrevColumn[index + 1], clonePrevColumn[index]] = [
        clonePrevColumn[index],
        clonePrevColumn[index + 1],
      ];
      return clonePrevColumn;
    });
  };

  const handleApply = () => {
    setColumns(localTableColumns);
  };

  const handleReset = () => {
    setColumns((prevCols: any) =>
      prevCols.map((col: any) => {
        const colKey = Object.keys(col)[0];
        return { [colKey]: true };
      })
    );
    setLocalTableColumns((prevCols: any) =>
      prevCols.map((col: any) => {
        const colKey = Object.keys(col)[0];
        return { [colKey]: true };
      })
    );
  };

  const toggleColumnVisibility = (colKey: string) => {
    setLocalTableColumns((prevColumns) =>
      prevColumns.map((col) => {
        const targetColKey = Object.keys(col)[0];
        if (targetColKey === colKey) return { [colKey]: !col[colKey] };
        else return col;
      })
    );
  };

  return (
    <>
      <div className="container my-5 justify-content-center">
        {localTableColumns.map((col, index) => {
          const colKey = Object.keys(col)[0];
          return (
            <div key={colKey} className="row mt-2 justify-content-center">
              <div className="col-2">
                <input
                  type="checkbox"
                  checked={col[colKey]}
                  onChange={() => toggleColumnVisibility(colKey)}
                  id={colKey}
                />
                <label htmlFor={colKey} className="ms-1">
                  {colKey}
                </label>
              </div>
              <div className="col-3 d-flex justify-content-around">
                <div className="w-100">
                  {index > 0 && (
                    <button
                      className="btn btn-sm btn-dark"
                      onClick={() => moveColumnUp(index)}
                    >
                      &uarr;
                    </button>
                  )}
                </div>
                <div className="w-100">
                  {index < localTableColumns.length - 1 && (
                    <button
                      className="btn btn-sm btn-dark"
                      onClick={() => moveColumnDown(index)}
                    >
                      &darr;
                    </button>
                  )}
                </div>
              </div>
            </div>
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
    </>
  );
}
