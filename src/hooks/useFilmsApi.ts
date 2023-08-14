import { FilmStructure } from "../types";

const useFilmsApi = () => {
  const apiUrl = `${import.meta.env.VITE_FILMS_API_URL}/films/`;

  const getFilms = async () => {
    try {
      const response = await fetch(apiUrl);
      const films = (await response.json()) as FilmStructure[];

      return films;
    } catch {
      throw new Error("Films not found");
    }
  };

  return { getFilms };
};

export default useFilmsApi;
