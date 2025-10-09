import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Field } from ".";
import Person from "../../assets/images/icon-person.svg?react";
import { Input } from "../form-field/form-input";
import { Label } from "../form-field/form-label";

describe("Input", () => {
  const fakeSetter = vi.fn();

  beforeEach(() => vi.resetAllMocks());

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

    it("has value -910.08", async () => {
      const user = userEvent.setup();
      render(
        <Field value={null} setValue={fakeSetter}>
          <Label>People</Label>
          <Input icon={Person} strategy={parseFloat} />
        </Field>
      );
      await user.type(screen.getByLabelText("People"), "-91-0.0.8");

      expect(fakeSetter).toHaveBeenCalledWith(-910.08);
    });

    it("doesn't allow value -.5", async () => {
      const user = userEvent.setup();
      render(
        <Field value={null} setValue={fakeSetter}>
          <Label>People</Label>
          <Input icon={Person} />
        </Field>
      );
      await user.type(screen.getByLabelText("People"), "-.5");

      expect(fakeSetter).toHaveBeenCalledWith(-5);
    });
  });
});
