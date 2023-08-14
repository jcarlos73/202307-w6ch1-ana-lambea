import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import { filmsMock } from "../../../mocks/filmsMock";
import { FilmStructure } from "../../../types";
import FilmsContext from "./FilmsContext";
import { FilmsContextStructure } from "./type";

const FilmsContextProvider = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [films, setFilms] = useState<FilmStructure[]>([]);

  const loadFilms = useCallback(() => {
    setFilms(filmsMock);
  }, []);

  const filmsContextValue = useMemo(
    (): FilmsContextStructure => ({
      films,
      loadFilms,
    }),
    [films, loadFilms],
  );

  return (
    <FilmsContext.Provider value={filmsContextValue}>
      {children}
    </FilmsContext.Provider>
  );
};

export default FilmsContextProvider;
