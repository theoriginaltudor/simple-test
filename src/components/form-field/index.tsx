import { useId, useState, type FC } from "react";
import { FieldContext } from "./context";

export const Field: FC<React.PropsWithChildren> = ({ children }) => {
  const [value, setValue] = useState<number | null>(null);
  let error: string | null = null;
  if (value) {
    if (value < 0) error = "Can't be negative";
    if (value == 0) error = "Can't be zero";
  }
  const id = useId();
  return (
    <FieldContext
      value={{
        value,
        setValue,
        error,
        id,
      }}
    >
      {children}
    </FieldContext>
  );
};
