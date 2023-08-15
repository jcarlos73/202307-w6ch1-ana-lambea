import { render, screen } from "@testing-library/react";
import { filmsMock } from "../../mocks/filmsMock";
import FilmsContext from "../../store/films/context/FilmsContext";
import FilmsList from "./FilmsList";

describe("Given a FilmList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 4 li elements", () => {
      const loadFilms = vi.fn();
      const expectedLiElementsNumber = filmsMock.length;

      render(
        <FilmsContext.Provider value={{ films: filmsMock, loadFilms }}>
          <FilmsList />
        </FilmsContext.Provider>,
      );

      const liElements = screen.getAllByRole("listitem");

      expect(liElements.length).toBe(expectedLiElementsNumber);
    });
  });
});
