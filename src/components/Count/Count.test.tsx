import { render, screen } from "@testing-library/react";
import { filmsMock } from "../../mocks/filmsMock";
import Count from "./Count";

describe("Given a Counter component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'Listando 4 películas'", () => {
      const expectedText = `Listando ${filmsMock.length} películas`;

      render(<Count />);

      const count = screen.getByText(expectedText);

      expect(count).toBeInTheDocument();
    });
  });
});
