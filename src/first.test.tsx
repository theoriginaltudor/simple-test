import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("renders", () => {
    render(<App />);

    expect(screen.queryByText("Vite + React")).toBeVisible();
  });
});

describe("my first test", () => {
  it("works", () => {
    expect(true);
  });
});
