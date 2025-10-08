import { createContext } from "react";

export type FieldContextType = {
  error: string | null;
  value: number | null;
  setValue: React.Dispatch<React.SetStateAction<number | null>>;
  id: string;
};

export const FieldContext = createContext<FieldContextType | undefined>(
  undefined
);
