import { filmsMock } from "../../mocks/filmsMock";
import FilmCard from "../FilmCard/FilmCard";
import "./FilmsList.css";

const FilmsList = (): React.ReactElement => {
  return (
    <ul className="films">
      <li>
        <FilmCard film={filmsMock[0]} />
      </li>
    </ul>
  );
};

export default FilmsList;
