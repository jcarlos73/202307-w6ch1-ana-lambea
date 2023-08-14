import { PropsWithChildren, useState } from "react";
import { FilmStructure } from "../../../types";
import FilmsContext from "./FilmsContext";

const FilmsContextProvider = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [films] = useState<FilmStructure[]>([]);

  return (
    <FilmsContext.Provider value={films}>{children}</FilmsContext.Provider>
  );
};

export default FilmsContextProvider;
