import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App";
import Person from "./assets/images/icon-person.svg?react";
import { Field } from "./components/form-field";
import { Input } from "./components/form-field/form-input";
import { Label } from "./components/form-field/form-label";

describe("App", () => {
  it("renders", () => {
    render(<App />);
    expect(screen.queryByText("Bill")).toBeVisible();
  });
});

describe("Fields", () => {
  it("shows zero error message", () => {
    render(
      <Field value={0} setValue={() => {}}>
        <Label>People</Label>
        <Input icon={Person} />
      </Field>
    );

    expect(screen.getByText("Can't be zero")).toBeVisible();
  });

  it("shows negative error message", () => {
    render(
      <Field value={-10} setValue={() => {}}>
        <Label>People</Label>
        <Input icon={Person} />
      </Field>
    );

    expect(screen.getByText("Can't be negative")).toBeVisible();
  });
});

describe("Input", () => {
  const fakeSetter = vi.fn();

  beforeEach(() => vi.resetAllMocks());

  describe("Integer values", () => {
    it("has value 9", async () => {
      render(
        <Field value={null} setValue={fakeSetter}>
          <Label>People</Label>
          <Input icon={Person} />
        </Field>
      );
      await userEvent.type(screen.getByLabelText("People"), "9");

      expect(fakeSetter).toHaveBeenCalledWith(9);
    });

    it("has value 0", async () => {
      render(
        <Field value={null} setValue={fakeSetter}>
          <Label>People</Label>
          <Input icon={Person} />
        </Field>
      );
      await userEvent.type(screen.getByLabelText("People"), "0");

      expect(fakeSetter).toHaveBeenCalledWith(0);
    });

    it("has value -5", async () => {
      render(
        <Field value={null} setValue={fakeSetter}>
          <Label>People</Label>
          <Input icon={Person} />
        </Field>
      );
      await userEvent.type(screen.getByLabelText("People"), "-5");

      expect(fakeSetter).toHaveBeenCalledWith(-5);
    });
  });

  describe("Float values", () => {
    it("has value 9.5", async () => {
      render(
        <Field value={null} setValue={fakeSetter}>
          <Label>People</Label>
          <Input icon={Person} strategy={parseFloat} />
        </Field>
      );
      await userEvent.type(screen.getByLabelText("People"), "9.5");

      expect(fakeSetter).toHaveBeenCalledWith(9.5);
    });

    it("has value -9.5", async () => {
      render(
        <Field value={null} setValue={fakeSetter}>
          <Label>People</Label>
          <Input icon={Person} strategy={parseFloat} />
        </Field>
      );
      await userEvent.type(screen.getByLabelText("People"), "-9.5");

      expect(fakeSetter).toHaveBeenCalledWith(-9.5);
    });
  });
});

// describe("calculate total and tip", () => {
//   it("gets correct values", () => {
//     render(<App />);

//     userEvent.type(screen.getByLabelText("Bill"), "142.55");
//     userEvent.type(screen.getByLabelText("Number of People"), "5");
//     userEvent.click(screen.getByTestId("15,%"));

//     expect(screen.getByTestId("Tip Amount").innerHTML).toBe("$4.27");
//     expect(screen.getByTestId("Total").innerHTML).toBe("$32.79");
//   });
// });
