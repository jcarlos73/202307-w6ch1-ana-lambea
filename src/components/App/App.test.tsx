import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FilmsContextProvider from "../../store/films/context/FilmContextProvider";
import App from "./App";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'Películas'", () => {
      const expectedTitle = "Películas";

      render(
        <BrowserRouter>
          <FilmsContextProvider>
            <App />
          </FilmsContextProvider>
        </BrowserRouter>,
      );

      const heading = screen.getByRole("heading", { name: expectedTitle });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show 'Listado de películas' and 'Añadir película'", () => {
      const expectedListPageText = "Listado de películas";
      const expectedAddText = "Añadir película";

      render(
        <BrowserRouter>
          <FilmsContextProvider>
            <App />
          </FilmsContextProvider>
        </BrowserRouter>,
      );

      const listLink = screen.getByRole("link", {
        name: expectedListPageText,
      });
      const addLink = screen.getByRole("link", { name: expectedAddText });

      expect(listLink).toBeInTheDocument();
      expect(addLink).toBeInTheDocument();
    });

    test("Then it should show 'Listado de películas' and 'Añadir película'", () => {
      const expectedListPageText = "Listado de películas";
      const expectedAddText = "Añadir película";

      render(
        <BrowserRouter>
          <FilmsContextProvider>
            <App />
          </FilmsContextProvider>
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
