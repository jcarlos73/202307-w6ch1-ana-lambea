import { render, screen } from "@testing-library/react";
import FilmsListPage from "./FilmsListPage";

describe("Given a NewFilmPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading 'Añadir nueva película'", () => {
      const expectedHeading = "Listado de películas";

      render(<FilmsListPage />);

      const heading = screen.getByRole("heading", { name: expectedHeading });

      expect(heading).toBeInTheDocument();
    });
  });
});
