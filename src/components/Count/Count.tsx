import { filmsMock } from "../../mocks/filmsMock";

const Count = (): React.ReactElement => {
  return <span className="count">Listando {filmsMock.length} películas</span>;
};

export default Count;
