import { rest } from "msw";
import { filmsMock } from "./filmsMock";

export const handlers = [
  rest.get(`${import.meta.env.VITE_FILMS_API_URL}/films/`, (_req, res, ctx) => {
    return res(ctx.json(filmsMock));
  }),
];
