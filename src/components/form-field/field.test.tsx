import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Field } from ".";
import Person from "../../assets/images/icon-person.svg?react";
import { Input } from "../form-field/form-input";
import { Label } from "../form-field/form-label";

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
      const user = userEvent.setup();
      render(
        <Field value={null} setValue={fakeSetter}>
          <Label>People</Label>
          <Input icon={Person} />
        </Field>
      );
      await user.type(screen.getByLabelText("People"), "9");

      expect(fakeSetter).toHaveBeenCalledWith(9);
    });

    it("has value 10", async () => {
      const user = userEvent.setup();
      render(
        <Field value={null} setValue={fakeSetter}>
          <Label>People</Label>
          <Input icon={Person} />
        </Field>
      );
      await user.type(screen.getByLabelText("People"), "10");

      expect(fakeSetter).toHaveBeenCalledWith(10);
    });

    it("has value -5", async () => {
      const user = userEvent.setup();
      render(
        <Field value={null} setValue={fakeSetter}>
          <Label>People</Label>
          <Input icon={Person} />
        </Field>
      );
      await user.type(screen.getByLabelText("People"), "-5");

      expect(fakeSetter).toHaveBeenCalledWith(-5);
    });
  });

  describe("Float values", () => {
    it("has value 9.5", async () => {
      const user = userEvent.setup();
      render(
        <Field value={null} setValue={fakeSetter}>
          <Label>People</Label>
          <Input icon={Person} strategy={parseFloat} />
        </Field>
      );
      await user.type(screen.getByLabelText("People"), "9.5");

      expect(fakeSetter).toHaveBeenCalledWith(9.5);
    });

    it("has value -9.5", async () => {
      const user = userEvent.setup();
      render(
        <Field value={null} setValue={fakeSetter}>
          <Label>People</Label>
          <Input icon={Person} strategy={parseFloat} />
        </Field>
      );
      await user.type(screen.getByLabelText("People"), "-9.5");

      expect(fakeSetter).toHaveBeenCalledWith(-9.5);
    });
  });

  describe("Ilegal values", () => {
    it("has value 9", async () => {
      const user = userEvent.setup();
      render(
        <Field value={null} setValue={fakeSetter}>
          <Label>People</Label>
          <Input icon={Person} />
        </Field>
      );
      await user.type(screen.getByLabelText("People"), "abc9");

      expect(fakeSetter).toHaveBeenCalledWith(9);
    });

    it("has value 910", async () => {
      const user = userEvent.setup();
      render(
        <Field value={null} setValue={fakeSetter}>
          <Label>People</Label>
          <Input icon={Person} />
        </Field>
      );
      await user.type(screen.getByLabelText("People"), "9asbd10");

      expect(fakeSetter).toHaveBeenCalledWith(910);
    });

    it("setter not called", async () => {
      const user = userEvent.setup();
      render(
        <Field value={null} setValue={fakeSetter}>
          <Label>People</Label>
          <Input icon={Person} />
        </Field>
      );
      await user.type(screen.getByLabelText("People"), "asbd");

      expect(fakeSetter).toBeCalledTimes(0);
    });
  });
});
