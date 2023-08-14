import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";

describe("Given a Navigation component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'Listado de películas' and 'Añadir película'", () => {
      const expectedListPageText = "Listado de películas";
      const expectedAddText = "Añadir película";

      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>,
      );

      const listLink = screen.getByRole("link", {
        name: expectedListPageText,
      });
      const addLink = screen.getByRole("link", { name: expectedAddText });

      expect(listLink).toBeInTheDocument();
      expect(addLink).toBeInTheDocument();
    });
  });
});
