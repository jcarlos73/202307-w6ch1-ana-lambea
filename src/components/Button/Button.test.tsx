import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { X } from "react-feather";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'eliminar película'", () => {
      const mockFunction = vi.fn();
      const expectedAriaLabel = "eliminar película";

      render(
        <Button actionOnClick={mockFunction}>
          <X aria-label="eliminar película" />
        </Button>,
      );

      const button = screen.getByLabelText(expectedAriaLabel);

      expect(button).toHaveAccessibleName(expectedAriaLabel);
    });
  });

  describe("When the user clicks on it", () => {
    test("Then the received function should be called", async () => {
      const mockFunction = vi.fn();

      render(<Button actionOnClick={mockFunction} />);

      const button = screen.getByRole("button");

      await userEvent.click(button);

      expect(mockFunction).toHaveBeenCalled();
    });
  });
});
