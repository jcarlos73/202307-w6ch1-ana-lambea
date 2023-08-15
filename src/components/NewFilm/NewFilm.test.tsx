import { render, screen } from "@testing-library/react";
import NewFilm from "./NewFilm";

describe("Given a NewFilm component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a 'Título' field, 'Dirección' field, 'Año' field, 'URL cartel' field, 'Crear película' button", () => {
      const titleInputLabelText = "Título:";
      const yearInputLabelText = "Dirección:";
      const directorInputLabelText = "Año:";
      const posterInputLabelText = "URL cartel:";
      const buttonText = "Crear película";

      render(<NewFilm />);

      const titleInput = screen.getByLabelText(titleInputLabelText);
      const yearInput = screen.getByLabelText(yearInputLabelText);
      const directorInput = screen.getByLabelText(directorInputLabelText);
      const posterInput = screen.getByLabelText(posterInputLabelText);
      const button = screen.getByText(buttonText);

      expect(titleInput).toBeInTheDocument;
      expect(yearInput).toBeInTheDocument;
      expect(directorInput).toBeInTheDocument;
      expect(posterInput).toBeInTheDocument;
      expect(button).toBeInTheDocument;
    });
  });
});
