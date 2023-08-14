import { render, screen } from "@testing-library/react";
import { filmMock } from "../../mocks/filmsMock";
import FilmCard from "./FilmCard";

describe("Given a FilmCard component", () => {
  describe("When it receives a film 'Viaje a Darjeeling'", () => {
    const film = filmMock;

    test("Then it should show a heading 'Viaje a Darjeeling (2007)'", () => {
      const expectedHeading = `${film.title} (${film.year})`;

      render(<FilmCard film={film} />);

      const heading = screen.getByRole("heading", { name: expectedHeading });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show an image with an alt 'Cartel de 'Viaje a Darjeeling''", () => {
      const expectedAltText = `Cartel de '${film.title}'`;

      render(<FilmCard film={film} />);

      const image = screen.getByAltText(expectedAltText);

      expect(image).toBeInTheDocument();
    });

    test("Then it should show a text 'Dirección: Wes Anderson'", () => {
      const expectedText = `Dirección: ${film.director}`;

      render(<FilmCard film={film} />);

      const direccion = screen.getByText(expectedText);

      expect(direccion).toBeInTheDocument();
    });

    test("Then it should show a button", () => {
      render(<FilmCard film={film} />);

      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
    });
  });
});
