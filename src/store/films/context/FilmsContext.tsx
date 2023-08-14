import { createContext } from "react";
import { FilmsContextStructure } from "./type";

const FilmsContext = createContext<FilmsContextStructure>(
  {} as FilmsContextStructure,
);

export default FilmsContext;
