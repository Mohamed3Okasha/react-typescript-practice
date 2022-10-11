import { createContext, useContext, ReactNode, useState } from "react";
import { tableColumn } from "../types/tableColumn";
import { tableRow } from "../types/tableRow";
import { students, studentColumns } from "./../data/students";
import { courses, courseColumns } from "./../data/courses";

type AppProviderProps = {
  children: ReactNode;
};

type AppContextsVals = {
  studentsData: tableRow[];
  setStudentsData: (studentsData: any) => void;
  studentTableColumns: tableColumn[];
  setStudentTableColums: (localTableColumns: tableColumn[]) => void;
};

const AppContext = createContext({} as AppContextsVals);

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }: AppProviderProps) {
  const [studentsData, setStudentsData] = useState(students);
  const [studentTableColumns, setStudentTableColums] =
    useState<tableColumn[]>(studentColumns);
  const [coursesData, setCoursesData] = useState(courses);
  const [courseTableColumns, setCourseTableColums] =
    useState<tableColumn[]>(courseColumns);

  return (
    <AppContext.Provider
      value={{
        studentsData,
        setStudentsData,
        studentTableColumns,
        setStudentTableColums,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
