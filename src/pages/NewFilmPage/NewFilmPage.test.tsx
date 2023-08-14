import { render, screen } from "@testing-library/react";
import FilmsContextProvider from "../../store/films/context/FilmContextProvider";
import NewFilmPage from "./NewFilmPage";

describe("Given a NewFilmPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading 'Añadir nueva película'", () => {
      const expectedHeading = "Añadir nueva película";

      render(
        <FilmsContextProvider>
          <NewFilmPage />
        </FilmsContextProvider>,
      );

      const heading = screen.getByRole("heading", { name: expectedHeading });

      expect(heading).toBeInTheDocument();
    });
  });
});
