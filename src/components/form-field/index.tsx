import { useId, useState, type FC } from "react";
import { cn } from "../../../utils";
import { FieldContext } from "./context";

interface Props extends React.PropsWithChildren {
  className?: string;
}

export const Field: FC<Props> = ({ children, className }) => {
  const [value, setValue] = useState<number | null>(null);
  let error: string | null = null;
  if (value && value < 0) error = "Can't be negative";
  if (value == 0) error = "Can't be zero";
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
      <div className={cn("flex flex-col gap-2", className)}>{children}</div>
    </FieldContext>
  );
};
