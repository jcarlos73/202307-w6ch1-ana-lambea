import { useState } from "react";
import { FilmStructure } from "../../types";
import Button from "../Button/Button";
import "./NewFilm.css";

const NewFilm = (): React.ReactElement => {
  const [canSubmit] = useState(false);

  const initialFilmData = {
    id: 0,
    title: "",
    year: 0,
    poster: "",
    director: "",
  };

  const [newFilm, setNewFilm] = useState<FilmStructure>(initialFilmData);

  const addNewFilm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewFilm((newFilm) => ({
      ...newFilm,
      [event.target.id]: event.target.value,
    }));
  };

  return (
    <form className="form-film">
      <div className="form-control">
        <label htmlFor="title">Título: </label>
        <input
          type="text"
          id="title"
          value={newFilm.title}
          onChange={addNewFilm}
        />
      </div>
      <div className="form-control">
        <label htmlFor="director">Dirección: </label>
        <input
          type="text"
          id="director"
          value={newFilm.director}
          onChange={addNewFilm}
        />
      </div>
      <div className="form-control">
        <label htmlFor="year">Año: </label>
        <input
          type="number"
          id="year"
          value={newFilm.year}
          onChange={addNewFilm}
        />
      </div>
      <div className="form-control">
        <label htmlFor="poster">URL cartel: </label>
        <input
          type="url"
          id="poster"
          value={newFilm.poster}
          onChange={addNewFilm}
        />
      </div>
      <div className="form-control">
        <Button disabled={!canSubmit}>Crear película</Button>
      </div>
    </form>
  );
};

export default NewFilm;
