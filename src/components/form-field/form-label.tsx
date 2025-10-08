import { useContext, type FC, type LabelHTMLAttributes } from "react";
import { Text } from "../text";
import { FieldContext } from "./context";

type Props = Omit<LabelHTMLAttributes<HTMLLabelElement>, "htmlFor">;

export const Label: FC<Props> = ({ children, ...props }) => {
  const context = useContext(FieldContext);
  if (!context)
    return (
      <Text preset={6} className="text-orange-400">
        Context missing
      </Text>
    );
  const { id, error } = context;
  return (
    <div className="flex justify-between">
      <Text as="label" preset={5} htmlFor={id} {...props}>
        {children}
      </Text>

      {error && (
        <Text as="label" preset={5} className="text-orange-400">
          {error}
        </Text>
      )}
    </div>
  );
};
