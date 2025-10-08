import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("renders", () => {
    render(<App />);
    expect(screen.queryByText("Bill")).toBeVisible();
  });
});

describe("calculate total and tip", () => {
  it("gets correct values", () => {
    render(<App />);

    userEvent.type(screen.getByLabelText("Bill"), "142.55");
    userEvent.type(screen.getByLabelText("Number of People"), "5");
    userEvent.click(screen.getByTestId("15,%"));

    expect(screen.getByTestId("Tip Amount").innerHTML).toBe("$4.27");
    expect(screen.getByTestId("Total").innerHTML).toBe("$32.79");
  });
});
