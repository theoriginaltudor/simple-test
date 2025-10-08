import {
  useContext,
  type ComponentType,
  type FC,
  type InputHTMLAttributes,
  type SVGProps,
} from "react";
import { cn } from "../../../utils";
import { Text } from "../text";
import { FieldContext } from "./context";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export const Input: FC<Props> = ({ name, icon: Icon }) => {
  const context = useContext(FieldContext);
  if (!context)
    return (
      <Text preset={6} className="text-orange-400">
        Context missing
      </Text>
    );
  const { id, error, value, setValue } = context;
  return (
    <div
      className={cn(
        "bg-grey-50 flex items-center py-2 px-4 rounded-[5px] border border-white",
        {
          "border-orange-400": error,
          "border-green-400": value && !error,
        }
      )}
    >
      <Icon className="w-[13px] h-[16px]" />
      <Text preset={3} className="flex-1">
        <input
          id={id}
          type="number"
          name={name}
          className="h-9 w-full text-green-900 text-end"
          value={value ?? ""}
          placeholder="0"
          onChange={(e) => {
            const numberValue = Number.parseInt(e.currentTarget.value);
            console.log(numberValue);
            if (!isNaN(numberValue)) setValue(numberValue);
          }}
        />
      </Text>
    </div>
  );
};
