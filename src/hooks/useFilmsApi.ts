import { useCallback } from "react";
import { FilmStructure } from "../types";

const useFilmsApi = () => {
  const apiUrl = `${import.meta.env.VITE_FILMS_API_URL}/films/`;

  const getFilms = useCallback(async () => {
    try {
      const response = await fetch(apiUrl);
      const films = (await response.json()) as FilmStructure[];

      return films;
    } catch {
      throw new Error("Films not found");
    }
  }, [apiUrl]);

  return { getFilms };
};

export default useFilmsApi;
