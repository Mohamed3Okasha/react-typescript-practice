import { createContext, useContext, ReactNode, useState } from "react";
import { tableColumn } from "../types/tableColumn";
import { tableRow } from "../types/tableRow";
import { students, columns } from "./../data/students";

type AppProviderProps = {
  children: ReactNode;
};

type AppContextsVals = {
  studentsData: tableRow[];
  setStudentsData: (studentsData: any) => void;
  toggleRowCheck: (id: number) => void;
  toggleRowCheckAll: () => void;
  checkedAll: boolean;
  tableColumns: tableColumn[];
  setTableColums: (localTableColumns: tableColumn[]) => void;
};

const AppContext = createContext({} as AppContextsVals);

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }: AppProviderProps) {
  const [studentsData, setStudentsData] = useState(students);
  const [checkedAll, setCheckedAll] = useState(false);
  const [tableColumns, setTableColums] = useState<tableColumn[]>(columns);
  const toggleRowCheck = (id: number) => {
    setStudentsData((currData) => {
      return currData.map((row) => {
        if (row.id === id) {
          return { ...row, checked: !row.checked };
        } else return row;
      });
    });
  };

  const toggleRowCheckAll = () => {
    setCheckedAll((prevCheckAll) => !prevCheckAll);

    setStudentsData((prevData) => {
      return prevData.map((row) => {
        if (row.checked === checkedAll) return { ...row, checked: !checkedAll };
        else return row;
      });
    });
  };

  return (
    <AppContext.Provider
      value={{
        studentsData,
        setStudentsData,
        toggleRowCheck,
        toggleRowCheckAll,
        checkedAll,
        tableColumns,
        setTableColums,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
