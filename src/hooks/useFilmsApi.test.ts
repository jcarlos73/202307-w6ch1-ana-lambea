import { renderHook } from "@testing-library/react";
import { filmsMock } from "../mocks/filmsMock";
import { handlersError } from "../mocks/handlers";
import { server } from "../mocks/server";
import useFilmsApi from "./useFilmsApi";

describe("Given a UseFilmApitest", () => {
  describe("When GetPlants is called", () => {
    test("Then it should return a list of plants when resolving successful", async () => {
      const {
        result: {
          current: { getFilms },
        },
      } = renderHook(() => useFilmsApi());

      const films = await getFilms();

      expect(films).toStrictEqual(filmsMock);
    });

    test("Then it should throw an error when the request is rejected", () => {
      server.resetHandlers(...handlersError);
      const expectedErrorMessage = new Error("Films not found");
      const {
        result: {
          current: { getFilms },
        },
      } = renderHook(() => useFilmsApi());

      const filmsPromise = getFilms();

      expect(filmsPromise).rejects.toThrowError(expectedErrorMessage);
    });
  });
});
