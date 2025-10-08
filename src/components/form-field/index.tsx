import { memo, useId, type FC } from "react";
import { cn } from "../../../utils";
import { FieldContext } from "./context";

interface Props extends React.PropsWithChildren {
  className?: string;
  value: number | null;
  setValue: React.Dispatch<React.SetStateAction<number | null>>;
}

export const Field: FC<Props> = memo(
  ({ children, className, value, setValue }) => {
    let error: string | null = null;
    if (value && value < 0) error = "Can't be negative";
    if (value == 0) error = "Can't be zero";
    const id = useId();
    console.log("render field", id);
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
  }
);
