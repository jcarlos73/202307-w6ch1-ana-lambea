import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import useFilmsApi from "../../../hooks/useFilmsApi";
import { FilmStructure } from "../../../types";
import FilmsContext from "./FilmsContext";
import { FilmsContextStructure } from "./types";

const FilmsContextProvider = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [films, setFilms] = useState<FilmStructure[]>([]);
  const { getFilms } = useFilmsApi();

  const loadFilms = useCallback(async () => {
    const films = await getFilms();
    setFilms([...films]);
  }, [getFilms]);

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
