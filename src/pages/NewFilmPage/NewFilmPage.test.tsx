import { render, screen } from "@testing-library/react";
import NewFilmPage from "./NewFilmPage";

describe("Given a NewFilmPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading 'Añadir nueva película'", () => {
      const expectedHeading = "Añadir nueva película";

      render(<NewFilmPage />);

      const heading = screen.getByRole("heading", { name: expectedHeading });

      expect(heading).toBeInTheDocument();
    });
  });
});
