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
  strategy?: typeof parseInt | typeof parseFloat;
}

export const Input: FC<Props> = ({ name, icon: Icon, strategy = parseInt }) => {
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
        "bg-grey-50 flex items-center py-2 px-4 rounded-[5px] border-2 border-white focus-within:border-green-400 hover:border-green-400 transition-colors duration-150",
        {
          "border-orange-400 hover:border-orange-400 focus-within:border-orange-400":
            error,
        }
      )}
    >
      <Icon className="w-[13px] h-[16px]" />
      <Text preset={3} className="flex-1">
        <input
          id={id}
          type="text"
          name={name}
          className="h-9 w-full text-green-900 text-end focus-visible:outline-0"
          value={value ?? ""}
          placeholder="0"
          onInput={(e) => {
            const numberValue = strategy(e.currentTarget.value);
            if (!isNaN(numberValue)) setValue(numberValue);
          }}
        />
      </Text>
    </div>
  );
};
