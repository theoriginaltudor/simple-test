import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
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
