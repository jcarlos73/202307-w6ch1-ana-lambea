import { render, screen } from "@testing-library/react";
import { filmsMock } from "../../mocks/filmsMock";
import FilmsContext from "../../store/films/context/FilmsContext";
import Count from "./Count";

describe("Given a Counter component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'Listando 4 películas'", () => {
      const expectedText = `Listando ${filmsMock.length} películas`;
      const loadFilms = vi.fn();

      render(
        <FilmsContext.Provider value={{ films: filmsMock, loadFilms }}>
          <Count />
        </FilmsContext.Provider>,
      );

      const count = screen.getByText(expectedText);

      expect(count).toBeInTheDocument();
    });
  });
});
