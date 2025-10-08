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
  it("gets correct values", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByLabelText("Bill"), "142.55");
    await user.type(screen.getByLabelText("Number of People"), "5");
    await user.click(screen.getByTestId("15,%"));

    expect(screen.getByTestId("Tip Amount").innerHTML).toBe("$4.27");
    expect(screen.getByTestId("Total").innerHTML).toBe("$32.79");
  });

  it("expects tip and total to be 0", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByLabelText("Bill"), "-142.55");
    await user.type(screen.getByLabelText("Number of People"), "5");
    await user.click(screen.getByTestId("15,%"));

    expect(screen.getByTestId("Tip Amount").innerHTML).toBe("$0.00");
    expect(screen.getByTestId("Total").innerHTML).toBe("$0.00");
  });

  it("expects tip and total to be 0", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByLabelText("Bill"), "-142.55");
    await user.type(screen.getByLabelText("Number of People"), "-5");
    await user.click(screen.getByTestId("15,%"));

    expect(screen.getByTestId("Tip Amount").innerHTML).toBe("$0.00");
    expect(screen.getByTestId("Total").innerHTML).toBe("$0.00");
  });

  it("expects tip and total to be 0", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByLabelText("Bill"), "0");
    await user.type(screen.getByLabelText("Number of People"), "5");
    await user.click(screen.getByTestId("15,%"));

    expect(screen.getByTestId("Tip Amount").innerHTML).toBe("$0.00");
    expect(screen.getByTestId("Total").innerHTML).toBe("$0.00");
  });

  it("expects tip and total to be 0", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByLabelText("Bill"), "142.55");
    await user.type(screen.getByLabelText("Number of People"), "5");

    expect(screen.getByTestId("Tip Amount").innerHTML).toBe("$0.00");
    expect(screen.getByTestId("Total").innerHTML).toBe("$0.00");
  });
});
