import { FilmStructure } from "../../../types";

export interface FilmsContextStructure {
  films: FilmStructure[];
  loadFilms: () => Promise<void>;
}
