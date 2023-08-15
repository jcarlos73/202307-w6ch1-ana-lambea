import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  describe("When the user types 'Viaje a Darjeeling', 'https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/67/28/56/20350733.jpg', 'Wes Anderson' and 2007 on each input", () => {
    test("Then the inputs should have the typed value", async () => {
      const typedTitle = "Viaje a Darjeeling";
      const typedPoster =
        "https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/67/28/56/20350733.jpg";
      const typedDirector = "Wes Anderson";
      const typedYear = 2007;

      render(<NewFilm />);

      const titleInput = screen.getByRole("textbox", {
        name: /título:/i,
      }) as HTMLInputElement;
      const posterInput = screen.getByRole("textbox", {
        name: /url cartel:/i,
      }) as HTMLInputElement;
      const yearInput = screen.getByRole("spinbutton", {
        name: /año:/i,
      }) as HTMLInputElement;
      const directorInput = screen.getByRole("textbox", {
        name: /dirección:/i,
      }) as HTMLInputElement;

      await userEvent.type(titleInput, typedTitle);
      await userEvent.type(posterInput, typedPoster);
      await userEvent.type(yearInput, typedYear.toString());
      await userEvent.type(directorInput, typedDirector);

      expect(titleInput.value).toBe(typedTitle);
      expect(posterInput.value).toBe(typedPoster);
      expect(yearInput.value).toBe(typedYear.toString());
      expect(directorInput.value).toBe(typedDirector);
    });
  });
});
